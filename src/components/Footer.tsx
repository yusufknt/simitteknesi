import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-container py-section-gap border-t border-hearth-bronze/20 text-on-primary-container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="space-y-8">
          <div className="flex items-center space-x-2">
            <div className="w-14 h-14 flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Simit Teknesi Nazilli Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-headline-md text-headline-md text-parchment-light">Simit Teknesi Nazilli</h3>
          </div>
          <p className="font-body-md text-body-md text-on-primary-container/80 max-w-xs leading-relaxed">
            {"Nazilli'nin en taze ve lezzetli simit, açma, poğaça çeşitleri ile özel kahve karışımları ve doğal limonatalarımızı keşfedin."}
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/simitteknesinazilli"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-white hover:bg-baked-gold transition-colors hover:scale-110 duration-200"
              aria-label="Instagram'da bizi takip edin"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              href="https://wa.me/+905313300965"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-white hover:bg-baked-gold transition-colors hover:scale-110 duration-200"
              aria-label="WhatsApp üzerinden bize ulaşın"
            >
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="font-title-lg text-label-lg text-baked-gold uppercase tracking-widest">Hızlı Bağlantılar</h4>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="font-label-sm text-label-sm text-on-primary-container/80 hover:text-white transition-colors"
            >
              Anasayfa
            </Link>
            <Link
              href="/menu"
              className="font-label-sm text-label-sm text-on-primary-container/80 hover:text-white transition-colors"
            >
              Menü
            </Link>
            <Link
              href="/hakkimizda"
              className="font-label-sm text-label-sm text-on-primary-container/80 hover:text-white transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className="font-label-sm text-label-sm text-on-primary-container/80 hover:text-white transition-colors"
            >
              İletişim
            </Link>
          </nav>
        </div>

        <div className="space-y-8">
          <h4 className="font-title-lg text-label-lg text-baked-gold uppercase tracking-widest">İletişim Bilgileri</h4>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-on-primary-container/80">
              <span className="material-symbols-outlined text-baked-gold">location_on</span>
              <p className="font-body-md text-body-md">Bamboo Avm, Nazilli, Aydın</p>
            </div>
            <div className="flex items-center gap-4 text-on-primary-container/80">
              <span className="material-symbols-outlined text-baked-gold">phone</span>
              <p className="font-body-md text-body-md">+90 531 330 09 65</p>
            </div>
            <div className="flex items-center gap-4 text-on-primary-container/80">
              <span className="material-symbols-outlined text-baked-gold">schedule</span>
              <p className="font-body-md text-body-md">Her Gün 10:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-on-primary-container/60">
          © 2025 Simit Teknesi Nazilli. Tüm hakları saklıdır.
        </p>
        <div className="flex gap-8">
          <a className="font-label-sm text-label-sm text-on-primary-container/60 hover:text-baked-gold" href="#">
            Gizlilik Politikası
          </a>
          <a className="font-label-sm text-label-sm text-on-primary-container/60 hover:text-baked-gold" href="#">
            Kullanım Şartları
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
