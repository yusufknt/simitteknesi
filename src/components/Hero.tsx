import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/simitteknesi.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-red-900/40 to-amber-900/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Logo Above Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 relative"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 rounded-full blur-3xl opacity-30 animate-pulse" />
              <img
                src="/images/logo.png"
                alt="Simit Teknesi Nazilli Logo"
                className="w-full h-full object-contain drop-shadow-2xl relative z-10"
              />
            </div>
          </motion.div>

          {/* Main Heading - Modern Design */}
          <motion.div className="flex flex-col items-center justify-center w-full mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-center"
            >
              <span className="block bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent drop-shadow-2xl mb-2">
                Simit Teknesi
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-red-500 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
                Nazilli
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 flex items-center space-x-2"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
              <span className="text-amber-400 text-sm font-semibold tracking-wider">TAZE & LEZZETLİ</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500" />
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-center"
          >
            Günlük taze üretim simit, poğaça ve böreklerimiz ile özel kahve çeşitlerimizi keşfedin
          </motion.p>

          {/* CTA Buttons - Modern Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-10"
          >
            <Link
              href="/menu"
              className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-red-500 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
            >
              <span className="relative z-10">Menüyü Keşfet</span>
              <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/iletisim"
              className="group relative overflow-hidden border-2 border-white/30 backdrop-blur-md bg-white/10 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <span>İletişim</span>
            </Link>
          </motion.div>

          {/* Features Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            {[
              { icon: "🥯", text: "Günlük Taze" },
              { icon: "☕", text: "Özel Kahveler" },
              { icon: "⚡", text: "Hızlı Servis" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white font-semibold">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
