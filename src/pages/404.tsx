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

      <div className="pt-24 bg-parchment-light min-h-screen flex items-center animate-page-in motion-reduce:animate-none">
        <section className="max-w-2xl mx-auto px-4 py-24 text-center">
          <span className="font-label-lg text-label-lg text-baked-gold uppercase tracking-[0.3em] mb-4 inline-block">
            HATA 404
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-charcoal-deep mb-6">
            Sayfa Bulunamadı
          </h1>
          <div className="h-px w-24 bg-baked-gold mx-auto mb-8" />
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
            Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Taze simitlerimiz ise hep
            yerinde!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-baked-gold text-white px-10 py-4 rounded font-label-lg text-label-lg hover:bg-hearth-bronze transition-colors duration-200"
            >
              Anasayfaya Dön
            </Link>
            <Link
              href="/menu"
              className="border border-charcoal-deep text-charcoal-deep px-10 py-4 rounded font-label-lg text-label-lg hover:bg-charcoal-deep hover:text-white transition-colors duration-200"
            >
              Menüyü İncele
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFoundPage;
