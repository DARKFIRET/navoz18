import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Head } from "vite-react-ssg";

function Contacts() {
  return (
    <>
      <Head>
        <title>АгроНавоз - Контакты</title>
        <meta
          name="description"
          content="Агронавоз на карте Ижевск – номер телефона 8 (950) 812-93-51, часы работы с Пн по Пт: 08:00 – 20:00, Сб: 9:00 - 18:00, Вс: 10:00 - 16:00"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                "name": "Контакты АгроНавоз",
                "url": "https://agronavoz18.ru/contacts",
                "description": "Контактная информация и схема проезда АгроНавоз"
              },
              {
                "@type": "LocalBusiness",
                "name": "АгроНавоз",
                "image": "https://agronavoz18.ru/logo.png",
                "telephone": "+7-950-812-93-51",
                "url": "https://agronavoz18.ru/",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Ижевск",
                  "addressCountry": "RU"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "56.8498",
                  "longitude": "53.2045"
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "08:00",
                    "closes": "20:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "09:00",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "10:00",
                    "closes": "16:00"
                  }
                ],
                "priceRange": "$$"
              }
            ]
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Контакты
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Свяжитесь с нами по номеру телефона. Мы всегда готовы ответить на
            ваши вопросы
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Наши контакты
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
              <Card className="bg-green-50">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="flex flex-col items-center text-xl sm:text-2xl text-green-800">
                    <span className="text-3xl sm:text-4xl mb-2">📞</span>
                    Телефон для заказов
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <a
                    href="tel:+79508129351"
                    className="text-2xl sm:text-3xl font-bold text-green-700 hover:text-green-800 transition-colors block mb-2"
                  >
                    +7 (950) 812-93-51
                  </a>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    Звонки принимаем с 8:00 до 20:00
                  </p>
                  <a href="tel:+79508129351">
                    <Button className="bg-green-700 hover:bg-green-800 w-full">
                      Позвонить сейчас
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="grid">
                <CardHeader className="pb-1">
                  <CardTitle className="flex items-center text-lg sm:text-xl">
                    <span className="text-xl sm:text-2xl mr-3">🕒</span>
                    Режим работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm sm:text-base">
                    <p>
                      <span className="font-semibold">Пн-Пт:</span> 8:00 - 20:00
                    </p>
                    <p>
                      <span className="font-semibold">Сб:</span> 9:00 - 18:00
                    </p>
                    <p>
                      <span className="font-semibold">Вс:</span> 10:00 - 16:00
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Delivery Areas */}
            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                Зоны доставки
              </h3>
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="text-gray-700 space-y-1 text-sm sm:text-base">
                      <li>• Ижевск</li>
                      <li>• Завьялововский район</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Map Section */}
            <section className="py-12 sm:py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac6e69f0f26f84f7c04ffa6309c18f1e52e6c32232b0f51f9371beed151407035&amp;source=constructor"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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

export default Contacts;
