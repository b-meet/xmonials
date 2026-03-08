import { createClient } from '@/lib/supabase/server';
import MentionsList from './MentionsList';
import { Mention } from '@/components/MentionItem';
import Navbar from '@/components/Navbar';
import { redirect } from 'next/navigation';

export const revalidate = 0; // Disable static caching for this page

export default async function DashboardPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    // Only fetch mentions belonging to the logged in user
    const { data: mentions, error } = await supabase
        .from('mentions')
        .select('*')
        .eq('profile_id', user.id)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching mentions:', error);
    }

    const typedMentions: Mention[] = mentions || [];

    // Calculate statistics
    const total = typedMentions.length;
    const approved = typedMentions.filter(m => m.is_approved).length;
    const pending = total - approved;

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950/50 font-sans transition-colors duration-300">
            <Navbar />

            <main className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                            Your Mention Inbox
                        </h1>
                        <p className="mt-2 text-lg text-neutral-500 dark:text-neutral-400">
                            Curate the best tweets about your product and turn them into powerful testimonials.
                        </p>
                        <div className="mt-6">
                            <a href="/dashboard/builder" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                Configure Widget
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Pending</span>
                            <span className="text-2xl font-bold text-neutral-900 dark:text-white">{pending}</span>
                        </div>
                        <div className="flex flex-col rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-4 py-3 shadow-sm">
                            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-500">Approved</span>
                            <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{approved}</span>
                        </div>
                    </div>
                </div>

                <MentionsList initialMentions={typedMentions} />
            </main>
        </div>
    );
}
