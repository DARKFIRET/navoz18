import { Suspense, useCallback } from 'react'
import { Outlet } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

function initYandexMetrika() {
    // Yandex.Metrika
    (function (m: any, e: Document, t: string, r: string, i: string) {
        m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
        m[i].l = 1 * (new Date() as any);
        for (let j = 0; j < e.scripts.length; j++) {
            if (e.scripts[j].src === r) { return; }
        }
        const k = e.createElement(t) as HTMLScriptElement;
        const a = e.getElementsByTagName(t)[0];
        k.async = true;
        k.src = r;
        a.parentNode?.insertBefore(k, a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=106471821', 'ym');

    (window as any).ym(106471821, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce: true,
        trackLinks: true
    });
}

export default function Layout() {
    const handleCookieAccept = useCallback(() => {
        initYandexMetrika();
    }, []);

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/react.svg" />
                <title>Купить навоз в Ижевске с доставкой</title>
                <meta name="yandex-verification" content="7a396b3a39a99397" />
                <meta name="description" content="✅ Продажа и доставка навоза в Ижевске и области. Конский, коровий навоз. Низкие цены, работаем круглосуточно. Доставка вездеходом по бездорожью. Звоните!" />
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="АгроНавоз" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <div className="min-h-screen bg-background flex flex-col">
                <Header />

                <main className="flex-1">
                    <Suspense fallback={<div />}>
                        <Outlet />
                    </Suspense>
                </main>

                <Footer />
            </div>
            <CookieConsent onAccept={handleCookieAccept} />
            <noscript>
                <div>
                    <img src="https://mc.yandex.ru/watch/106471821" style={{ position: 'absolute', left: '-9999px' }} alt="" />
                </div>
            </noscript>
        </>
    )
}