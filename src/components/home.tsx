import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";

function Home() {
  const products = [
    {
      name: "Коровий навоз",
      price: "3000₽",
      unit: "за 3 куб.м",
      description: "Качественный перепревший коровий навоз для огорода и сада",
      features: [
        "Органический",
        "Перепревший",
        "Богат питательными веществами",
      ],
      image: "/cow.avif",
    },
    {
      name: "Коровий навоз",
      price: "4500₽",
      unit: "за 5 куб.м",
      description: "Качественный перепревший коровий навоз для огорода и сада",
      features: [
        "Органический",
        "Перепревший",
        "Богат питательными веществами",
      ],
      image: "/cow.avif",
    },
    {
      name: "Коровий навоз",
      price: "9000₽",
      unit: "за 10 куб.м",
      description: "Качественный перепревший коровий навоз для огорода и сада",
      features: [
        "Органический",
        "Перепревший",
        "Богат питательными веществами",
      ],
      image: "/cow.avif",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Коровий навоз в Ижевске купить напрямую от поставщика без пареплат.
        </title>
        <meta
          name="description"
          content="Купите качественный коровий навоз в Ижевске недорого. АгроНавоз предлагает цену от поставщика напрямую на натуральное удобрение."
        />
        <meta
          name="keywords"
          content="купить коровий навоз, коровий навоз ижевск, навоз ижевск с доставкой"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "name": "АгроНавоз Ижевск",
                "url": "https://agronavoz18.ru/",
                "description": "Продажа и доставка качественного коровьего навоза в Ижевске",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://agronavoz18.ru/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "Organization",
                "name": "АгроНавоз",
                "url": "https://agronavoz18.ru/",
                "logo": "https://agronavoz18.ru/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+7-950-812-93-51",
                  "contactType": "sales",
                  "areaServed": "Ижевск",
                  "availableLanguage": "Russian"
                }
              },
              {
                "@type": "Product",
                "name": "Коровий навоз 3 куб.м",
                "image": "https://agronavoz18.ru/cow.avif",
                "description": "Качественный перепревший коровий навоз для огорода и сада, 3 куб.м",
                "offers": {
                  "@type": "Offer",
                  "url": "https://agronavoz18.ru/",
                  "priceCurrency": "RUB",
                  "price": "3000",
                  "availability": "https://schema.org/InStock",
                  "itemCondition": "https://schema.org/NewCondition"
                }
              },
              {
                "@type": "Product",
                "name": "Коровий навоз 5 куб.м",
                "image": "https://agronavoz18.ru/cow.avif",
                "description": "Качественный перепревший коровий навоз для огорода и сада, 5 куб.м",
                "offers": {
                  "@type": "Offer",
                  "url": "https://agronavoz18.ru/",
                  "priceCurrency": "RUB",
                  "price": "4500",
                  "availability": "https://schema.org/InStock",
                  "itemCondition": "https://schema.org/NewCondition"
                }
              },
              {
                "@type": "Product",
                "name": "Коровий навоз 10 куб.м",
                "image": "https://agronavoz18.ru/cow.avif",
                "description": "Качественный перепревший коровий навоз для огорода и сада, 10 куб.м",
                "offers": {
                  "@type": "Offer",
                  "url": "https://agronavoz18.ru/",
                  "priceCurrency": "RUB",
                  "price": "9000",
                  "availability": "https://schema.org/InStock",
                  "itemCondition": "https://schema.org/NewCondition"
                }
              }
            ]
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Коровий навоз с доставкой по Ижевску
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Улучшите плодородие почвы с помощью нашего высококачественного
            перепревшего навоза. Идеально подходит для огородов, садов и
            ландшафтного дизайна.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Наша продукция
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    fetchPriority="high"
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg sm:text-xl">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-green-100 text-green-800 text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl sm:text-2xl font-bold text-green-700">
                        {product.price}
                      </span>
                      <span className="text-gray-500 ml-1 text-sm">
                        {product.unit}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Почему выбирают нас?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌱</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                100% Органика
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Без химических добавок и синтетических веществ
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⏰</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Перепревший
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Правильно компостированный для лучших результатов
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚚</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Быстрая доставка
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Оперативная доставка по вашему адресу
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Лучшие цены
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Конкурентные цены на качественную продукцию
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-gray-600 mb-8 px-4">
              Позвоните нам для консультации и оформления заказа
            </p>

            <Card className="bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-xl sm:text-2xl">
                  📞 Заказать навоз
                </CardTitle>
                <CardDescription className="text-green-700">
                  Звоните с 8:00 до 20:00 ежедневно
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <a
                    href="tel:+79508129351"
                    className="text-3xl sm:text-4xl font-bold text-green-700 hover:text-green-800 transition-colors"
                  >
                    +7 (950) 812-93-51
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:+79508129351">
                    <Button className="bg-green-700 hover:bg-green-800 w-full sm:w-auto">
                      Позвонить сейчас
                    </Button>
                  </a>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-xl text-yellow-800">
                    <strong>Доставка:</strong> КамАЗ самосвал
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
