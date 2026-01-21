import { ClockIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import FeatureCard from "../components/FeatureCard";
import Hero from "../components/Hero";
import { handleImageError } from "../utils/imageUtils";

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
      price: "90₺",
      image: "/images/simitler/atom-simit.jpeg",
      description:
        "İçi pizza harcıyla dolu lezzet bombası",
    },
    {
      name: "Limonata",
      price: "90₺",
      image: "/images/soguk-icecekler/limonata.jpg",
      description: "Taze sıkılmış limonata",
    },
    {
      name: "Türk Kahvesi",
      price: "80₺",
      image: "/images/sicak-icecekler/turkkahvesi.webp",
      description: "Geleneksel Türk kahvesi",
    },
    {
      name: "Kruvasan",
      price: "90₺",
      image: "/images/tatlılar/kruvasan.webp",
      description: "Katmanlı taze kruvasan",
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

      {/* Hamburger & Pizza Menü Showcase - Clean & Simple */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hamburger & Pizza Menü
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lezzet dolu bir deneyim için özel menümüz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Hamburger Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Hamburger Menü
                  </h3>
                  <span className="text-3xl md:text-4xl font-bold text-red-600">
                    270₺
                  </span>
                </div>

                <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                  <img
                    src="/images/mutfaktan/hamburger-menu.jpeg"
                    alt="Hamburger Menü"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Lezzetli hamburger</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Çıtır patates kızartması</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>İstediğiniz içecek</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pizza Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Pizza Menü
                  </h3>
                  <span className="text-3xl md:text-4xl font-bold text-red-600">
                    270₺
                  </span>
                </div>

                <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                  <img
                    src="/images/mutfaktan/hamburger-menu.jpeg"
                    alt="Pizza Menü"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Sıcacık pizza</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Çıtır patates kızartması</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>İstediğiniz içecek</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Özel Lezzetler Bölümü */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Özel Lezzetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Her gün taze hazırlanan, özenle seçilmiş ürünlerimiz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Atom Simit",
                description: "Özel tarifimizle hazırlanan, mis gibi kokan atom simitimiz",
                image: "/images/simitler/atom-simit.jpeg"
              },
              {
                title: "Kruvasan",
                description: "Tereyağlı, katmerli ve çıtır çıtır kruvasanlarımız",
                image: "/images/tatlılar/kruvasan.webp"
              },
              {
                title: "Donut",
                description: "Yumuşacık, tatlı ve renkli donutlarımız",
                image: "/images/tatlılar/dilimpasta.jpeg"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Clean & Simple */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simit Teknesi Farkı
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kalite, lezzet ve samimi hizmet anlayışımızla yanınızdayız
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-2xl mb-6 group-hover:bg-red-100 transition-colors duration-300">
                  <div className="text-4xl text-red-600">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Section - Clean & Modern */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popüler Ürünlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En çok tercih edilen lezzetlerimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={handleImageError}
                    />

                    {/* Price Tag */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                        {item.price}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/menu"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>Tüm Menüyü Gör</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
