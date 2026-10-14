import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { preload } from "react-dom";
import {
  ANCHOR_BY_ITEM_ID,
  BUBBLE_TEA_ITEM_ID,
  ITEM_ANCHORS,
  MenuItem,
  categories,
  menuItems,
} from "../data/menu";
import {
  handleImageError,
  imageFallbackRef,
  optimizedSrc,
  responsiveSrcSet,
} from "../utils/imageUtils";

// İlk ekranda görünen bu kadar ürün resmi beklemeden (lazy olmadan) yüklenir
const EAGER_IMAGE_COUNT = 8;

const BUBBLE_TEA_FLAVORS = [
  { name: "Çilek", image: "/images/bubbletea/cilek.png" },
  { name: "Karamel", image: "/images/bubbletea/karamel.png" },
  { name: "Mango", image: "/images/bubbletea/mango.png" },
  { name: "Yaban mersini", image: "/images/bubbletea/yaban-mersini.png" },
  { name: "Yeşil elma", image: "/images/bubbletea/yesil-elma.png" },
];

const bubbleTeaItem = menuItems.find((item) => item.id === BUBBLE_TEA_ITEM_ID);

const BUBBLE_TEA_IMAGE_SIZES = "(min-width: 1024px) 180px, (min-width: 768px) 30vw, 45vw";

