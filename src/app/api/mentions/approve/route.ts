import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { id, is_approved } = body;

        if (!id || typeof is_approved !== 'boolean') {
            return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
        }

        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Logic for limits
        if (is_approved) {
            // Check subscription tier
            const { data: profile } = await supabase.from('profiles').select('subscription_tier').eq('id', user.id).single();

            if (profile?.subscription_tier === 'free') {
                // Check current approved count
                const { count, error: countError } = await supabase
                    .from('mentions')
                    .select('*', { count: 'exact', head: true })
                    .eq('profile_id', user.id)
                    .eq('is_approved', true);

                if (!countError && count !== null && count >= 5) {
                    return NextResponse.json({ error: 'Free tier limit reached. Please upgrade to Pro to approve more than 5 testimonials.' }, { status: 403 });
                }
            }
        }

        const { data, error } = await supabase
            .from('mentions')
            .update({ is_approved })
            .eq('id', id)
            .eq('profile_id', user.id) // Security check to ensure they own the mention
            .select()
            .single();

        if (error) {
            throw error;
        }

        return NextResponse.json({ success: true, data });
    } catch (error: unknown) {
        console.error('Failed to update mention:', error);
        return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
    }
}
