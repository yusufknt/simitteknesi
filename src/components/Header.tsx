import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { handleImageError, LOGO_PATH, LOGO_SRC, LOGO_SRCSET } from "../utils/imageUtils";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: "Anasayfa", href: "/" },
    { name: "Menü", href: "/menu" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "İletişim", href: "/iletisim" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Ana sayfanın en üstünde header siyah hero'nun üstünde şeffaf-koyu durur; kaydırınca ve
  // diğer sayfalarda açık tema
  const isHome = router.pathname === "/";
  const showDarkTheme = !isScrolled && isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        showDarkTheme
          ? "bg-black/30 backdrop-blur-md border-b border-white/10"
          : "bg-parchment-light/90 backdrop-blur-md border-b border-slate-muted shadow-xs"
      }`}
    >
      <nav className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-3 md:py-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              <img
                src={LOGO_SRC}
                srcSet={LOGO_SRCSET}
                sizes="(min-width: 768px) 64px, 48px"
                data-full-src={LOGO_PATH}
                alt="Simit Teknesi Nazilli Logo"
                width={540}
                height={456}
                className="w-full h-full object-contain"
                onError={handleImageError}
              />
            </div>
            <span
              className={`font-display-lg text-title-lg transition-colors duration-300 ${
                showDarkTheme ? "text-white" : "text-secondary"
              }`}
            >
              Simit Teknesi Nazilli
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 md:space-x-12">
            {navigation.map((item) => {
              const isActive = router.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-label-lg text-label-lg transition-colors duration-200 pb-1 border-b-2 ${
                    isActive
                      ? showDarkTheme
                        ? "text-white border-[#e00000]"
                        : "text-secondary border-secondary"
                      : showDarkTheme
                      ? "text-white/80 border-transparent hover:text-white"
                      : "text-on-surface-variant border-transparent hover:text-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className={`p-2 rounded-md transition-colors duration-200 ${
                showDarkTheme ? "text-white" : "text-charcoal-deep hover:text-secondary"
              }`}
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation: kapalıyken de DOM'da durur ama `inert` (odaklanılamaz, ekran
            okuyucuya görünmez). Açılıp kapanma CSS ile: satır yüksekliği 0fr ↔ 1fr ve opaklık.
            Böylece framer-motion her sayfanın paketine girmez. */}
        <div
          id="mobile-navigation"
          inert={!isMobileMenuOpen}
          className={`md:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
            isMobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="pt-3">
              <div className="bg-parchment-light border-t border-slate-muted">
                <div className="px-2 pt-2 pb-4 space-y-2">
                  {navigation.map((item) => {
                    const isActive = router.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded font-body-md text-base transition-colors duration-200 ${
                          isActive
                            ? "text-secondary bg-surface-container-high font-semibold"
                            : "text-on-surface-variant hover:text-secondary hover:bg-surface-container-low"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
