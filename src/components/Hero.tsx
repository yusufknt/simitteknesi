import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Simit Teknesi Interior"
          className="w-full h-full object-cover"
          src="/images/simitteknesi.jpg"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 1.1 }}
          animate={{ opacity: 1, y: 0, scale: 1.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mb-8 transform"
        >
          <img
            alt="Simit Teknesi Logo"
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
            src="/images/logo.png"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 tracking-tight leading-tight"
        >
          Simit Teknesi <span className="text-baked-gold">Nazilli</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className="h-px w-24 bg-baked-gold mb-8 origin-center"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          className="font-body-lg text-body-lg text-white/90 max-w-2xl mb-12"
        >
          {"Taze & Lezzetli — Günlük taze üretim simit, poğaça ve böreklerimiz ile özel kahve çeşitlerimizi keşfedin. Nazilli'nin kalbinde bir sanat eseri lezzetler."}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="/menu"
            className="bg-baked-gold text-white px-10 py-5 rounded-DEFAULT font-label-lg text-label-lg flex items-center justify-center gap-3 hover:bg-hearth-bronze transition-all hover:-translate-y-1 shadow-lg shadow-black/20 active:scale-95 duration-200"
          >
            Menüyü Keşfet
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          <Link
            href="/iletisim"
            className="border border-white/30 text-white backdrop-blur-sm px-10 py-5 rounded-DEFAULT font-label-lg text-label-lg hover:bg-white/10 transition-all active:scale-95 duration-200"
          >
            İletişim
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-label-sm text-label-sm text-white uppercase tracking-widest">Keşfet</span>
        <div className="w-px h-12 bg-gradient-to-b from-baked-gold to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
