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
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
              </svg>
            </a>
            <a
              href="https://wa.me/905313300965"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-white hover:bg-baked-gold transition-colors hover:scale-110 duration-200"
              aria-label="WhatsApp üzerinden bize ulaşın"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="font-title-lg text-label-lg text-ember uppercase tracking-widest">Hızlı Bağlantılar</h4>
          <nav className="flex flex-col space-y-4" aria-label="Alt bilgi bağlantıları">
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
          <h4 className="font-title-lg text-label-lg text-ember uppercase tracking-widest">İletişim Bilgileri</h4>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-on-primary-container/80">
              <span className="material-symbols-outlined text-ember" aria-hidden="true">location_on</span>
              <p className="font-body-md text-body-md">Bamboo Avm, Nazilli, Aydın</p>
            </div>
            <div className="flex items-center gap-4 text-on-primary-container/80">
              <span className="material-symbols-outlined text-ember" aria-hidden="true">phone</span>
              <a href="tel:+905313300965" className="font-body-md text-body-md hover:text-white transition-colors">
                +90 531 330 09 65
              </a>
            </div>
            <div className="flex items-center gap-4 text-on-primary-container/80">
              <span className="material-symbols-outlined text-ember" aria-hidden="true">schedule</span>
              <p className="font-body-md text-body-md">Her Gün 10:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-on-primary-container/60" suppressHydrationWarning>
          © {new Date().getFullYear()} Simit Teknesi Nazilli. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
