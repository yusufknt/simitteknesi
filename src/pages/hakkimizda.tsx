import Head from "next/head";
import Link from "next/link";
import React from "react";
import { handleImageError, optimizedSrc, responsiveSrcSet } from "../utils/imageUtils";

const values = [
  {
    title: "Sevgiyle hazırlanır",
    description: "Her ürünümüzü sevgiyle, özenle ve geleneksel tariflerle hazırlıyoruz.",
  },
  {
    title: "Her gün taze",
    description: "Ürünlerimizi her gün taze olarak hazırlıyor, kaliteden asla ödün vermiyoruz.",
  },
  {
    title: "Önce misafirimiz",
    description: "Müşterilerimizin memnuniyeti bizim için her şeyden önemlidir.",
  },
];

const principles = [
  "Taze ve dinamik bir işletme ruhu",
  "Geleneksel tariflerle modern sunum tekniklerini birleştiren yaklaşım",
  "%100 doğal ve kaliteli malzemeler kullanımı",
  "Günlük taze üretim taahhüdü",
  "Deneyimli ve tutkulu ekip",
  "Müşteri memnuniyeti odaklı hizmet anlayışı",
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Hakkımızda - Simit Teknesi Nazilli</title>
        <meta
          name="description"
          content="Simit Teknesi Nazilli'nin hikayesi, değerlerimiz ve vizyonumuz hakkında bilgi edinin. Geleneksel lezzetleri modern tekniklerle buluşturuyoruz."
        />
      </Head>

      <div className="pt-24 md:pt-28 bg-parchment-light min-h-screen animate-page-in motion-reduce:animate-none">
        {/* Başlık */}
        <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop pt-8 md:pt-12">
          <h1 className="font-display-lg text-[44px] md:text-[64px] leading-none text-charcoal-deep">
            Hakkımızda
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-2xl">
            Geleneksel Türk lezzetlerini modern tekniklerle buluşturan, kalite ve lezzetten ödün
            vermeyen bir kafe hikâyesi.
          </p>
        </section>

        {/* Hikaye */}
        <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-16 md:py-24 grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 lg:order-2 relative">
            <img
              src={optimizedSrc("/images/simitteknesi.webp", "640")}
              srcSet={responsiveSrcSet("/images/simitteknesi.webp")}
              sizes="(min-width: 1024px) 600px, 92vw"
              data-full-src="/images/simitteknesi.webp"
              width={1524}
              height={952}
              onError={handleImageError}
              alt="Simit Teknesi Nazilli iç mekan"
              className="w-full aspect-[4/3] object-cover rounded-md"
            />
            <img
              src={optimizedSrc("/images/logo.png", "640")}
              data-full-src="/images/logo.png"
              width={540}
              height={456}
              onError={handleImageError}
              alt=""
              aria-hidden="true"
              className="absolute -bottom-8 left-6 w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-xl"
            />
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-[40px] md:leading-tight text-charcoal-deep text-balance">
              Simit Teknesi Nazilli nasıl doğdu?
            </h2>
            <div className="space-y-5 text-on-surface-variant font-body-md text-body-md leading-relaxed mt-8 max-w-prose">
              <p>
                {"Geleneksel Türk kahvaltı kültürünü ve lezzetlerini yeni nesil ile buluşturma hayaliyle yola çıktık. Aydın'ın incisi Nazilli'de kurduğumuz Simit Teknesi, sadece bir kafe değil, aynı zamanda geleneksel lezzetleri modern tekniklerle buluşturan bir kültür köprüsüdür."}
              </p>
              <p>
                Büyükannelerimizden öğrendiğimiz geleneksel tarifleri, modern sunum teknikleriyle
                harmanlayarak, hem nostaljik hem de çağdaş bir deneyim sunmaya karar verdik. Her
                simidimiz, her açmamız ve her fincan kahvemiz, aile sıcaklığı ve özeni taşıyacak
                şekilde hazırlanıyor.
              </p>
              <p>
                Misyonumuz, günün her anında müşterilerimize kaliteli, taze ve lezzetli ürünler
                sunarak, onların günlerine keyif katmaktır. Türk misafirperverliğini modern hizmet
                anlayışıyla birleştirerek, herkesin kendini evinde hissettiği bir mekan yaratmayı
                hedefliyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Değerler */}
        <section className="bg-white border-y border-slate-muted">
          <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-16 md:py-24">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-[40px] text-charcoal-deep">
              Değerlerimiz
            </h2>
            <div className="grid gap-10 md:grid-cols-3 md:gap-8 mt-10">
              {values.map((value) => (
                <div key={value.title} className="border-t-2 border-charcoal-deep pt-6">
                  <h3 className="font-headline-md text-2xl text-charcoal-deep">{value.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-3">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bizi farklı kılanlar */}
        <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-16 md:py-24 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-[40px] md:leading-tight text-charcoal-deep text-balance">
              Bizi farklı kılanlar
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-md">
              Her gün daha iyisi için benimsediğimiz ilkeler ve attığımız adımlar.
            </p>
          </div>
          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10">
            {principles.map((principle) => (
              <li
                key={principle}
                className="flex gap-3 py-4 border-b border-slate-muted font-body-md text-body-md text-charcoal-deep"
              >
                <svg
                  className="w-5 h-5 mt-0.5 shrink-0 text-baked-gold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.3a1 1 0 0 1 1.4 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                {principle}
              </li>
            ))}
          </ul>
        </section>

        {/* Felsefe */}
        <section className="bg-charcoal-deep text-white">
          <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-20 md:py-28">
            <blockquote className="max-w-3xl">
              <p className="font-display-lg text-3xl md:text-5xl leading-tight text-balance">
                Her lokmada sevgi, her yudumda sıcaklık, her ziyarette aile sıcaklığı.
              </p>
              <footer className="font-body-md text-body-md text-on-primary-container mt-6">
                Simit Teknesi Nazilli felsefesi
              </footer>
            </blockquote>
            <Link
              href="/menu"
              className="inline-block mt-12 bg-baked-gold text-white px-8 py-4 rounded font-label-lg text-label-lg hover:bg-hearth-bronze transition-colors duration-200"
            >
              Menüyü gör
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
