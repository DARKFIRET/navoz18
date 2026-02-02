import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { Button } from "./ui/button";

function NotFound() {
    return (
        <>
            <Head>
                <title>404 - Страница не найдена | АгроНавоз</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-8xl sm:text-9xl font-bold text-green-700 mb-4">
                            404
                        </h1>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Страница не найдена
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            К сожалению, запрашиваемая страница не существует или была перемещена.
                        </p>

                        <div className="mt-12 text-left bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Возможно, вас заинтересует:
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>
                                    <Link to="/" className="text-green-700 hover:text-green-800 hover:underline">
                                        → Каталог продукции
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="text-green-700 hover:text-green-800 hover:underline">
                                        → О нашей компании
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contacts" className="text-green-700 hover:text-green-800 hover:underline">
                                        → Контакты и доставка
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NotFound;
