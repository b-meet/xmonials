import Navbar from '@/components/Navbar';

export default function PrivacyPolicy() {
    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-950 transition-colors duration-300">
            <Navbar />
            <main className="flex-1 container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="prose prose-blue dark:prose-invert max-w-none">
                    <h1>Privacy Policy</h1>
                    <p className="text-sm text-neutral-500">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section className="mt-8">
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to Xmonials. We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services. Our privacy practices are designed to be transparent and comply with the highest standards of data protection.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2>2. Data Collection and Minimization</h2>
                        <p>
                            At Xmonials, we practice strict <strong>Data Minimization</strong>. When you use our service, we collect and store only what is absolutely necessary:
                        </p>
                        <ul>
                            <li><strong>Approved Tweets:</strong> We permanently store tweets that you explicitly mark as &quot;Approved&quot; to generate your embeddable widgets.</li>
                            <li><strong>Pending Mentions:</strong> We maintain a temporary, rolling cache of your recent &quot;Pending&quot; mentions to display in your dashboard inbox.</li>
                        </ul>
                        <p>We do not store your entire timeline or any public data beyond your direct mentions and approved testimonials.</p>
                    </section>

                    <section className="mt-8">
                        <h2>3. Security and Token Protection</h2>
                        <p>
                            <strong>Token Security:</strong> By authorizing Xmonials through &quot;Sign in with X&quot;, we are granted OAuth 2.0 tokens to access your mentions on your behalf. These access and refresh tokens are stored securely in our database using industry-standard encryption. They are strictly used by our automated edge functions to sync your testimonials and are never exposed to the public.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2>4. Third-Party Disclosure</h2>
                        <p>
                            <strong>Primary Third-Party Data Provider:</strong> Xmonials relies on <strong>X (formerly Twitter)</strong> as our primary third-party data provider. Our service interacts with the X API to retrieve public mentions for your profile.
                        </p>
                        <p>
                            We do not share, sell, trade, or rent any of your personal data or your synced X data to any marketers or unauthorized third parties.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2>5. Your Rights and the Right to Erasure</h2>
                        <p>
                            You have complete ownership over your data. If you decide to close your account, you have the <strong>Right to Erasure</strong>. Initiating an account deletion will permanently wipe all cached tweets, approved testimonials, user metadata, and your OAuth tokens from our Supabase database. This action is irreversible.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2>6. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
