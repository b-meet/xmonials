import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { id, is_approved } = body;

        if (!id || typeof is_approved !== 'boolean') {
            return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
        }

        // Update the mention using the service role to bypass RLS since we aren't enforcing strict user auth here
        const { data, error } = await supabaseAdmin
            .from('mentions')
            .update({ is_approved })
            .eq('id', id)
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
