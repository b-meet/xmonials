'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import Link from 'next/link';

export default function WidgetBuilderClient({ profileId }: { profileId: string }) {
    const [style, setStyle] = useState('masonry');
    const [theme, setTheme] = useState('light');
    const [copied, setCopied] = useState(false);

    // Derive embed URL
    const embedUrl = typeof window !== 'undefined'
        ? `${window.location.origin}/widget/${profileId}?style=${style}&theme=${theme}`
        : `/widget/${profileId}?style=${style}&theme=${theme}`;

    const embedCode = `<iframe 
  src="${embedUrl}" 
  width="100%" 
  height="800" 
  frameborder="0" 
  scrolling="no"
></iframe>
<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'xmonials-widget-resize') {
       const iframes = document.querySelectorAll('iframe[src*="xmonials"]');
       iframes.forEach(iframe => iframe.style.height = e.data.height + 'px');
    }
  });
</script>`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(embedCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Configuration Sidebar */}
            <div className="lg:col-span-4 space-y-8 h-fit pb-8 lg:pb-0">
                <Link href="/dashboard" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-8">
                    &larr; Back to Inbox
                </Link>

                <div>
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Configure Widget</h2>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-3">Layout Style</label>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { id: 'masonry', label: 'Masonry Grid' },
                                    { id: 'carousel', label: 'Carousel' },
                                    { id: 'walloflove', label: 'Wall of Love' },
                                    { id: 'sidebar', label: 'Sidebar Feed' },
                                    { id: 'single', label: 'Single Highlight' }
                                ].map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => setStyle(s.id)}
                                        className={`flex items-center justify-center px-4 py-3 rounded-xl border text-sm font-medium transition-all ${style === s.id ? 'border-blue-500 bg-blue-500/10 text-blue-700 dark:text-blue-400' : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900'}`}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-3">Theme</label>
                            <div className="flex gap-3">
                                {['light', 'dark'].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setTheme(t)}
                                        className={`flex-1 flex items-center justify-center px-4 py-3 rounded-xl border text-sm font-medium capitalize transition-all ${theme === t ? 'border-blue-500 bg-blue-500/10 text-blue-700 dark:text-blue-400' : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900'}`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
                    <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-3">Embed Code</label>
                    <div className="relative group">
                        <pre className="p-4 rounded-xl bg-neutral-900 dark:bg-black text-neutral-300 text-xs overflow-x-auto border border-neutral-800 shadow-inner">
                            <code>{embedCode}</code>
                        </pre>
                        <button
                            onClick={copyToClipboard}
                            className="absolute top-2 right-2 p-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition"
                        >
                            {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Live Preview Area */}
            <div className="lg:col-span-8 rounded-3xl border border-neutral-200 bg-neutral-100/50 dark:border-neutral-800 dark:bg-neutral-900/20 p-4 sm:p-8 flex flex-col shadow-inner">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        Live Preview
                    </h3>
                    <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-500">Live</span>
                </div>

                <div className="flex-1 w-full bg-repeating-linear-gradient rounded-2xl overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 relative shadow-sm" style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 2px, transparent 2px, transparent 10px)` }}>
                    <iframe
                        src={embedUrl}
                        className="w-full h-[800px] border-none bg-transparent"
                        title="Widget Preview"
                        frameBorder="0"
                    />
                </div>
            </div>

        </div>
    );
}
