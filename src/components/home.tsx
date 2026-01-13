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
  // Обновили названия товаров, чтобы они были уникальными (важно для сниппетов в поиске)
  const products = [
    {
      name: "Коровий навоз 3 куб.м",
      price: "3000₽",
      unit: "за 3 куб.м",
      volume: 3,
      description: "Качественный перепревший коровий навоз для небольшого участка",
      features: [
        "Органический",
        "Перепревший",
        "Богат питательными веществами",
      ],
      image: "/cow.avif",
    },
    {
      name: "Коровий навоз 5 куб.м",
      price: "4500₽",
      unit: "за 5 куб.м",
      volume: 5,
      description: "Оптимальный объем перепревшего навоза для стандартного огорода",
      features: [
        "Органический",
        "Перепревший",
        "Богат питательными веществами",
      ],
      image: "/cow.avif",
    },
    {
      name: "Коровий навоз 10 куб.м",
      price: "9000₽",
      unit: "за 10 куб.м",
      volume: 10,
      description: "Выгодное предложение навоза оптом для больших садов и ферм",
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
        <title>Купить коровий навоз в Ижевске с доставкой — цены от 3000₽</title>
        <meta
          name="description"
          content="Продажа качественного перепревшего коровьего навоза в Ижевске. Доставка самосвалом по городу и пригороду. Честный объем, низкие цены от производителя."
        />
        <meta
          name="keywords"
          content="купить навоз ижевск, коровий навоз цена, перепревший навоз доставка, удобрение для огорода ижевск, машина навоза стоимость"
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
          {/* H1: Главный заголовок с городом и ключевым действием (Купить) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Купить качественный коровий навоз с доставкой в Ижевске
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Натуральное перепревшее удобрение для вашего урожая. Честные объемы,
            доставка самосвалом и цены от производителя.
          </p>
          <div className="mt-8">
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            {/* H2: Акцент на слове "Цены" и виде товара */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Цены на коровий навоз
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <Link key={index} to={`/product/cow-manure?volume=${product.volume}`}>
                <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      fetchPriority={index === 0 ? "high" : "auto"}
                      src={product.image}
                      alt={`Доставка навоза ${product.name} Ижевск`}
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
              </Link>
            ))}
          </div>
        </div>
          
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            {/* H2: Добавлены ключевые слова "органического удобрения" */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Преимущества нашего органического удобрения
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌱</div>
              {/* H3: Уточнение "Натуральное" */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Натуральная органика
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Экологически чистое удобрение без химии и вредных примесей
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⏰</div>
              {/* H3: Ключевое слово "Перепревший" */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Перепревший навоз
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Готовый к внесению в почву продукт, прошедший правильное
                компостирование
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚚</div>
              {/* H3: Уточнение "Самосвалом" */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Доставка самосвалом
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Оперативная доставка удобрений КамАЗом в удобное для вас время
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
              {/* H3: Акцент на "Производителе" */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Цена от производителя
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Работаем без посредников, предлагаем лучшую стоимость на рынке
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* H2: Призыв к действию */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Оформить заказ на доставку
            </h2>
            <p className="text-gray-600 mb-8 px-4">
              Позвоните нам для расчета стоимости и согласования времени
              привоза
            </p>

            <Card className="bg-green-50">
              <CardHeader>
                {/* Используем семантически подходящий заголовок внутри карточки */}
                <CardTitle className="text-green-800 text-xl sm:text-2xl">
                  📞 Контакты для заказа
                </CardTitle>
                <CardDescription className="text-green-700">
                  Принимаем звонки с 8:00 до 20:00 ежедневно
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
                    <strong>Транспорт:</strong> КамАЗ самосвал (сельхозник)
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