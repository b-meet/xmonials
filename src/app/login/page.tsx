import Navbar from '@/components/Navbar';
import LoginForm from './LoginForm';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    // Redirect to dashboard if already logged in
    if (data?.user) {
        redirect('/dashboard');
    }

    return (
        <div className="flex min-h-screen flex-col bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center px-4">
                <LoginForm />
            </main>
        </div>
    );
}
