import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { fetchUserMentions } from '@/lib/twitter';

// Run as Edge function for Cloudflare Workers compatibility
export const runtime = 'edge';

export async function GET(request: Request) {
    // Simple auth check for cron jobs if deployed to Vercel
    const authHeader = request.headers.get('authorization');
    if (
        process.env.CRON_SECRET &&
        authHeader !== `Bearer ${process.env.CRON_SECRET}`
    ) {
        return new Response('Unauthorized', { status: 401 });
    }

    try {
        // 1. Fetch all profiles from Supabase
        const { data: profiles, error: profilesError } = await supabaseAdmin
            .from('profiles')
            .select('id, twitter_handle');

        if (profilesError) {
            throw profilesError;
        }

        if (!profiles || profiles.length === 0) {
            return NextResponse.json({ message: 'No profiles to sync' });
        }

        let totalSynced = 0;

        // 2. Iterate and sync each profile
        // Note: Twitter API has rate limits, in production you may need to stagger or batch these
        for (const profile of profiles) {
            if (!profile.twitter_handle) continue;

            try {
                const mentions = await fetchUserMentions(profile.twitter_handle);

                if (mentions.length > 0) {
                    // Prepare for upsert
                    const recordsToInsert = mentions.map(m => ({
                        id: m.id,
                        profile_id: profile.id,
                        text: m.text,
                        author_name: m.author_name,
                        author_username: m.author_username,
                        created_at: m.created_at
                    }));

                    // 3. Upsert into mentions table
                    // using ignoreDuplicates: true means anything already fetched won't have its `is_approved` status overwritten
                    const { error: upsertError } = await supabaseAdmin
                        .from('mentions')
                        .upsert(recordsToInsert, {
                            onConflict: 'id',
                            ignoreDuplicates: true
                        });

                    if (upsertError) {
                        console.error(`Error saving mentions for ${profile.twitter_handle}:`, upsertError);
                    } else {
                        totalSynced += mentions.length;
                    }
                }
            } catch (err) {
                console.error(`Failed to sync for ${profile.twitter_handle}:`, err);
            }
        }

        return NextResponse.json({ success: true, totalSynced });

    } catch (err: unknown) {
        console.error('Fatal error in sync cron:', err);
        return NextResponse.json({ success: false, error: err instanceof Error ? err.message : String(err) }, { status: 500 });
    }
}
