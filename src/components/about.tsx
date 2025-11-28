import { Head } from "vite-react-ssg";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

function About() {
  return (
    <>
      <Head>
        <title>О нас Агронавоз Ижевск</title>
        <meta
          name="description"
          content="На этой странице размещена наша история"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AboutPage",
                "name": "О компании АгроНавоз",
                "url": "https://agronavoz18.ru/about",
                "description": "История и принципы работы компании АгроНавоз"
              },
              {
                "@type": "Organization",
                "name": "АгроНавоз",
                "url": "https://agronavoz18.ru/",
                "logo": "https://agronavoz18.ru/logo.png",
                "foundingDate": "2019",
                "description": "Производство и поставка качественных органических удобрений в Ижевске",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+7-950-812-93-51",
                  "contactType": "sales",
                  "areaServed": "Ижевск",
                  "availableLanguage": "Russian"
                }
              }
            ]
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            О нашей компании
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Мы занимаемся производством и поставкой качественных органических
            удобрений уже более 5 лет
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Наша история
                </h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Компания была основана в 2019 году с целью предоставления
                  фермерам и садоводам высококачественных органических
                  удобрений. Мы начинали как небольшое предприятие и выросли в
                  надёжного поставщика органических удобрений в регионе.
                </p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  За годы работы мы накопили богатый опыт в области производства
                  и переработки органических удобрений, что позволяет нам
                  гарантировать высокое качество нашей продукции.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  loading="lazy"
                  src={"/dirt.avif"}
                  alt="Наша ферма"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            {/* Values */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Наши принципы
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <Card>
                  <CardHeader className="text-center pb-3">
                    <div className="text-2xl sm:text-3xl mb-2">🌿</div>
                    <CardTitle className="text-lg sm:text-xl">
                      Экологичность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm sm:text-base text-center">
                      Мы используем только натуральные методы производства, без
                      химических добавок и вредных веществ.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center pb-3">
                    <div className="text-2xl sm:text-3xl mb-2">⭐</div>
                    <CardTitle className="text-lg sm:text-xl">
                      Качество
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm sm:text-base text-center">
                      Строгий контроль качества на всех этапах производства
                      гарантирует высокие стандарты продукции.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center pb-3">
                    <div className="text-2xl sm:text-3xl mb-2">🤝</div>
                    <CardTitle className="text-lg sm:text-xl">
                      Надёжность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm sm:text-base text-center">
                      Мы ценим доверие наших клиентов и всегда выполняем свои
                      обязательства в срок.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Production Process */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Процесс производства
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-base sm:text-lg">
                      <span className="bg-green-700 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-3 text-xs sm:text-sm">
                        1
                      </span>
                      Сбор сырья
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Мы собираем навоз только от здоровых животных с
                      проверенных ферм, где не используются антибиотики и
                      гормоны роста.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-base sm:text-lg">
                      <span className="bg-green-700 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-3 text-xs sm:text-sm">
                        2
                      </span>
                      Компостирование
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Навоз проходит процесс естественного компостирования в
                      течение 6-12 месяцев при оптимальной температуре и
                      влажности.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-base sm:text-lg">
                      <span className="bg-green-700 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-3 text-xs sm:text-sm">
                        3
                      </span>
                      доставка
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Готовое удобрение доставляется клиентам на грузовике.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* Call to Action */}
            <div className="mt-8 text-center">
              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 text-xl sm:text-2xl">
                    Готовы сделать заказ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-4 text-sm sm:text-base">
                    Позвоните нам прямо сейчас для консультации и оформления
                    заказа
                  </p>
                  <a href="tel:+79508129351">
                    <Button
                      size="lg"
                      className="bg-green-700 hover:bg-green-800"
                    >
                      📞 Позвонить: +7 (950) 812-93-51
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
