import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.3), rgba(239, 68, 68, 0.4)), url("/images/simitteknesi.png")',
          // 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(239, 68, 68, 0.4)), url("https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

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
            className="mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto">
              <img
                src="/images/logo.png"
                alt="Simit Teknesi Nazilli Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div className="flex flex-col items-center justify-center w-full">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl bg-black/60 backdrop-blur-md px-4 py-2 md:px-8 md:py-4 -z-10" aria-hidden="true" />
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span
                  className="bg-gradient-to-r from-white via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-2xl"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Simit Teknesi Nazilli'ye
                </span>
                <span
                  className="block bg-gradient-to-r from-white via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-2xl mt-2"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Hoş Geldiniz
                </span>
              </motion.h1>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Nazilli'nin en taze ve lezzetli simit, açma, poğaça çeşitleri ile
            özel kahve karışımları ve doğal limonatalarımızı keşfedin.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link
              href="/menu"
              className="group bg-gradient-to-r from-white to-gray-50 text-primary-600 px-10 py-5 rounded-full font-bold text-xl hover:from-primary-500 hover:to-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl flex items-center space-x-3"
            >
              <span>Menümüze Göz Atın</span>
              <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <Link
              href="/hakkimizda"
              className="text-white border-2 border-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Hakkımızda
            </Link>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 opacity-20"
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-16 h-16 object-contain"
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-40 right-20 text-5xl opacity-20"
          >
            ☕
          </motion.div>
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 left-20 opacity-20"
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
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
