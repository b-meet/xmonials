'use client';

import { useEffect } from 'react';

export function WidgetIframeResizer() {
    useEffect(() => {
        const sendHeight = () => {
            const height = document.body.scrollHeight;
            window.parent.postMessage({ height, type: 'xmonials-widget-resize' }, '*');
        };

        window.addEventListener('load', sendHeight);
        window.addEventListener('resize', sendHeight);

        const observer = new ResizeObserver(sendHeight);
        observer.observe(document.body);

        return () => {
            window.removeEventListener('load', sendHeight);
            window.removeEventListener('resize', sendHeight);
            observer.disconnect();
        };
    }, []);

    return null;
}
