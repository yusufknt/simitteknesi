import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Soft Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Main Heading - Minimalist Design */}
          <motion.div className="flex flex-col items-center justify-center w-full mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-center text-gray-900 mb-4"
            >
              <span className="block">Simit Teknesi</span>
              <span className="block text-red-600">Nazilli</span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-center mb-12"
          >
            Günlük taze üretim simit, poğaça ve böreklerimiz ile özel kahve çeşitlerimizi keşfedin
          </motion.p>

          {/* Logo Below Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 relative"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto relative">
              <img
                src="/images/logo.png"
                alt="Simit Teknesi Nazilli Logo"
                className="w-full h-full object-contain drop-shadow-xl relative z-10"
              />
            </div>
          </motion.div>

          {/* CTA Buttons - Clean & Simple */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/menu"
              className="group bg-red-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Menüyü Keşfet</span>
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/iletisim"
              className="border-2 border-red-600 text-red-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              İletişim
            </Link>
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
