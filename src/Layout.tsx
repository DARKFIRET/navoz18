import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
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
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
            
            <Footer />
        </div>
    </>
  )
}