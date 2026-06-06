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

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pt-24 bg-parchment-light min-h-screen"
      >
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden bg-charcoal-deep text-white border-b border-baked-gold/20">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#B21F24 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-label-lg text-label-lg text-baked-gold uppercase tracking-[0.3em] mb-4 inline-block">
                HİKAYEMİZ
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-white mb-6">
                Biz Kimiz?
              </h1>
              <div className="h-px w-24 bg-baked-gold mx-auto mb-8" />
              <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto leading-relaxed italic">
                {"Geleneksel Türk lezzetlerini modern tekniklerle buluşturan, kalite ve lezzetten ödün vermeyen bir kafe hikayesi"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-md text-charcoal-deep mb-8 font-bold">
                  Simit Teknesi Nazilli Nasıl Doğdu?
                </h2>
                <div className="space-y-6 text-on-surface-variant font-body-md leading-relaxed">
                  <p>
                    {"Geleneksel Türk kahvaltı kültürünü ve lezzetlerini yeni nesil ile buluşturma hayaliyle yola çıktık. Aydın'ın incisi Nazilli'de kurduğumuz Simit Teknesi, sadece bir kafe değil, aynı zamanda geleneksel lezzetleri modern tekniklerle buluşturan bir kültür köprüsüdür."}
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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Decorative border layout like the homepage */}
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-hearth-bronze/40 z-0" />
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Simit Teknesi İçi"
                    className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-103"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 z-20">
                  <img
                    src="/images/logo.png"
                    alt="Simit Teknesi Nazilli Logo"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white/40 border-t border-b border-slate-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-md text-charcoal-deep mb-4 font-bold">
                Değerlerimiz
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                İşimizi yaparken rehber aldığımız temel değerler
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                  viewport={{ once: true }}
                  className="bg-white border border-slate-muted/40 p-8 text-center rounded-2xl shadow-sm hover:shadow-xl hover:border-baked-gold/30 transition-all duration-300"
                >
                  <div className="text-baked-gold flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-headline-md text-title-lg text-charcoal-deep mb-4 font-bold">
                    {value.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 relative group"
              >
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-hearth-bronze/40 z-0" />
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Takım Çalışması"
                    className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-103"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-md text-charcoal-deep mb-6 font-bold">
                  Başarılarımız
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
                  Kısa sürede elde ettiğimiz deneyimler ve hedeflerimiz doğrultusunda 
                  attığımız adımlar
                </p>

                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3.5"
                    >
                      <CheckCircleIcon className="h-6 w-6 text-baked-gold flex-shrink-0 mt-0.5" />
                      <span className="font-body-md text-charcoal-deep">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section
          className="relative py-24 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(26, 26, 26, 0.92), rgba(26, 26, 26, 0.85)), url("https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <blockquote className="font-display-lg text-2xl md:text-3xl italic leading-relaxed text-white mb-6">
                {"\"Her lokmada sevgi, her yudumda sıcaklık, her ziyarette aile sıcaklığı...\""}
              </blockquote>
              <p className="font-label-lg text-baked-gold uppercase tracking-widest text-base font-bold">
                - Simit Teknesi Nazilli Felsefesi
              </p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default AboutPage;
