import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, MessageSquareQuote, MousePointerClick } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fdfcfb] dark:bg-neutral-950 selection:bg-[#FFE55C]/40 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* --- HERO SECTION --- */}
        <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-32 px-6">
          <div className="mx-auto max-w-5xl text-center">

            {/* Massive punchy Title */}
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.1] mb-8">
              Turn your X mentions into <br className="hidden md:block" />
              <span className="relative inline-block mt-2 md:mt-0">
                <span className="absolute -inset-1 block translate-y-2 translate-x-1 -rotate-2 rounded-lg bg-[#FFE55C] dark:bg-blue-600"></span>
                <span className="relative text-neutral-900 dark:text-white">powerful testimonials</span>
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-[1.15rem] leading-8 text-neutral-600 dark:text-neutral-400 mb-12 font-medium">
              Collect reviews from your customers on X, prioritize the best ones, and build a beautiful widget users trust.
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="group relative inline-flex items-center justify-center rounded-full bg-neutral-900 px-10 py-5 text-xl font-bold text-white transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-900/20 active:translate-y-0 dark:bg-white dark:text-neutral-900"
              >
                Get your widget <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-sm font-medium text-neutral-500 flex items-center gap-1 mt-2">
                <span className="flex h-2 w-2 rounded-full bg-[#FFE55C] dark:bg-blue-400"></span>
                Plans start at just $5/mo.
              </p>
            </div>

            {/* Social Proof "Floating" Cards just like insigh.to */}
            <div className="mt-20 md:mt-28 mx-auto max-w-4xl grid md:grid-cols-2 gap-8 relative z-10">

              <div className="bg-white dark:bg-neutral-900 p-6 rounded-[2rem] shadow-xl border border-neutral-100 dark:border-neutral-800 rotate-[-3deg] hover:rotate-0 transition-transform origin-bottom-left text-left">
                <p className="text-lg font-bold leading-tight mb-6">&quot;Amazing. Trying to keep my testimonials updated manually was a massive annoyance.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center font-bold overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold">Maker Dev</div>
                    <div className="text-sm text-neutral-500 font-medium">45K followers on 𝕏</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-900 p-6 rounded-[2rem] shadow-xl border border-neutral-100 dark:border-neutral-800 rotate-[3deg] hover:rotate-0 transition-transform origin-bottom-right text-left mt-8 md:mt-0">
                <p className="text-lg font-bold leading-tight mb-6">&quot;Really useful product. It auto-synced 50+ mentions yesterday and my conversions spiked.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center font-bold overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Annie" alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold">SaaS Founder</div>
                    <div className="text-sm text-neutral-500 font-medium">12K followers on 𝕏</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- THE "WHY" SECTION --- */}
        <section className="py-24 sm:py-32 bg-white dark:bg-neutral-900 border-y border-neutral-100 dark:border-neutral-800">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">

            <h2 className="text-4xl font-black tracking-tight mb-16">
              90% of makers manually copy-paste tweets. Don&apos;t be one of them.
            </h2>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#fdfcfb] dark:bg-neutral-950 rounded-[2rem] border border-neutral-100 dark:border-neutral-800 text-left gap-6 group">
                <div className="flex items-center gap-4">
                  <div className="bg-neutral-100 dark:bg-neutral-800 w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg">Hunt for mentions</h3>
                    <p className="text-neutral-500 text-sm">Searching X daily is exhausting.</p>
                  </div>
                </div>
                <div className="text-neutral-400 font-bold bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-xl text-sm">Waste of time 🤬</div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#fdfcfb] dark:bg-neutral-950 rounded-[2rem] border border-neutral-100 dark:border-neutral-800 text-left gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-neutral-100 dark:bg-neutral-800 w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg">Crop screenshots</h3>
                    <p className="text-neutral-500 text-sm">Mobile scaling looks terrible.</p>
                  </div>
                </div>
                <div className="text-neutral-400 font-bold bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-xl text-sm">Looks so bad 🤮</div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#fdfcfb] dark:bg-neutral-950 rounded-[2rem] border border-neutral-200 dark:border-neutral-700 shadow-lg text-left gap-6 scale-105 relative z-10 border-l-[6px] border-l-[#FFE55C] dark:border-l-blue-500">
                <div className="flex items-center gap-4">
                  <div className="bg-[#FFE55C] text-neutral-900 w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold shadow-sm">🚀</div>
                  <div>
                    <h3 className="font-bold text-lg">Use Xmonials</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm font-medium">Auto-sync. Approve. Embed.</p>
                  </div>
                </div>
                <div className="text-green-600 bg-green-100 font-bold px-4 py-2 rounded-xl text-sm">Ship this! ✅</div>
              </div>
            </div>

          </div>
        </section>

        {/* --- FEATURES SECTION --- */}
        <section className="py-24 sm:py-32 bg-[#fdfcfb] dark:bg-neutral-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-20">
              <h2 className="text-5xl font-black tracking-tight text-neutral-900 dark:text-white mb-6">
                Ship features users (really) trust
              </h2>
            </div>

            <div className="grid max-w-xl grid-cols-1 gap-12 lg:max-w-none lg:grid-cols-3 mx-auto">
              {/* Feature 1 */}
              <div className="flex flex-col relative overflow-hidden bg-white dark:bg-neutral-900 p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-16 w-16 mb-8 flex items-center justify-center rounded-[1.5rem] bg-[#FFE55C] dark:bg-blue-600 shadow-sm rotate-3">
                  <MessageSquareQuote className="h-8 w-8 text-neutral-900 dark:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Collect user mentions</h3>
                <p className="text-[1.1rem] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Our edge functions run 24/7 to fetch your brand&apos;s mentions. They drop directly into your unified dashboard.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col relative overflow-hidden bg-white dark:bg-neutral-900 p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-16 w-16 mb-8 flex items-center justify-center rounded-[1.5rem] bg-black dark:bg-white shadow-sm -rotate-3">
                  <CheckCircle2 className="h-8 w-8 text-white dark:text-black" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Prioritize the best</h3>
                <p className="text-[1.1rem] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Click &apos;Approve&apos; to instantly send a tweet to your live wall of love. Reject the spam. Keep absolute control.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col relative overflow-hidden bg-white dark:bg-neutral-900 p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-16 w-16 mb-8 flex items-center justify-center rounded-[1.5rem] bg-blue-100 dark:bg-blue-900/50 shadow-sm rotate-6">
                  <MousePointerClick className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Your brand, your board</h3>
                <p className="text-[1.1rem] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Masonry? Carousel? Wall of love? Embed our widget drop-in script and watch it style-match your site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRICING SECTION (Unchanged from original as requested) --- */}
        <section id="pricing" className="py-24 sm:py-32 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-bold leading-7 text-blue-600 dark:text-blue-400 uppercase tracking-widest">Pricing</h2>
              <p className="mt-2 text-4xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                Pricing plans for teams of&nbsp;all&nbsp;sizes
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-neutral-600 dark:text-neutral-300 font-medium">
              Pick the tier that fits your incoming traffic. Upgrade anytime.
            </p>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">

              {/* Starter Tier */}
              <div className="rounded-[2.5rem] p-10 ring-1 ring-neutral-200 dark:ring-neutral-800 bg-[#fdfcfb] dark:bg-neutral-950 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold leading-8 text-neutral-900 dark:text-white">Starter</h3>
                <p className="mt-4 text-[1.1rem] leading-relaxed text-neutral-600 dark:text-neutral-400">The perfect way to start collecting and displaying social proof beautifully.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-6xl font-black tracking-tight text-neutral-900 dark:text-white">$5</span>
                  <span className="text-sm font-bold leading-6 text-neutral-500 dark:text-neutral-500">/month</span>
                </p>
                <ul role="list" className="mt-10 space-y-4 text-[1.05rem] leading-6 text-neutral-700 dark:text-neutral-300 font-medium">
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-6 flex-none text-neutral-900 dark:text-white" /> Up to 50 approved mentions</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-6 flex-none text-neutral-900 dark:text-white" /> Standard widget styling</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-6 flex-none text-neutral-900 dark:text-white" /> Daily Twitter sync</li>
                </ul>
                <Link href="/dashboard" aria-describedby="tier-starter" className="mt-10 block rounded-full bg-neutral-200 dark:bg-neutral-800 px-6 py-4 text-center text-lg font-bold leading-6 text-neutral-900 dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors">
                  Get started
                </Link>
              </div>

              {/* Pro Tier */}
              <div className="rounded-[2.5rem] p-10 ring-4 ring-neutral-900 dark:ring-white bg-neutral-900 dark:bg-white relative shadow-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold leading-8 text-white dark:text-neutral-900 flex items-center justify-between">
                  Pro <span className="rounded-full bg-[#FFE55C] px-4 py-1.5 text-xs font-black text-neutral-900 leading-5 uppercase tracking-widest">Most popular</span>
                </h3>
                <p className="mt-4 text-[1.1rem] leading-relaxed text-neutral-300 dark:text-neutral-600">For serious creators and SaaS apps looking to dominate SEO and conversions.</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-6xl font-black tracking-tight text-white dark:text-neutral-900">$30</span>
                  <span className="text-sm font-bold leading-6 text-neutral-400 dark:text-neutral-500">/month</span>
                </p>
                <ul role="list" className="mt-10 space-y-4 text-[1.05rem] leading-6 text-neutral-200 dark:text-neutral-700 font-medium">
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-6 flex-none text-[#FFE55C]" /> Unlimited approved mentions</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-6 flex-none text-[#FFE55C]" /> Advanced widget styling & Dark Mode</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-6 flex-none text-[#FFE55C]" /> Hourly Twitter sync</li>
                  <li className="flex gap-x-3"><CheckCircle2 className="h-6 w-6 flex-none text-[#FFE55C]" /> JSON-LD automated SEO injection</li>
                </ul>
                <Link href="/dashboard" aria-describedby="tier-pro" className="mt-10 block rounded-full bg-[#FFE55C] px-6 py-4 text-center text-lg font-black leading-6 text-neutral-900 shadow-sm hover:bg-amber-300 transition-colors">
                  Get started
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* --- BOTTOM CTA --- */}
        <section className="py-24 sm:py-32 bg-neutral-950 text-white text-center px-6 border-t border-neutral-800">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
              Ready to turn <br className="hidden md:block" />
              <span className="text-[#FFE55C]">𝕏 mentions</span> into revenue?
            </h2>
            <Link
              href="/#pricing"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#FFE55C] px-10 py-5 text-xl font-bold text-neutral-900 transition-all hover:scale-105 hover:bg-[#ffed82] shadow-xl"
            >
              Get started for $5
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2 font-medium">
            <Link href="/privacy" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">Terms of Service</Link>
            <a href="https://twitter.com/xmonials" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">Follow us on X</a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="bg-neutral-900 dark:bg-white w-6 h-6 rounded flex items-center justify-center text-white dark:text-neutral-900 font-bold text-xs">X</div>
              <p className="text-center text-sm font-bold text-neutral-900 dark:text-white">
                Xmonials
              </p>
            </div>
            <p className="mt-2 text-center md:text-left text-xs text-neutral-500 dark:text-neutral-500 font-medium">
              &copy; {new Date().getFullYear()} Xmonials. Build products users love.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
