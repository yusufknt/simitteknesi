import {
  CheckCircleIcon,
  ClockIcon,
  HeartIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: "Sevgi ile Hazırlanmış",
      description:
        "Her ürünümüzü sevgiyle, özenle ve geleneksel tariflerle hazırlıyoruz.",
    },
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: "Her Gün Taze",
      description:
        "Ürünlerimizi her gün taze olarak hazırlıyor, kaliteyi asla ödün vermiyoruz.",
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      title: "Müşteri Memnuniyeti",
      description:
        "Müşterilerimizin memnuniyeti bizim için her şeyden önemlidir.",
    },
  ];

  const achievements = [
    "Yeni kurulmuş, taze ve dinamik bir işletme",
    "Geleneksel tariflerle modern sunum tekniklerini birleştiren yaklaşım",
    "100% doğal ve kaliteli malzemeler kullanımı",
    "Günlük taze üretim taahhüdü",
    "Deneyimli ve tutkulu ekip",
    "Müşteri memnuniyeti odaklı hizmet anlayışı",
  ];

  return (
    <>
      <Head>
        <title>Hakkımızda - Simit Teknesi Nazilli</title>
        <meta
          name="description"
          content="Simit Teknesi Nazilli'nin hikayesi, değerlerimiz ve vizyonumuz hakkında bilgi edinin. Geleneksel lezzetleri modern tekniklerle buluşturuyoruz."
        />
      </Head>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-500 via-red-600 to-red-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hikayemiz</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Geleneksel Türk lezzetlerini modern tekniklerle buluşturan,
                kalite ve lezzetten ödün vermeyen bir kafe hikayesi
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Simit Teknesi Nazilli Nasıl Doğdu?
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Geleneksel Türk kahvaltı kültürünü ve lezzetlerini yeni nesil 
                    ile buluşturma hayaliyle yola çıktık. Aydın'ın incisi Nazilli'de 
                    kurduğumuz Simit Teknesi, sadece bir kafe değil, aynı zamanda 
                    geleneksel lezzetleri modern tekniklerle buluşturan bir kültür 
                    köprüsüdür.
                  </p>
                  <p>
                    Büyükannelerimizden öğrendiğimiz geleneksel tarifleri, 
                    modern sunum teknikleriyle harmanlayarak, hem nostaljik hem 
                    de çağdaş bir deneyim sunmaya karar verdik. Her simidimiz, 
                    her açmamız ve her fincan kahvemiz, aile sıcaklığı ve özeni 
                    taşıyacak şekilde hazırlanıyor.
                  </p>
                  <p>
                    Misyonumuz, günün her anında müşterilerimize kaliteli, taze 
                    ve lezzetli ürünler sunarak, onların günlerine keyif katmaktır. 
                    Türk misafirperverliğini modern hizmet anlayışıyla birleştirerek, 
                    herkesin kendini evinde hissettiği bir mekan yaratmayı hedefliyoruz.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Simit Teknesi İçi"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32">
                  <img
                    src="/images/logo.png"
                    alt="Simit Teknesi Nazilli Logo"
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Değerlerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                İşimizi yaparken rehber aldığımız temel değerler
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card p-8 text-center"
                >
                  <div className="text-red-600 flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Takım Çalışması"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Başarılarımız
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Kısa sürede elde ettiğimiz deneyimler ve hedeflerimiz doğrultusunda 
                  attığımız adımlar
                </p>

                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section
          className="relative py-20 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(220, 38, 38, 0.9), rgba(185, 28, 28, 0.8)), url("https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                "Her lokmada sevgi, her yudumda sıcaklık, her ziyarette aile
                sıcaklığı..."
              </blockquote>
              <p className="text-xl text-white/80">
                - Simit Teknesi Nazilli Felsefesi
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
