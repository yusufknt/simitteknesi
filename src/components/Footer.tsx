import { ClockIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Simit Teknesi Nazilli Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className="text-xl font-bold bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "700",
                }}
              >
                Simit Teknesi Nazilli
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nazilli'nin en taze ve lezzetli simit, açma, poğaça çeşitleri ile
              özel kahve karışımları ve doğal limonatalarımızı keşfedin.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com/simitteknesinazilli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                aria-label="Instagram'da bizi takip edin"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://facebook.com/simitteknesinazilli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                aria-label="Facebook'ta bizi takip edin"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Bağlantılar</h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Anasayfa
              </Link>
              <Link
                href="/menu"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Menü
              </Link>
              <Link
                href="/hakkimizda"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                İletişim
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim Bilgileri</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Bamboo Avm
                  <br />
                  Nazilli, Aydın
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+90 (256) 312-4567</p>
              </div>
              <div className="flex items-start space-x-3">
                <ClockIcon className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Her Gün 10:00 - 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Simit Teknesi Nazilli. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
