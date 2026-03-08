import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-950 selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* --- HERO SECTION --- */}
        <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
          {/* Background Gradients */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 dark:opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8 inline-flex items-center rounded-full border border-neutral-200 bg-white/50 px-3 py-1 text-sm font-medium text-neutral-600 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-400">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                v1.0 is now live — start collecting today
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-7xl mb-8 font-display bg-clip-text">
                Turn your X mentions into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  powerful testimonials
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300 mb-10 max-w-2xl mx-auto">
                Stop manually screenshotting tweets. Xmonials automatically syncs your mentions, lets you approve the best ones, and creates a beautiful, SEO-optimized widget for your site.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/dashboard"
                  className="rounded-full bg-neutral-900 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-neutral-900/20 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 flex items-center gap-2"
                >
                  Start your free trial <ArrowRight className="h-5 w-5" />
                </Link>
                <a href="#pricing" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white hover:text-blue-600 transition-colors">
                  View pricing <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* "Aha" Moment Widget Demo */}
            <div className="mt-20 sm:mt-24 lg:mt-32 mx-auto max-w-5xl rounded-2xl p-4 sm:p-8 bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl relative">
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-center text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-6 mt-1 sm:mt-0">your-website.com</div>

              <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                {/* Dummy Widget Items to show the "Aha" moment */}
                {[
                  { name: 'Sarah Engineer', handle: 'sydcode', text: 'Just integrated @xmonials into my landing page. The SEO boost from their JSON-LD injection is insane! 🚀' },
                  { name: 'Mark Founder', handle: 'markbuilds', text: 'I used to spend hours designing testimonial cards. @xmonials does it automatically. Absolutely worth the upgrade.' },
                  { name: 'Design Co.', handle: 'designco_inc', text: 'The dark mode support on these embedded widgets is flawless. It matches our brand implicitly.' }
                ].map((testimonial, i) => (
                  <div key={i} className={`relative overflow-hidden rounded-2xl border ${i === 1 ? 'border-blue-500/50 shadow-lg shadow-blue-500/10 scale-105 z-10' : 'border-neutral-200 dark:border-neutral-800'} bg-white dark:bg-neutral-950 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-sm">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white leading-tight flex items-center gap-1">
                          {testimonial.name}
                          <CheckCircle2 className="w-3 h-3 text-blue-500" />
                        </h4>
                        <p className="text-xs text-neutral-500">@{testimonial.handle}</p>
                      </div>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURES SECTION --- */}
        <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Build trust faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                Everything you need to showcase social proof
              </p>
            </div>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-white">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600/10 dark:bg-blue-400/10 pb-1">
                      <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    Hourly Auto-Sync
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400">
                    <p className="flex-auto">Our edge functions check external APIs every hour to make sure you never miss a glowing review. Just approve them with one click.</p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-white">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600/10 dark:bg-indigo-400/10 pb-1">
                      <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{"<>"}</span>
                    </div>
                    Drop-in Widget
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400">
                    <p className="flex-auto">Embed your approved testimonials anywhere. Our widget automatically adapts to your site&apos;s height, width, and color scheme instantly.</p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900 dark:text-white">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-600/10 dark:bg-emerald-400/10 pb-1">
                      <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    SEO Optimized
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-400">
                    <p className="flex-auto">We automatically inject deeply nested JSON-LD schema into your widgets so Google indexes these reviews as native 5-star ratings for your product.</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section id="pricing" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Pricing</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                Pricing plans for teams of&nbsp;all&nbsp;sizes
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              Pick the tier that fits your incoming traffic. Upgrade anytime.
            </p>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">

              {/* Starter Tier */}
              <div className="rounded-3xl p-8 ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-neutral-900/50 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold leading-8 text-neutral-900 dark:text-white">Starter</h3>
                <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">The perfect way to start collecting and displaying social proof beautifully.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">$5</span>
                  <span className="text-sm font-semibold leading-6 text-neutral-600 dark:text-neutral-400">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400" /> Up to 50 approved mentions</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400" /> Standard widget styling</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400" /> Daily Twitter sync</li>
                </ul>
                <Link href="/dashboard" aria-describedby="tier-starter" className="mt-8 block rounded-xl bg-neutral-100 dark:bg-neutral-800 px-3 py-3 text-center text-sm font-semibold leading-6 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                  Get started
                </Link>
              </div>

              {/* Pro Tier */}
              <div className="rounded-3xl p-8 ring-2 ring-blue-600 dark:ring-blue-500 bg-neutral-900 dark:bg-neutral-950 relative shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-500/20 blur-2xl"></div>
                <h3 className="text-lg font-semibold leading-8 text-white flex items-center justify-between">
                  Pro <span className="rounded-full bg-blue-600/20 px-2.5 py-1 text-xs font-semibold text-blue-400 leading-5">Most popular</span>
                </h3>
                <p className="mt-4 text-sm leading-6 text-neutral-400">For serious creators and SaaS apps looking to dominate SEO and conversions.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-white">$30</span>
                  <span className="text-sm font-semibold leading-6 text-neutral-400">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-neutral-300">
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-400" /> Unlimited approved mentions</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-400" /> Advanced widget styling & Dark Mode</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-400" /> Hourly Twitter sync</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-5 flex-none text-blue-400" /> JSON-LD automated SEO injection</li>
                </ul>
                <Link href="/dashboard" aria-describedby="tier-pro" className="mt-8 block rounded-xl bg-blue-600 px-3 py-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
                  Get started
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/privacy" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">Terms of Service</Link>
            <a href="https://twitter.com/xmonials" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">Follow us on X</a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-neutral-500 dark:text-neutral-400">
              &copy; {new Date().getFullYear()} Xmonials, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
