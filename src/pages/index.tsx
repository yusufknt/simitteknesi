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

      {/* Hamburger & Pizza Menü Showcase - Modern Design */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              ÖNE ÇIKAN MENÜ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hamburger & Pizza Menü
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Lezzet dolu bir deneyim için özel menümüz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Hamburger Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Hamburger Menü
                  </h3>
                  <span className="text-3xl md:text-4xl font-bold text-amber-500">
                    270₺
                  </span>
                </div>

                <div className="aspect-video mb-6 rounded-2xl overflow-hidden bg-gray-700">
                  <img
                    src="/images/mutfaktan/hamburger-menu.jpeg"
                    alt="Hamburger Menü"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <span>Lezzetli hamburger</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <span>Çıtır patates kızartması</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <span>İstediğiniz içecek</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pizza Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Pizza Menü
                  </h3>
                  <span className="text-3xl md:text-4xl font-bold text-amber-500">
                    270₺
                  </span>
                </div>

                <div className="aspect-video mb-6 rounded-2xl overflow-hidden bg-gray-700">
                  <img
                    src="/images/mutfaktan/hamburger-menu.jpeg"
                    alt="Pizza Menü"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <span>Sıcacık pizza</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <span>Çıtır patates kızartması</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
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
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
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
                title: "Taze Fırın Ürünleri",
                description: "Simit, poğaça ve açmalarımız her gün taptaze olarak hazırlanır",
                icon: "🥯",
                color: "from-amber-500 to-orange-500"
              },
              {
                title: "Özel Kahve Çeşitleri",
                description: "Barista kalitesinde hazırlanan sıcak ve soğuk kahvelerimiz",
                icon: "☕",
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Tatlı & Börek",
                description: "Geleneksel tariflerle hazırlanan lezzetli tatlı ve börekler",
                icon: "🥐",
                color: "from-red-500 to-pink-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-2xl`} />
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Section - Luxury Cafe Style */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-amber-500 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              EN ÇOK TERCİH EDİLEN
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Popüler Lezzetlerimiz
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Misafirlerimizin vazgeçilmez favorileri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

                    {/* Popular Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        ⭐ Popüler
                      </div>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-black/80 backdrop-blur-sm text-amber-400 px-4 py-2 rounded-full text-xl font-bold shadow-lg border border-amber-500/30">
                        {item.price}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <Link
                      href="/menu"
                      className="inline-flex items-center text-amber-400 font-semibold hover:text-amber-300 transition-colors duration-300 group/link"
                    >
                      <span>Detayları Gör</span>
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-2xl transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/menu"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-red-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-amber-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50"
            >
              <span>Tüm Menüyü Keşfet</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
