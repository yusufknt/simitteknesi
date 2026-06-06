import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isHome = router.pathname === "/";
  const showDarkTheme = !isScrolled && isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showDarkTheme
          ? "bg-black/25 backdrop-blur-md"
          : "bg-parchment-light/90 backdrop-blur-md border-b border-slate-muted shadow-sm"
      }`}
    >
      <nav className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-3 md:py-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <img
                src="/images/logo.png"
                alt="Simit Teknesi Nazilli Logo"
                className="w-full h-full object-contain"
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
                  className={`font-label-lg text-label-lg transition-all duration-200 pb-1 hover:scale-105 ${
                    isActive
                      ? showDarkTheme
                        ? "text-baked-gold font-bold border-b-2 border-baked-gold"
                        : "text-secondary font-bold border-b-2 border-secondary"
                      : showDarkTheme
                      ? "text-white/90 hover:text-baked-gold"
                      : "text-on-surface-variant hover:text-secondary"
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
                showDarkTheme ? "text-white hover:text-baked-gold" : "text-charcoal-deep hover:text-secondary"
              }`}
              aria-label="Menüyü aç/kapat"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-parchment-light border-t border-slate-muted mt-3"
            >
              <div className="px-2 pt-2 pb-4 space-y-2">
                {navigation.map((item) => {
                  const isActive = router.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-DEFAULT text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-secondary bg-surface-container-high font-bold border-l-4 border-secondary"
                          : "text-on-surface-variant hover:text-secondary hover:bg-surface-container-low"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
