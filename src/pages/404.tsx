import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sayfa Bulunamadı - Simit Teknesi Nazilli</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="pt-24 md:pt-28 bg-parchment-light min-h-[80vh] animate-page-in motion-reduce:animate-none">
        <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop pt-8 md:pt-12 pb-24">
          <h1 className="font-display-lg text-[44px] md:text-[64px] leading-none text-charcoal-deep">
            Sayfa bulunamadı
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-10 max-w-xl">
            Bu adreste bir sayfa yok. Bağlantı eski olabilir; menüye ya da anasayfaya
            buradan dönebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="bg-baked-gold text-white px-10 py-4 rounded font-label-lg text-label-lg text-center hover:bg-hearth-bronze transition-colors duration-200"
            >
              Anasayfaya dön
            </Link>
            <Link
              href="/menu"
              className="border border-charcoal-deep text-charcoal-deep px-10 py-4 rounded font-label-lg text-label-lg text-center hover:bg-charcoal-deep hover:text-white transition-colors duration-200"
            >
              Menüyü gör
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFoundPage;
