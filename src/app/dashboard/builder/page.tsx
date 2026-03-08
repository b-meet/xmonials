import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/Navbar';
import WidgetBuilderClient from '@/components/WidgetBuilderClient';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function BuilderPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950/50 font-sans transition-colors duration-300">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <WidgetBuilderClient profileId={user.id} />
            </main>
        </div>
    );
}