// Açılacak pencerenin fotoğraflarını tıklamadan önce (üzerine gelince/odaklanınca) indirmeye başla
const preloadItemImages = (item: MenuItem) => {
  if (item.id === BUBBLE_TEA_ITEM_ID) {
    BUBBLE_TEA_FLAVORS.forEach((flavor) =>
      preload(optimizedSrc(flavor.image, "640"), {
        as: "image",
        imageSrcSet: responsiveSrcSet(flavor.image),
        imageSizes: BUBBLE_TEA_IMAGE_SIZES,
      })
    );
  } else {
    preload(optimizedSrc(item.image, "1280"), { as: "image" });
  }
};

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("tümü");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showBubbleTeaModal, setShowBubbleTeaModal] = useState(false);

  // Hash ile ilgili ürüne git (ör. #hamburger-menu, #bubble-tea-cesitleri)
  // Kategori geçiş animasyonu bitip yeni liste ekrana gelmeden kaydırılırsa konum yanlış
  // hesaplanıyor; bu yüzden kart yeni kategoride mount olduğunda kaydırılıyor (bkz. kart ref'i)
  const pendingScrollIdRef = useRef<string | null>(null);

  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    const target = ITEM_ANCHORS[anchor];
    if (!target) return;
    pendingScrollIdRef.current = anchor;
    const timer = setTimeout(() => {
      setActiveCategory(target.category);
    }, 300); // hydrate sonrası kategori değişimi için kısa gecikme
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleBubbleTeaClick = () => {
    setShowBubbleTeaModal(true);
  };

  const closeImageModal = () => {
    setSelectedItem(null);
  };

  const closeBubbleTeaModal = () => {
    setShowBubbleTeaModal(false);
  };

  // Açık pencere (modal) için: Esc ile kapatma, odağı pencereye taşıma ve içinde tutma,
  // arka plan kaydırmasını kilitleme; kapanınca odağı tıklanan öğeye geri verme
  const isModalOpen = selectedItem !== null || showBubbleTeaModal;
  const modalRef = useRef<HTMLDivElement>(null);
  const modalCloseButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isModalOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalCloseButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
        setShowBubbleTeaModal(false);
        return;
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (!modalRef.current.contains(active)) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isModalOpen]);

  // Türkçe büyük/küçük harf kurallarıyla küçült ve Türkçe karakterleri sadeleştir
  // ("KAŞARLI", "kasarli", "izmir" → "İzmir Bombası" gibi aramalar eşleşsin)
  const normalizeForSearch = (text: string) =>
    text
      .toLocaleLowerCase("tr")
      .replace(/ç/g, "c")
      .replace(/ğ/g, "g")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ş/g, "s")
      .replace(/ü/g, "u")
      .trim();

  const normalizedQuery = normalizeForSearch(searchQuery);

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "tümü" || item.category === activeCategory;
    const matchesSearch = normalizedQuery === "" ||
      normalizeForSearch(item.name).includes(normalizedQuery) ||
      normalizeForSearch(item.description).includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  // Kategori değişince liste başı ekranın üstünde kaldıysa listeye geri dön
  const listTopRef = useRef<HTMLElement>(null);
  const selectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const top = listTopRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) {
      listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getGroupedItems = () => {
    if (activeCategory !== "tümü") {
      return { [activeCategory]: filteredItems };
    }
    const groups: { [key: string]: MenuItem[] } = {};
    categories.forEach((cat) => {
      if (cat.id !== "tümü") {
        const items = filteredItems.filter((item) => item.category === cat.id);
        if (items.length > 0) {
          groups[cat.id] = items;
        }
      }
    });
    return groups;
  };

  const groupedItems = getGroupedItems();
  const eagerImageIds = new Set(
    Object.values(groupedItems)
      .flat()
      .slice(0, EAGER_IMAGE_COUNT)
      .map((item) => item.id)
  );

  return (
    <>
      <Head>
        <title>Menü - Simit Teknesi Nazilli</title>
        <meta
          name="description"
          content="Simit Teknesi Nazilli menümüzde simit, açma, poğaça, kahve, çay, tatlı ve daha fazlası. Lezzetli seçeneklerimizi keşfedin."
        />
      </Head>

      <div className="pt-24 md:pt-28 bg-parchment-light min-h-screen animate-page-in motion-reduce:animate-none">
        {/* Başlık ve arama */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-6 md:flex md:items-end md:justify-between md:gap-12">
          <div className="max-w-xl">
            <h1 className="font-display-lg text-[44px] md:text-[64px] leading-none text-charcoal-deep">
              Menü
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4">
              Simitten bubble tea&apos;ye tezgâhımızdaki her şey ve güncel fiyatı.
              Fotoğrafa dokunarak ürünü yakından görebilirsiniz.
            </p>
          </div>
          <div className="relative mt-6 md:mt-0 md:w-80 shrink-0">
            <label htmlFor="menu-search" className="sr-only">
              Menüde ara
            </label>
            <input
              id="menu-search"
              type="search"
              placeholder="Ürün ara: simit, latte…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-outline-variant focus:border-baked-gold focus:ring-2 focus:ring-baked-gold/20 rounded-lg font-body-md text-charcoal-deep transition-colors duration-200 outline-hidden"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </section>

        {/* Kategori çubuğu: kaydırırken üstte sabit kalır, mobilde yatay kaydırılır */}
        <nav
          aria-label="Menü kategorileri"
          className="sticky top-[72px] md:top-[96px] z-30 bg-parchment-light/95 backdrop-blur-md border-y border-slate-muted"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              const count =
                category.id === "tümü"
                  ? menuItems.length
                  : menuItems.filter((item) => item.category === category.id).length;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => selectCategory(category.id)}
                  className={`shrink-0 px-3 lg:px-2.5 py-3.5 font-label-lg text-sm whitespace-nowrap border-b-2 transition-colors duration-200 ${
                    isActive
                      ? "border-baked-gold text-baked-gold font-semibold"
                      : "border-transparent text-on-surface-variant hover:text-charcoal-deep"
                  }`}
                >
                  {category.name}
                  <span className={`ml-1.5 text-xs lining-nums tabular-nums ${isActive ? "text-baked-gold/70" : "text-outline"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Fiyat tahtası */}
        <section ref={listTopRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 scroll-mt-40">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCategory}
              className="space-y-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
            >
              {filteredItems.length === 0 && (
                <div className="py-16 max-w-md">
                  <p className="font-display-lg text-2xl text-charcoal-deep mb-2">
                    Sonuç bulunamadı
                  </p>
                  <p className="font-body-md text-on-surface-variant mb-6">
                    {searchQuery.trim()
                      ? `"${searchQuery.trim()}" ile eşleşen bir ürün yok. Farklı bir kelime deneyin ya da tüm menüye dönün.`
                      : "Bu kategoride henüz ürün yok."}
                  </p>
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="px-5 py-2.5 rounded-lg font-label-lg text-sm bg-charcoal-deep text-white hover:bg-baked-gold transition-colors duration-200"
                    >
                      Aramayı temizle
                    </button>
                  )}
                </div>
              )}
              {Object.entries(groupedItems).map(([catId, items]) => {
                const categoryName = categories.find((c) => c.id === catId)?.name || "";
                return (
                  <div key={catId}>
                    <div className="flex items-baseline justify-between gap-4 border-b-2 border-charcoal-deep pb-3 mb-2">
                      <h2 className="font-display-lg text-2xl md:text-3xl text-charcoal-deep">
                        {categoryName}
                      </h2>
                      <span className="font-body-md text-sm text-outline lining-nums tabular-nums">
                        {items.length} ürün
                      </span>
                    </div>

                    <ul className="grid lg:grid-cols-2 lg:gap-x-14">
                      {items.map((item) => {
                        const isBubbleTea = item.id === BUBBLE_TEA_ITEM_ID;
                        const openItem = () =>
                          isBubbleTea ? handleBubbleTeaClick() : handleImageClick(item);
                        return (
                          <li
                            key={item.id}
                            // id sadece ürünün kendi kategorisi açıkken verilir; "Tümü" listesinde de
                            // olursa tarayıcının kendi hash kaydırması bizim kaydırmamızla yarışıyor
                            id={activeCategory === item.category ? ANCHOR_BY_ITEM_ID[item.id] : undefined}
                            ref={(el) => {
                              if (
                                el &&
                                el.id &&
                                el.id === pendingScrollIdRef.current &&
                                activeCategory === item.category
                              ) {
                                pendingScrollIdRef.current = null;
                                el.scrollIntoView({ behavior: "smooth", block: "center" });
                              }
                            }}
                            className="flex gap-4 py-4 border-b border-slate-muted target:bg-baked-gold/5"
                          >
                            <button
                              type="button"
                              onClick={openItem}
                              onPointerEnter={() => preloadItemImages(item)}
                              onFocus={() => preloadItemImages(item)}
                              aria-label={isBubbleTea ? "Bubble Tea çeşitlerini göster" : `${item.name} fotoğrafını büyüt`}
                              className="relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden bg-surface-container cursor-zoom-in outline-none focus-visible:ring-2 focus-visible:ring-baked-gold focus-visible:ring-offset-2"
                            >
                              <img
                                src={optimizedSrc(item.image, "thumb")}
                                data-full-src={item.image}
                                alt=""
                                width={240}
                                height={240}
                                className="w-full h-full object-cover"
                                ref={imageFallbackRef}
                                onError={handleImageError}
                                loading={eagerImageIds.has(item.id) ? "eager" : "lazy"}
                                fetchPriority={eagerImageIds.has(item.id) ? "high" : "auto"}
                                decoding="async"
                              />
                            </button>

                            <div className="min-w-0 grow">
                              <div className="flex items-baseline">
                                <h3 className="font-headline-md text-[17px] md:text-lg leading-snug text-charcoal-deep font-semibold">
                                  {item.name}
                                </h3>
                                <span className="menu-leader" aria-hidden="true" />
                                {/* Boyutlu fiyatlar ("M: 135₺ / L: 150₺") dar ekranda satır kırabilsin diye parçalanıyor */}
                                <span className="font-display-lg text-[17px] md:text-lg font-semibold text-baked-gold text-right lining-nums tabular-nums max-w-[45%]">
                                  {item.price.split(" / ").map((part, i, parts) => (
                                    <React.Fragment key={part}>
                                      <span className="whitespace-nowrap">
                                        {i < parts.length - 1 ? `${part} /` : part}
                                      </span>
                                      {i < parts.length - 1 && " "}
                                    </React.Fragment>
                                  ))}
                                </span>
                              </div>
                              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mt-1.5 max-w-prose">
                                {item.description}
                              </p>
                              {isBubbleTea && (
                                <button
                                  type="button"
                                  onClick={openItem}
                                  className="mt-2 font-label-lg text-sm font-semibold text-baked-gold underline underline-offset-4 decoration-baked-gold/30 hover:decoration-baked-gold"
                                >
                                  5 çeşidi gör
                                </button>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>

      {/* Büyütülmüş fotoğraf: altında fiyat tahtasındaki gibi ad ve fiyat */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-9999 bg-charcoal-deep/90 flex items-center justify-center p-4"
            onClick={closeImageModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="image-modal-title"
            ref={modalRef}
          >
            <motion.figure
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                ref={modalCloseButtonRef}
                onClick={closeImageModal}
                className="absolute top-3 right-3 w-10 h-10 bg-white/95 text-charcoal-deep rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 z-10 outline-none focus-visible:ring-2 focus-visible:ring-baked-gold focus-visible:ring-offset-2"
                aria-label="Kapat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <img
                src={optimizedSrc(selectedItem.image, "1280")}
                data-full-src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-auto max-h-[70vh] object-contain rounded-md"
                onError={handleImageError}
              />

              <figcaption className="mt-4 text-white">
                <div className="flex items-baseline">
                  <h3 id="image-modal-title" className="font-headline-md text-xl md:text-2xl font-semibold">
                    {selectedItem.name}
                  </h3>
                  <span className="menu-leader opacity-40" aria-hidden="true" />
                  <span className="font-display-lg text-xl md:text-2xl font-semibold text-ember lining-nums tabular-nums text-right">
                    {selectedItem.price}
                  </span>
                </div>
                <p className="font-body-md text-sm text-white/70 mt-1.5 max-w-prose">
                  {selectedItem.description}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bubble tea çeşitleri */}
      <AnimatePresence>
        {showBubbleTeaModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-9999 bg-charcoal-deep/90 flex items-center justify-center p-4"
            onClick={closeBubbleTeaModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="bubble-tea-modal-title"
            ref={modalRef}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-parchment-light rounded-md"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                ref={modalCloseButtonRef}
                onClick={closeBubbleTeaModal}
                className="absolute top-3 right-3 w-10 h-10 bg-white/95 text-charcoal-deep rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 z-10 outline-none focus-visible:ring-2 focus-visible:ring-baked-gold focus-visible:ring-offset-2"
                aria-label="Kapat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 md:p-10">
                <div className="flex items-baseline border-b-2 border-charcoal-deep pb-3 pr-12">
                  <h2 id="bubble-tea-modal-title" className="font-display-lg text-2xl md:text-3xl text-charcoal-deep">
                    Bubble Tea
                  </h2>
                  <span className="menu-leader" aria-hidden="true" />
                  <span className="font-display-lg text-2xl md:text-3xl font-semibold text-baked-gold lining-nums tabular-nums">
                    {bubbleTeaItem?.price}
                  </span>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant mt-3">
                  Beş aroma, hepsi aynı fiyat. Yumuşak boba toplarıyla servis edilir.
                </p>

                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6 mt-8">
                  {BUBBLE_TEA_FLAVORS.map((flavor) => (
                    <li key={flavor.name}>
                      <div className="aspect-[4/5] overflow-hidden rounded-md bg-surface-container">
                        <img
                          src={optimizedSrc(flavor.image, "640")}
                          srcSet={responsiveSrcSet(flavor.image)}
                          sizes={BUBBLE_TEA_IMAGE_SIZES}
                          data-full-src={flavor.image}
                          alt={`${flavor.name} bubble tea`}
                          width={640}
                          height={800}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                          decoding="async"
                        />
                      </div>
                      <h3 className="font-headline-md text-lg font-semibold text-charcoal-deep mt-3">
                        {flavor.name}
                      </h3>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuPage;
