import Link from "next/link";
import React from "react";

// Açılış animasyonları CSS ile (globals.css → animate-fade-up / animate-grow-x):
// sunucudan gelen HTML JavaScript beklemeden görünür, LCP ve SEO etkilenmez.
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Simit Teknesi Nazilli iç mekan"
          className="w-full h-full object-cover"
          src="/images/simitteknesi.webp"
          fetchPriority="high"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center">
        {/* Logo Container */}
        <div className="mb-8 animate-fade-up [animation-delay:0.1s] motion-reduce:animate-none">
          <img
            alt="Simit Teknesi Logo"
            className="w-24 h-24 md:w-32 md:h-32 object-contain scale-130"
            src="/images/logo.png"
          />
        </div>

        {/* Title */}
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 tracking-tight leading-tight animate-fade-up [animation-delay:0.25s] motion-reduce:animate-none">
          Simit Teknesi <span className="text-ember">Nazilli</span>
        </h1>

        {/* Divider */}
        <div className="h-px w-24 bg-baked-gold mb-8 origin-center animate-grow-x [animation-delay:0.4s] motion-reduce:animate-none" />

        {/* Subtitle */}
        <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mb-12 animate-fade-up [animation-delay:0.5s] motion-reduce:animate-none">
          {"Taze & Lezzetli — Günlük taze üretim simit, poğaça ve böreklerimiz ile özel kahve çeşitlerimizi keşfedin. Nazilli'nin kalbinde bir sanat eseri lezzetler."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-up [animation-delay:0.65s] motion-reduce:animate-none">
          <Link
            href="/menu"
            className="bg-baked-gold text-white px-10 py-5 rounded font-label-lg text-label-lg flex items-center justify-center gap-3 hover:bg-hearth-bronze transition-all hover:-translate-y-1 shadow-lg shadow-black/20 active:scale-95 duration-200"
          >
            Menüyü Keşfet
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
          </Link>
          <Link
            href="/iletisim"
            className="border border-white/30 text-white backdrop-blur-xs px-10 py-5 rounded font-label-lg text-label-lg hover:bg-white/10 transition-all active:scale-95 duration-200"
          >
            İletişim
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60" aria-hidden="true">
        <span className="font-label-sm text-label-sm text-white uppercase tracking-widest">Keşfet</span>
        <div className="w-px h-12 bg-linear-to-b from-baked-gold to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
