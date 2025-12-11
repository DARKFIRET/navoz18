import { useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";

// Типы для вариантов объема
type VolumeVariant = {
    volume: number;
    price: number;
    unit: string;
    description: string;
};

// Данные о продуктах (в реальном приложении это может приходить с API)
const productData = {
    "cow-manure": {
        name: "Коровий навоз",
        baseDescription: "Качественный перепревший коровий навоз.",
        image: "/cow.avif",
        features: [
            "Органический",
            "Перепревший",
            "Богат питательными веществами",
            "Без химии",
        ],
        variants: [
            {
                volume: 3,
                price: 3000,
                unit: "за 3 куб.м",
                description: "Идеально для небольшого дачного участка или теплицы.",
            },
            {
                volume: 5,
                price: 4500,
                unit: "за 5 куб.м",
                description: "Оптимальный выбор для стандартного огорода 6-10 соток.",
            },
            {
                volume: 10,
                price: 9000,
                unit: "за 10 куб.м",
                description: "Выгодное предложение для больших участков и фермерских хозяйств.",
            },
        ] as VolumeVariant[],
    },
};

function ProductPage() {
    const { slug } = useParams<{ slug: string }>();
    const product = productData[slug as keyof typeof productData];

    // Если продукт не найден, можно показать 404 или редирект (упрощенно)
    if (!product) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-2xl font-bold">Продукт не найден</h1>
                <Link to="/products" className="text-green-600 hover:underline">
                    Вернуться в каталог
                </Link>
            </div>
        );
    }

    const [searchParams, setSearchParams] = useSearchParams();
    const volumeParam = searchParams.get("volume");

    // Состояние для выбранного объема (инициализируем из URL или берем первый вариант)
    const initialVariant = volumeParam
        ? product.variants.find((v) => v.volume === Number(volumeParam)) || product.variants[0]
        : product.variants[0];

    const [selectedVariant, setSelectedVariant] = useState<VolumeVariant>(initialVariant);

    // Функция для смены варианта и обновления URL
    const handleVariantChange = (variant: VolumeVariant) => {
        setSelectedVariant(variant);
        setSearchParams({ volume: variant.volume.toString() });
    };

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: `${product.name} ${selectedVariant.volume} куб.м`,
        image: `https://agronavoz18.ru${product.image}`,
        description: `${product.baseDescription} ${selectedVariant.description}`,
        offers: {
            "@type": "Offer",
            url: `https://agronavoz18.ru/product/${slug}`,
            priceCurrency: "RUB",
            price: selectedVariant.price,
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
        },
    };

    return (
        <>
            <Head>
                <title>{`${product.name} ${selectedVariant.volume} куб.м - купить в Ижевске | АгроНавоз`}</title>
                <meta
                    name="description"
                    content={`Купить ${product.name.toLowerCase()} ${selectedVariant.volume
                        } куб.м с доставкой по Ижевску. Цена: ${selectedVariant.price
                        }₽. ${selectedVariant.description}`}
                />
                <link
                    rel="canonical"
                    href={`https://agronavoz18.ru/product/${slug}`}
                />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Head>

            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="mb-6">
                        <Link
                            to="/"
                            className="text-green-600 hover:text-green-800 transition-colors flex items-center gap-2"
                        >
                            ← Назад в каталог
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Изображение */}
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={product.image}
                                alt={`${product.name} ${selectedVariant.volume} куб.м`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Информация о товаре */}
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>

                            <div className="mb-6">
                                <span className="text-3xl font-bold text-green-700">
                                    {selectedVariant.price}₽
                                </span>
                                <span className="text-gray-500 ml-2 text-xl">
                                    {selectedVariant.unit}
                                </span>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-3">Выберите объем:</h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.variants.map((variant) => (
                                        <Button
                                            key={variant.volume}
                                            variant={
                                                selectedVariant.volume === variant.volume
                                                    ? "default"
                                                    : "outline"
                                            }
                                            onClick={() => handleVariantChange(variant)}
                                            className={`h-auto py-3 px-6 text-lg ${selectedVariant.volume === variant.volume
                                                ? "bg-green-700 hover:bg-green-800"
                                                : "hover:border-green-600 hover:text-green-600"
                                                }`}
                                        >
                                            {variant.volume} куб.м
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            <div className="prose prose-green max-w-none mb-8">
                                <p className="text-lg text-gray-700">
                                    {product.baseDescription} {selectedVariant.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {product.features.map((feature, idx) => (
                                        <Badge
                                            key={idx}
                                            variant="secondary"
                                            className="bg-green-100 text-green-800"
                                        >
                                            {feature}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <Card className="bg-green-50 border-green-100">
                                <CardHeader>
                                    <CardTitle className="text-green-800">
                                        Как заказать?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-green-900">
                                        Позвоните нам для оформления заказа. Мы согласуем удобное время доставки.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href="tel:+79508129351" className="w-full sm:w-auto">
                                            <Button className="w-full bg-green-700 hover:bg-green-800 text-lg py-6">
                                                📞 +7 (950) 812-93-51
                                            </Button>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductPage;
