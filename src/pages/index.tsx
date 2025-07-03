import { ClockIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import FeatureCard from "../components/FeatureCard";
import Hero from "../components/Hero";

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: "Günlük Taze Üretim",
      description:
        "Her gün taze olarak hazırlanan simit ve fırın ürünlerimiz ile lezzeti doruklarda yaşayın.",
    },
    {
      icon: <StarIcon className="h-8 w-8" />,
      title: "Kaliteli Malzemeler",
      description:
        "Yalnızca en kaliteli ve doğal malzemeler kullanarak sizlere en iyi lezzeti sunuyoruz.",
    },
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: "Hızlı Servis",
      description:
        "Kısa sürede hazırlanan siparişleriniz ile zamana karşı koşturan hayatınıza lezzet katın.",
    },
  ];

  const popularItems = [
    {
      name: "Atom Simit",
      price: "70₺",
      image: "/images/simitler/atom.jpg",
      description: "Dışı çıtır simit, içi nefis pizza harcıyla dolu enfes bir lezzet bombası",
    },
    {
      name: "Limonata",
      price: "70₺",
      image: "/images/soguk-icecekler/limonata.jpeg",
      description: "Taze sıkılmış limon ile hazırlanmış limonata",
    },
    {
      name: "Türk Kahvesi",
      price: "80₺",
      image: "/images/sicak-icecekler/turkkahvesi.webp",
      description: "Geleneksel Türk kahvesi, cezve ile hazırlanmış",
    },
  ];

  return (
    <>
      <Head>
        <title>Anasayfa - Simit Teknesi Nazilli</title>
        <meta
          name="description"
          content="Simit Teknesi Nazilli'de günlük taze üretim simit, açma, poğaça çeşitleri ve özel kahve karışımları sizi bekliyor."
        />
      </Head>

      <Hero />

      {/* Features Section */}
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
              Neden Simit Teknesi Nazilli?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Müşterilerimize en iyi deneyimi sunmak için özenle çalışıyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popüler Ürünlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En çok tercih edilen lezzetlerimizi keşfedin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-red-600">
                      Popüler
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href="/menu"
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 inline-block text-center"
                    >
                      Menüde İncele
                    </Link>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-accent-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/menu"
              className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center space-x-2"
            >
              <span>Tüm Menüyü İncele</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(220, 38, 38, 0.6)), url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80")',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bizi Ziyaret Edin
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Nazilli'nin kalbinde, sıcak ve samimi atmosferimizde enfes
              lezzetlerimizi deneyimlemeye davetlisiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="btn-secondary bg-white text-red-600 hover:bg-gray-50"
              >
                Bize Ulaşın
              </Link>
              <Link
                href="/hakkimizda"
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-200"
              >
                Hikayemizi Keşfedin
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
