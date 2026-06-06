import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Hero from "../components/Hero";
import { handleImageError } from "../utils/imageUtils";

const HomePage: React.FC = () => {
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

      {/* Main Section wrapper to push content down after fixed navbar */}
      <main className="pt-0">
        {/* Section: Hamburger & Pizza Menü Showcase */}
        <section className="bg-primary-container text-white py-section-gap overflow-hidden relative">
          {/* Atmospheric Pattern */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#B21F24 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center mb-element-gap"
            >
              <span className="inline-block bg-baked-gold/20 text-baked-gold px-4 py-1.5 rounded-full font-label-lg text-label-lg mb-6 tracking-widest">
                ÖNE ÇIKAN MENÜ
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 text-glow">
                Hamburger &amp; Pizza Menü
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto italic">
                Lezzet dolu bir deneyim için özel menümüz
              </p>
            </motion.div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mt-16">
              {/* Hamburger Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group bg-charcoal-deep/40 backdrop-blur-sm border border-hearth-bronze/10 rounded-xl p-6 md:p-8 hover:border-baked-gold/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-8">
                  <h3 className="font-headline-md text-headline-md text-white">Hamburger Menü</h3>
                  <span className="text-baked-gold font-display-lg text-headline-md">320₺</span>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg mb-8 border border-white/5 bg-gray-800">
                  <img
                    alt="Premium Burger Set"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src="/images/mutfaktan/hamburger-menu.jpeg"
                    onError={handleImageError}
                  />
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-on-primary-container font-body-md group/item">
                    <span className="material-symbols-outlined text-baked-gold">restaurant</span>
                    <span className="group-hover/item:text-white transition-colors">Lezzetli hamburger</span>
                  </li>
                  <li className="flex items-center gap-3 text-on-primary-container font-body-md group/item">
                    <span className="material-symbols-outlined text-baked-gold">local_pizza</span>
                    <span className="group-hover/item:text-white transition-colors">Çıtır patates kızartması</span>
                  </li>
                  <li className="flex items-center gap-3 text-on-primary-container font-body-md group/item">
                    <span className="material-symbols-outlined text-baked-gold">glass_cup</span>
                    <span className="group-hover/item:text-white transition-colors">
                      Buz gibi soğuk içecek (Ayran veya Meşrubat)
                    </span>
                  </li>
                </ul>
                <Link
                  href="/menu"
                  className="w-full mt-10 border border-baked-gold/50 text-baked-gold py-4 rounded-lg font-label-lg text-label-lg hover:bg-baked-gold hover:text-white transition-all duration-300 inline-block text-center"
                >
                  Hemen Sipariş Ver
                </Link>
              </motion.div>

              {/* Pizza Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group bg-charcoal-deep/40 backdrop-blur-sm border border-hearth-bronze/10 rounded-xl p-6 md:p-8 hover:border-baked-gold/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-8">
                  <h3 className="font-headline-md text-headline-md text-white">Pizza Menü</h3>
                  <span className="text-baked-gold font-display-lg text-headline-md">270₺</span>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg mb-8 border border-white/5 bg-gray-800">
                  <img
                    alt="Premium Pizza Set"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src="/images/mutfaktan/hamburger-menu.jpeg"
                    onError={handleImageError}
                  />
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-on-primary-container font-body-md group/item">
                    <span className="material-symbols-outlined text-baked-gold">local_pizza</span>
                    <span className="group-hover/item:text-white transition-colors">Sıcacık pizza</span>
                  </li>
                  <li className="flex items-center gap-3 text-on-primary-container font-body-md group/item">
                    <span className="material-symbols-outlined text-baked-gold">local_pizza</span>
                    <span className="group-hover/item:text-white transition-colors">Çıtır patates kızartması</span>
                  </li>
                  <li className="flex items-center gap-3 text-on-primary-container font-body-md group/item">
                    <span className="material-symbols-outlined text-baked-gold">glass_cup</span>
                    <span className="group-hover/item:text-white transition-colors">
                      Buz gibi soğuk içecek (Ayran veya Meşrubat)
                    </span>
                  </li>
                </ul>
                <Link
                  href="/menu"
                  className="w-full mt-10 border border-baked-gold/50 text-baked-gold py-4 rounded-lg font-label-lg text-label-lg hover:bg-baked-gold hover:text-white transition-all duration-300 inline-block text-center"
                >
                  Hemen Sipariş Ver
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section: Bizi Ziyaret Edin (Updated without Photo) */}
        <section className="py-section-gap bg-parchment-light relative overflow-hidden">
          {/* Atmospheric Pattern */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#B21F24 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center relative z-10">
            {/* Left Column: Welcome Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <span className="font-label-lg text-label-lg text-baked-gold uppercase tracking-[0.3em] mb-4">
                GELENEKSEL MODERNİZM
              </span>
              <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-deep mb-8 leading-tight">
                Bizi Ziyaret Edin
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                {"Nazilli'nin kalbinde, sıcak ve samimi atmosferimizde enfes lezzetlerimizi deneyimlemeye davetlisiniz. Her sabah gün ağarmadan başlayan mesaimiz, sizin için en taze simitleri ve poğaçaları hazırlamak içindir."}
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/iletisim"
                  className="bg-primary text-on-primary px-10 py-5 rounded-DEFAULT font-label-lg text-label-lg hover:shadow-xl transition-all hover:bg-charcoal-deep active:scale-95 duration-200"
                >
                  Bize Ulaşın
                </Link>
                <Link
                  href="/hakkimizda"
                  className="border border-charcoal-deep text-charcoal-deep px-10 py-5 rounded-DEFAULT font-label-lg text-label-lg hover:bg-charcoal-deep hover:text-white transition-all active:scale-95 duration-200"
                >
                  Hikayemizi Keşfedin
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Info Card & Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 border border-slate-muted shadow-xl rounded-2xl relative overflow-hidden"
            >
              {/* Highlight bar at top */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-baked-gold" />
              


              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-baked-gold text-2xl mt-0.5">location_on</span>
                  <div>
                    <h4 className="font-title-lg text-label-lg text-charcoal-deep uppercase tracking-wider mb-2 font-bold">
                      Konum
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Bamboo Avm, Nazilli, Aydın</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-baked-gold text-2xl mt-0.5">schedule</span>
                  <div>
                    <h4 className="font-title-lg text-label-lg text-charcoal-deep uppercase tracking-wider mb-2 font-bold">
                      Çalışma Saatleri
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Her Gün: 10:00 — 22:00</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
