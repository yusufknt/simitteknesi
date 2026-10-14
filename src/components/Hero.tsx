import Link from "next/link";
import React from "react";
import { DIRECTIONS_URL, HOURS_LABEL } from "../data/business";
import { handleImageError, optimizedSrc, responsiveSrcSet } from "../utils/imageUtils";
import OpenStatus from "./OpenStatus";

// Açılış animasyonları CSS ile (globals.css → animate-fade-up):
// sunucudan gelen HTML JavaScript beklemeden görünür, LCP ve SEO etkilenmez.
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92svh] flex items-end overflow-hidden bg-charcoal-deep">
      {/* Dükkânın kendi fotoğrafı */}
      <img
        alt="Bamboo AVM'deki Simit Teknesi Nazilli dükkânı"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
        src={optimizedSrc("/images/simitteknesi.webp", "1280")}
        srcSet={`${responsiveSrcSet("/images/simitteknesi.webp")}, /images/simitteknesi.webp 1524w`}
        sizes="100vw"
        data-full-src="/images/simitteknesi.webp"
        width={1524}
        height={952}
        fetchPriority="high"
        onError={handleImageError}
      />
      {/* Yazının okunması için soldan ve alttan koyulaşan örtü */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(21,16,16,0.95)_0%,rgba(21,16,16,0.55)_45%,rgba(21,16,16,0.15)_100%)] md:bg-[linear-gradient(to_right,rgba(21,16,16,0.92)_0%,rgba(21,16,16,0.6)_45%,rgba(21,16,16,0)_75%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-container-max mx-auto px-4 md:px-margin-desktop pt-32 pb-14 md:pb-24">
        <div className="max-w-xl">
          <div className="animate-fade-up [animation-delay:0.1s] motion-reduce:animate-none">
            <OpenStatus className="text-white/85 mb-6" />
          </div>

          <h1 className="font-display-lg text-[44px] leading-[1.05] md:text-[76px] md:leading-[1.02] text-white tracking-tight animate-fade-up [animation-delay:0.2s] motion-reduce:animate-none">
            Simit Teknesi Nazilli
          </h1>

          <p className="font-body-lg text-body-lg text-white/85 mt-6 max-w-md animate-fade-up [animation-delay:0.35s] motion-reduce:animate-none">
            Fırından yeni çıkmış simit, poğaça ve börek; yanında demli çay ya da kahve.
            Bamboo AVM&apos;de, {HOURS_LABEL.toLocaleLowerCase("tr")}.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-10 animate-fade-up [animation-delay:0.5s] motion-reduce:animate-none">
            <Link
              href="/menu"
              className="bg-baked-gold text-white px-8 py-4 rounded font-label-lg text-label-lg text-center hover:bg-hearth-bronze transition-colors duration-200"
            >
              Menüyü gör
            </Link>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white px-8 py-4 rounded font-label-lg text-label-lg text-center hover:bg-white hover:text-charcoal-deep transition-colors duration-200"
            >
              Yol tarifi al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
