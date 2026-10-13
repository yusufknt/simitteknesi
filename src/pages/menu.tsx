import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { handleImageError, imageFallbackRef } from "../utils/imageUtils";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  popular?: boolean;
}

// Linkle doğrudan gidilebilen ürünler (ör. /menu#hamburger-menu)
const ITEM_ANCHORS: Record<string, { itemId: number; category: string }> = {
  "hamburger-menu": { itemId: 68, category: "mutfaktan" },
  "pizza-menu": { itemId: 681, category: "mutfaktan" },
  "bubble-tea-cesitleri": { itemId: 1084, category: "icecekler" },
};

const ANCHOR_BY_ITEM_ID: Record<number, string> = Object.fromEntries(
  Object.entries(ITEM_ANCHORS).map(([anchor, target]) => [target.itemId, anchor])
);

const BUBBLE_TEA_ITEM_ID = ITEM_ANCHORS["bubble-tea-cesitleri"].itemId;

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("tümü");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
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

  const handleImageClick = (image: string, name: string) => {
    setSelectedImage({ src: image, alt: name });
  };

  const handleBubbleTeaClick = () => {
    setShowBubbleTeaModal(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const closeBubbleTeaModal = () => {
    setShowBubbleTeaModal(false);
  };

  // Açık pencere (modal) için: Esc ile kapatma, odağı pencereye taşıma ve içinde tutma,
  // arka plan kaydırmasını kilitleme; kapanınca odağı tıklanan öğeye geri verme
  const isModalOpen = selectedImage !== null || showBubbleTeaModal;
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
        setSelectedImage(null);
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

  const categories = [
    {
      id: "tümü",
      name: "Tümü",
      icon: "🍽️",
    },
    {
      id: "kahvaltilar",
      name: "Kahvaltılar",
      icon: "🍳",
    },
    {
      id: "mutfaktan",
      name: "Mutfaktan",
      icon: "🍲",
    },
    {
      id: "firindanlar",
      name: "Fırından",
      icon: "🥯",
    },
    {
      id: "borekler",
      name: "Börek & Gözleme",
      icon: "🥧",
    },
    {
      id: "sandvic-tost",
      name: "Sandviç & Tost",
      icon: "🥙",
    },
    {
      id: "tatlilar",
      name: "Tatlılar",
      icon: "🍰",
    },
    {
      id: "icecekler",
      name: "İçecekler",
      icon: "☕",
    },
    {
      id: "aperatifler",
      name: "Kahvaltılık & Atıştırmalık",
      icon: "🍫",
    },
  ];

    const menuItems: MenuItem[] = [
    // Kahvaltılar
    {
      id: 1,
      name: "Kahvaltı Tabağı",
      description:
        "Omlet, peynir, salam, bal, tereyağ, reçel, domates, salatalık, simit ve çay",
      price: "350₺",
      category: "kahvaltilar",
      image: "/images/kahvaltilar/kahvalti-tabagi.jpg",
    },
    {
      id: 3,
      name: "Simit Kahvaltı Tabağı",
      description:
        "Simit, peynir, zeytin, reçel, söğüş, yeşillik ve çay ile hafif kahvaltı",
      price: "200₺",
      category: "kahvaltilar",
      image: "/images/kahvaltilar/simit-kahvalti-tabagi.jpg",
    },
    {
      id: 4,
      name: "Kruvasan Kahvaltı Tabağı",
      description:
        "Taze kruvasan, peynir çeşitleri, reçel, bal, tereyağ ve çay",
      price: "350₺",
      category: "kahvaltilar",
      image: "/images/kahvaltilar/kruvasan-kahvalti-tabagi.jpg",
    },
    {
      id: 5,
      name: "Sade Menemen",
      description:
        "Domates, biber ve yumurta ile hazırlanmış geleneksel sade menemen",
      price: "180₺",
      category: "kahvaltilar",
      image: "/images/kahvaltilar/kasarli-menemen.jpg",
    },
    {
      id: 501,
      name: "Kaşarlı Menemen",
      description:
        "Eriyen kaşar peyniri, domates, biber ve yumurta ile hazırlanmış nefis menemen",
      price: "200₺",
      category: "kahvaltilar",
      image: "/images/kahvaltilar/kasarli-menemen.jpg",
    },
    {
      id: 6,
      name: "Sahanda Yumurta",
      description:
        "Tereyağında pişirilmiş taze yumurta",
      price: "100₺",
      category: "kahvaltilar",
      image: "/images/kahvaltilar/tavada-yumurta.jpg",
    },
    {
      id: 7,
      name: "Sucuklu Yumurta",
      description:
        "Sucuk ile pişirilmiş baharatlı yumurta",
      price: "250₺",
      category: "kahvaltilar",
      image: "/images/kahvaltilar/sucuklu-yumurta.jpg",
    },
    {
      id: 8,
      name: "Omlet",
      description:
        "Peynir ve sebzelerle hazırlanmış yumuşacık omlet",
      price: "120₺",
      category: "kahvaltilar",
      image: "/images/kahvaltilar/omlet.jpg",
    },

    // Tostlar
    {
      id: 11,
      name: "Kaşarlı Tost",
      description:
        "Sıcacık ve çıtır kaşarlı tost",
      price: "185₺",
      category: "sandvic-tost",
      image: "/images/tostlar/kasarli-tost.jpg",
    },
    {
      id: 111,
      name: "Sucuklu Tost",
      description:
        "Baharatlı sucuk ile hazırlanmış çıtır tost",
      price: "220₺",
      category: "sandvic-tost",
      image: "/images/tostlar/sucuk-kasarli-tost.jpg",
    },
    {
      id: 112,
      name: "Sucuklu Kaşarlı Tost",
      description:
        "Nefis sucuk ve eriyen kaşar peynirli zengin tost",
      price: "250₺",
      category: "sandvic-tost",
      image: "/images/tostlar/sucuk-kasarli-tost.jpg",
    },

    // Fırından (Simit, Poğaça, Açma)
    {
      id: 14,
      name: "Sade Simit",
      description: "Taptaze susamlı simit",
      price: "20₺",
      category: "firindanlar",
      image: "/images/simitler/sade-simit.jpg",
      popular: true,
    },
    {
      id: 15,
      name: "Tereyağlı Simit",
      description:
        "Tereyağı ile zenginleştirilmiş yumuşak simit",
      price: "30₺",
      category: "firindanlar",
      image: "/images/simitler/tereyagli-simit.jpg",
      popular: true,
    },
    {
      id: 151,
      name: "Sütlü Simit",
      description:
        "Süt ile yoğrulmuş taze ve yumuşak simit",
      price: "30₺",
      category: "firindanlar",
      image: "/images/simitler/tereyagli-simit.jpg",
      popular: true,
    },
    {
      id: 17,
      name: "Çikolatalı Simit",
      description:
        "Çikolata ile tatlandırılmış özel simit",
      price: "35₺",
      category: "firindanlar",
      image: "/images/simitler/tereyagli-simit.jpg",
      popular: true,
    },
    {
      id: 20,
      name: "Ankara Tereyağlısı",
      description: "Ankara usulü tereyağlı simit",
      price: "30₺",
      category: "firindanlar",
      image: "/images/simitler/tereyagli-simit.jpg",
    },
    {
      id: 18,
      name: "Atom Simit",
      description:
        "İçi pizza harcıyla dolu lezzet bombası",
      price: "90₺",
      category: "firindanlar",
      image: "/images/simitler/atom-simit.jpeg",
      popular: true,
    },
    {
      id: 19,
      name: "Kaşarlı Simit",
      description: "Kaşar peyniri dolgulu simit",
      price: "50₺",
      category: "firindanlar",
      image: "/images/simitler/kasarli-simit.jpg",
    },
    {
      id: 21,
      name: "Sucuklu Simit",
      description: "Sucuk dolgulu baharatlı simit",
      price: "60₺",
      category: "firindanlar",
      image: "/images/simitler/sucuk-kasarli-simit.jpg",
    },
    {
      id: 22,
      name: "Sade Poğaça",
      description:
        "Yumuşacık ev yapımı poğaça",
      price: "25₺",
      category: "firindanlar",
      image: "/images/pogacalar/peynirli-pogaca.jpg",
      popular: true,
    },
    {
      id: 23,
      name: "Peynirli Poğaça",
      description:
        "Peynirli yumuşacık poğaça",
      price: "25₺",
      category: "firindanlar",
      image: "/images/pogacalar/peynirli-pogaca.jpg",
      popular: true,
    },
    {
      id: 231,
      name: "Zeytinli Poğaça",
      description:
        "Nefis zeytin parçacıklı poğaça",
      price: "25₺",
      category: "firindanlar",
      image: "/images/pogacalar/zeytinli-pogaca.jpg",
      popular: true,
    },
    {
      id: 232,
      name: "Patatesli Poğaça",
      description:
        "Patates harçlı yumuşacık poğaça",
      price: "25₺",
      category: "firindanlar",
      image: "/images/pogacalar/peynirli-pogaca.jpg",
      popular: true,
    },
    {
      id: 25,
      name: "Kaşarlı Poğaça",
      description:
        "Kaşar peyniri dolgulu poğaça",
      price: "30₺",
      category: "firindanlar",
      image: "/images/pogacalar/kasarli-pogaca.jpg",
      popular: true,
    },
    {
      id: 251,
      name: "Kars Poğaçası",
      description:
        "Kars kaşarlı özel poğaça",
      price: "30₺",
      category: "firindanlar",
      image: "/images/pogacalar/kars-pogacasi.jpg",
      popular: true,
    },
    {
      id: 252,
      name: "Dereotlu Poğaça",
      description:
        "Dereotlu ve peynirli poğaça",
      price: "30₺",
      category: "firindanlar",
      image: "/images/pogacalar/dereotlu-pogaca.jpg",
      popular: true,
    },
    {
      id: 29,
      name: "Sucuk Kaşarlı Poğaça",
      description: "Sucuk ve kaşar dolgulu zengin poğaça",
      price: "35₺",
      category: "firindanlar",
      image: "/images/pogacalar/sucuk-kasarli-pogaca.jpg",
    },
    {
      id: 30,
      name: "Sade Açma",
      description: "Yumuşacık sade açma",
      price: "30₺",
      category: "firindanlar",
      image: "/images/acmalar/sade-acma.jpg",
    },
    {
      id: 31,
      name: "Zeytinli Açma",
      description: "Zeytin dolgulu yumuşak açma",
      price: "35₺",
      category: "firindanlar",
      image: "/images/acmalar/zeytinli-acma.jpg",
    },
    {
      id: 311,
      name: "Kaşarlı Açma",
      description: "Eriyen kaşar peynirli taze açma",
      price: "35₺",
      category: "firindanlar",
      image: "/images/acmalar/kasarli-acma.jpg",
    },
    {
      id: 312,
      name: "Patatesli Açma",
      description: "Nefis patates harçlı taze açma",
      price: "35₺",
      category: "firindanlar",
      image: "/images/acmalar/patatesli-acma.jpg",
    },
    {
      id: 313,
      name: "Çikolatalı Açma",
      description: "Tatlı çikolata dolgulu yumuşak açma",
      price: "35₺",
      category: "firindanlar",
      image: "/images/acmalar/cikolatali-acma.jpg",
    },
    {
      id: 34,
      name: "Sucuklu Kaşarlı Açma",
      description: "Sucuk ve kaşar dolgulu açma",
      price: "40₺",
      category: "firindanlar",
      image: "/images/acmalar/kasarli-acma.jpg",
    },

    // Sandviçler
    {
      id: 37,
      name: "Sade Sandviç (Sade / Simit)",
      description:
        "Peynir, domates, salatalık ve yeşillik ile taze sandviç çeşitleri",
      price: "100₺",
      category: "sandvic-tost",
      image: "/images/sandvic/sandvic.jpg",
    },
    {
      id: 371,
      name: "Tam Tahıllı Sandviç",
      description:
        "7 tahıllı ve tam buğday ekmeğine taze malzemelerle sağlıklı sandviç",
      price: "100₺",
      category: "sandvic-tost",
      image: "/images/sandvic/tam-tahilli-sandvic.jpg",
    },
    {
      id: 40,
      name: "Burger Sandviç",
      description:
        "Peynir ve yeşillik dolgulu burger şeklinde sandviç",
      price: "90₺",
      category: "sandvic-tost",
      image: "/images/mutfaktan/sade-burger.jpg",
    },

    // Börekler
    {
      id: 42,
      name: "Peynirli Kol Böreği (kg)",
      description: "El açması bol peynirli geleneksel kol böreği",
      price: "600₺",
      category: "borekler",
      image: "/images/borekler/patatesli-kol-boregi.jpg",
    },
    {
      id: 421,
      name: "Patatesli Kol Böreği (kg)",
      description: "El açması lezzetli patatesli kol böreği",
      price: "600₺",
      category: "borekler",
      image: "/images/borekler/patatesli-kol-boregi.jpg",
    },
    {
      id: 43,
      name: "Kol Böreği (Kıymalı) (kg)",
      description: "Kıyma dolgulu kol böreği",
      price: "720₺",
      category: "borekler",
      image: "/images/borekler/kiymali-kol-boregi.jpg",
    },
    {
      id: 4512,
      name: "Avcı Böreği (Patlıcanlı)",
      description: "Özel patlıcan harçlı çıtır avcı böreği",
      price: "75₺",
      category: "borekler",
      image: "/images/borekler/patlicanli-avci-boregi.jpg",
    },
    {
      id: 451,
      name: "Avcı Böreği (Sosis Kaşarlı)",
      description: "Sosis ve kaşar dolgulu çıtır avcı böreği",
      price: "75₺",
      category: "borekler",
      image: "/images/borekler/sos-kasarli-avci-boregi.jpg",
    },
    {
      id: 4511,
      name: "Avcı Böreği (Patatesli)",
      description: "Patates dolgulu çıtır avcı böreği",
      price: "75₺",
      category: "borekler",
      image: "/images/borekler/peynirli-avci-boregi.jpg",
    },
    {
      id: 441,
      name: "Peynirli Gül Böreği",
      description: "Peynir dolgulu gül şeklinde sarılmış özel börek",
      price: "56₺",
      category: "borekler",
      image: "/images/borekler/gul-boregi.jpg",
    },
    {
      id: 48,
      name: "Adana Böreği (kg)",
      description: "Adana usulü bol peynirli özel börek",
      price: "600₺",
      category: "borekler",
      image: "/images/borekler/adana-boregi.jpg",
    },
    {
      id: 481,
      name: "Su Böreği (kg)",
      description: "El açması bol peynirli geleneksel su böreği",
      price: "600₺",
      category: "borekler",
      image: "/images/borekler/su-boregi.jpg",
    },
    {
      id: 9,
      name: "Gözleme Menü (Kaşarlı / Peynirli / Patatesli)",
      description:
        "Gözleme, patates kızartması, salata, zeytin ve çay ile servis edilir",
      price: "230₺",
      category: "borekler",
      image: "/images/borekler/gozleme-menu.jpg",
    },

    // Tatlılar
    {
      id: 53,
      name: "Portakallı Kurabiye",
      description: "Portakal aromalı yumuşak kurabiye",
      price: "60₺",
      category: "tatlilar",
      image: "/images/tatlilar/portakalli-kurabiye.jpg",
    },
    {
      id: 54,
      name: "Ay Çöreği",
      description: "Geleneksel ay çöreği",
      price: "70₺",
      category: "tatlilar",
      image: "/images/tatlilar/ay-coregi.jpg",
    },
    {
      id: 561,
      name: "Mini Ekler (Lotus)",
      description: "Lotus aromalı nefis mini ekler",
      price: "45₺",
      category: "tatlilar",
      image: "/images/tatlilar/lotuslu-ekler.jpg",
    },
    {
      id: 562,
      name: "Mini Ekler (Muz)",
      description: "Muz aromalı taze mini ekler",
      price: "45₺",
      category: "tatlilar",
      image: "/images/tatlilar/lotuslu-ekler.jpg",
    },
    {
      id: 563,
      name: "Mini Ekler (Çikolata)",
      description: "Sütlü çikolatalı mini ekler",
      price: "40₺",
      category: "tatlilar",
      image: "/images/tatlilar/cikolatali-mini-ekler.jpg",
    },
    {
      id: 564,
      name: "Mini Ekler (Beyaz Çikolata)",
      description: "Beyaz çikolatalı mini ekler",
      price: "40₺",
      category: "tatlilar",
      image: "/images/tatlilar/beyaz-cikolatali-ekler.jpg",
    },
    {
      id: 565,
      name: "Mini Ekler (Frambuaz)",
      description: "Frambuaz aromalı taze mini ekler",
      price: "40₺",
      category: "tatlilar",
      image: "/images/tatlilar/frambuazli-ekler.jpg",
    },
    {
      id: 57,
      name: "Kruvasan",
      description: "Katmanlı taze kruvasan",
      price: "90₺",
      category: "tatlilar",
      image: "/images/tatlilar/kruvasan.jpg",
    },
    {
      id: 59,
      name: "Dilim Pasta Çeşitleri",
      description: "Günlük taze pasta dilimleri",
      price: "160₺",
      category: "tatlilar",
      image: "/images/tatlilar/dilim-pastalar.jpg",
    },
    {
      id: 593,
      name: "Vanilyalı Alman Pastası",
      description: "Klasik pudra şekerli nefis Alman pastası",
      price: "80₺",
      category: "tatlilar",
      image: "/images/tatlilar/vanilyali-alman-pastasi.jpg",
    },
    {
      id: 591,
      name: "Çikolatalı Alman Pastası",
      description: "Özel kremalı ve çikolata kaplı taze Alman pastası",
      price: "80₺",
      category: "tatlilar",
      image: "/images/tatlilar/cikolatali-alman-pastasi.jpg",
    },
    {
      id: 592,
      name: "Frambuazlı Alman Pastası",
      description: "Taze frambuaz taneleri ve kreması ile Alman pastası",
      price: "80₺",
      category: "tatlilar",
      image: "/images/tatlilar/frambuazli-alman-pastasi.jpg",
    },
    {
      id: 60,
      name: "İzmir Bombası",
      description: "İzmir usulü özel akışkan çikolatalı tatlı",
      price: "70₺",
      category: "tatlilar",
      image: "/images/tatlilar/izmir-bombasi.jpg",
    },
    {
      id: 594,
      name: "Limonlu Cheesecake",
      description: "Altı bisküvi tabanlı, üstü limon soslu nefis cheesecake",
      price: "160₺",
      category: "tatlilar",
      image: "/images/tatlilar/cheesekek.jpg",
    },
    {
      id: 595,
      name: "Elmalı Turta",
      description: "Kafes desenli, elmalı ve tarçınlı klasik turta",
      price: "85₺",
      category: "tatlilar",
      image: "/images/tatlilar/elmali-turta.jpg",
    },
    {
      id: 596,
      name: "Cup Cake",
      description: "Rengarenk süslemeli, lezzetli cup cake çeşitleri",
      price: "160₺",
      category: "tatlilar",
      image: "/images/tatlilar/cup-cake.jpg",
    },

    // Mutfaktan
    {
      id: 68,
      name: "Hamburger Menü",
      description: "Hamburger, patates kızartması ve içecek ile servis edilir",
      price: "320₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/hamburger-menu.jpg",
    },
    {
      id: 681,
      name: "Pizza Menü",
      description: "Pizza, patates kızartması ve içecek ile servis edilir",
      price: "270₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/pizza-menu.jpg",
    },
    {
      id: 61,
      name: "Cips Tabağı",
      description: "Çıtır çıtır taze patates kızartması",
      price: "100₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/patates-kizartmasi.jpg",
    },

    // İçecekler
    {
      id: 74,
      name: "Çay",
      description: "Demli çay",
      price: "30₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/cay.jpeg",
      popular: true,
    },
    {
      id: 75,
      name: "Fincan Çay",
      description: "Fincan çay",
      price: "40₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/fincancay.webp",
    },
    {
      id: 91,
      name: "Bitki Çayları",
      description: "Çeşitli bitki çayları",
      price: "80₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/bitki-caylari.jpg",
    },
    {
      id: 76,
      name: "Türk Kahvesi",
      description: "Geleneksel Türk kahvesi",
      price: "80₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/turk-kahvesi.jpg",
    },
    {
      id: 77,
      name: "Americano",
      description: "Sıcak demlenmiş espresso ve su",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/americano.jpg",
    },
    {
      id: 78,
      name: "Latte",
      description: "Espresso ve kadifemsi sıcak süt",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/americano.jpg",
    },
    {
      id: 782,
      name: "Cappuccino",
      description: "Yoğun espresso ve bol sıcak süt köpüğü",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/americano.jpg",
    },
    {
      id: 781,
      name: "Karamel Macchiato",
      description: "Süt köpüğü, espresso ve nefis karamel sosu",
      price: "M: 145₺ / L: 160₺",
      category: "icecekler",
      image: "/images/soguk-kahveler/karamel-machiato.jpg",
    },
    {
      id: 79,
      name: "Mocha",
      description: "Çikolata şurubu, espresso ve süt",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/americano.jpg",
    },
    {
      id: 81,
      name: "Espresso",
      description: "Yoğun ve zengin aromalı sade kahve",
      price: "85₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/espresso.jpg",
    },
    {
      id: 83,
      name: "Sıcak Çikolata",
      description: "Sıcak ve tatlı çikolata keyfi",
      price: "120₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/sicak-cikolata.jpg",
    },
    {
      id: 1121,
      name: "Ice Americano",
      description: "Espresso ve buzlu soğuk suyun ferahlatıcı buluşması",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/soguk-kahveler/ice-americano.jpg",
    },
    {
      id: 113,
      name: "Ice Latte",
      description: "Buzlu espresso ve soğuk süt ile hazırlanan klasik lezzet",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/soguk-kahveler/ice-latte.jpg",
    },
    {
      id: 1131,
      name: "Ice Macchiato",
      description: "Buzlu espresso ve süt köpüklü macchiato",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/soguk-kahveler/ice-latte.jpg",
    },
    {
      id: 114,
      name: "Ice Mocha",
      description: "Espresso, çikolata ve soğuk sütün buzlu uyumu",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/soguk-kahveler/ice-latte.jpg",
    },
    {
      id: 95,
      name: "Su",
      description: "Doğal kaynak suyu",
      price: "20₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/su.webp",
    },
    {
      id: 104,
      name: "Ayran",
      description: "Soğuk ayran",
      price: "25₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/ayran.jpg",
      popular: true,
    },
    {
      id: 101,
      name: "Kola / Fanta",
      description: "Soğuk meşrubat çeşitleri",
      price: "85₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/kola.webp",
    },
    {
      id: 107,
      name: "Gazoz",
      description: "Soğuk ve ferahlatıcı gazoz",
      price: "55₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/gazoz.webp",
    },
    {
      id: 106,
      name: "Meyveli Soda",
      description: "Meyve aromalı soda",
      price: "35₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/meyvelisoda.jpg",
    },
    {
      id: 96,
      name: "Meyveli Süt",
      description: "Çilekli, muzlu veya çikolatalı nefis meyveli süt çeşitleri",
      price: "25₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/meyveli-sut.png",
    },
    {
      id: 105,
      name: "Sade Soda",
      description: "Sade maden suyu",
      price: "30₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/sadesoda.webp",
    },
    {
      id: 108,
      name: "Limonata",
      description: "Taze sıkılmış limonata",
      price: "90₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/limonata.jpg",
    },
    {
      id: 1081,
      name: "Çilekli Milkshake",
      description: "Taze çilek püresi, soğuk süt ve vanilyalı dondurma ile hazırlanan milkshake",
      price: "150₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/cilekli-milkshake.jpg",
    },
    {
      id: 1082,
      name: "Çikolatalı Milkshake",
      description: "Çikolatalı dondurma ile hazırlanan milkshake",
      price: "150₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/milkshake.jpg",
    },
    {
      id: 1083,
      name: "Taze Sıkılmış Portakal Suyu",
      description: "Günlük taze sıkılmış C vitamini deposu",
      price: "120₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/portakal-suyu.jpg",
    },
    {
      id: 1084,
      name: "Bubble Tea Çeşitleri",
      description: "Çilek, karamel, mango, yaban mersini ve yeşil elma aromalı; yumuşak boba topları ile",
      price: "150₺",
      category: "icecekler",
      image: "/images/bubbletea/cilek.png",
    },
    {
      id: 110,
      name: "Churchill",
      description: "Churchill gazoz",
      price: "70₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/churchill.webp",
    },
    {
      id: 100,
      name: "Juss Tea",
      description: "Buzlu çay",
      price: "75₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/soguk-cay.webp",
    },
    
    // Aperatifler
    {
      id: 70,
      name: "Simit Sosu",
      description: "Özel simit sosu",
      price: "20₺",
      category: "aperatifler",
      image: "/images/aperatifler/simit-sosu.webp",
    },
    {
      id: 72,
      name: "Zeytin Çeşitleri",
      description: "Çeşitli zeytinler",
      price: "20₺",
      category: "aperatifler",
      image: "/images/aperatifler/zeytin-cesitleri.webp",
    },
    {
      id: 701,
      name: "Piknik Çikolata",
      description: "Piknik çikolata",
      price: "15₺",
      category: "aperatifler",
      image: "/images/aperatifler/piknik-cikolata.webp",
    },
    {
      id: 702,
      name: "Sütaş Peynir Çeşitleri",
      description: "Sütaş peynir",
      price: "12,5₺",
      category: "aperatifler",
      image: "/images/aperatifler/sutas-peynir.jpeg",
    },
    {
      id: 703,
      name: "Tadelle Gofret",
      description: "Tadelle gofret",
      price: "25₺",
      category: "aperatifler",
      image: "/images/aperatifler/tadelle-gofret.png",
    },
    {
      id: 69,
      name: "Sarelle Cam Mini",
      description: "Sarelle cam mini",
      price: "55₺",
      category: "aperatifler",
      image: "/images/aperatifler/sarelle-cam-mini.webp",
    },
  ];

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

  return (
    <>
      <Head>
        <title>Menü - Simit Teknesi Nazilli</title>
        <meta
          name="description"
          content="Simit Teknesi Nazilli menümüzde simit, açma, poğaça, kahve, çay, tatlı ve daha fazlası. Lezzetli seçeneklerimizi keşfedin."
        />
      </Head>

      <div className="pt-24 bg-parchment-light min-h-screen animate-page-in motion-reduce:animate-none">
        {/* Page Header & Search */}
        <section className="py-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="font-label-lg text-label-lg text-baked-gold uppercase tracking-[0.3em] mb-4 inline-block">
              SEÇKİN LEZZETLERİMİZ
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-charcoal-deep mb-6">
              Menümüz
            </h1>
            <div className="h-px w-24 bg-baked-gold mx-auto mb-10 origin-center" />
            
            {/* Search Box */}
            <div className="mb-12 max-w-md mx-auto">
              <div className="relative">
                <label htmlFor="menu-search" className="sr-only">
                  Menüde ara
                </label>
                <input
                  id="menu-search"
                  type="search"
                  placeholder="Menüde ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3.5 pl-14 bg-white border border-slate-muted focus:border-baked-gold focus:ring-1 focus:ring-baked-gold rounded-full font-body-md text-charcoal-deep transition-all duration-300 ease-out outline-hidden shadow-xs focus:scale-[1.01]"
                />
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-baked-gold" aria-hidden="true">
                  <svg
                    className="w-5 h-5 text-baked-gold/80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2.5 rounded-full font-label-lg text-label-lg transition-all duration-300 ease-out active:scale-98 ${
                    activeCategory === category.id
                      ? "bg-baked-gold text-white shadow-md shadow-baked-gold/10"
                      : "bg-white border border-slate-muted/60 text-charcoal-deep hover:bg-white hover:border-baked-gold hover:text-baked-gold"
                  }`}
                >
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items Grid */}
        <section className="py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeCategory}
                className="space-y-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                {filteredItems.length === 0 && (
                  <div className="text-center py-16">
                    <p className="font-headline-md text-title-lg text-charcoal-deep font-bold mb-2">
                      Sonuç bulunamadı
                    </p>
                    <p className="font-body-md text-sm text-on-surface-variant mb-6">
                      {searchQuery.trim()
                        ? `"${searchQuery.trim()}" ile eşleşen bir ürün bulunamadı.`
                        : "Bu kategoride henüz ürün bulunmuyor."}
                    </p>
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="px-6 py-2.5 rounded-full font-label-lg text-label-lg bg-white border border-slate-muted/60 text-charcoal-deep hover:border-baked-gold hover:text-baked-gold transition-all duration-300"
                      >
                        Aramayı Temizle
                      </button>
                    )}
                  </div>
                )}
                {Object.entries(getGroupedItems()).map(([catId, items]) => {
                  const categoryName = categories.find((c) => c.id === catId)?.name || "";
                  return (
                    <div key={catId} className="space-y-6">
                      {activeCategory === "tümü" && (
                        <div className="flex items-center gap-4">
                          <h2 className="font-display-lg text-xl md:text-2xl text-charcoal-deep font-bold tracking-wide">
                            {categoryName}
                          </h2>
                          <div className="h-px bg-baked-gold/20 grow" />
                        </div>
                      )}

                      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {items.map((item) => (
                          <div
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
                            className="group relative bg-white border border-slate-muted/40 rounded-2xl overflow-hidden hover:shadow-xl hover:border-baked-gold/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                          >
                            <div className="h-44 md:h-56 overflow-hidden relative bg-gray-50">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                ref={imageFallbackRef}
                                onError={handleImageError}
                                loading="lazy"
                                decoding="async"
                              />
                              <button
                                type="button"
                                className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-baked-gold"
                                aria-label={
                                  item.id === BUBBLE_TEA_ITEM_ID
                                    ? "Bubble Tea çeşitlerini göster"
                                    : `${item.name} görselini büyüt`
                                }
                                onClick={() => {
                                  if (item.id === BUBBLE_TEA_ITEM_ID) {
                                    handleBubbleTeaClick();
                                  } else {
                                    handleImageClick(item.image, item.name);
                                  }
                                }}
                              >
                                <span className="material-symbols-outlined text-white text-3xl" aria-hidden="true">
                                  zoom_in
                                </span>
                              </button>
                            </div>

                            <div className="p-4 md:p-6 flex flex-col grow">
                              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-3 mb-3">
                                <h3 className="font-headline-md text-base md:text-title-lg text-charcoal-deep font-bold">
                                  {item.name}
                                </h3>
                                {/* Boyutlu fiyatlar ("M: 135₺ / L: 150₺") dar ekranda satır kırabilsin diye parçalanıyor */}
                                <span className="font-display-lg text-base md:text-title-lg text-baked-gold md:text-right">
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
                              <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-9999 bg-black/90 flex items-center justify-center p-4"
            onClick={closeImageModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="image-modal-title"
            ref={modalRef}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                ref={modalCloseButtonRef}
                onClick={closeImageModal}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 z-10"
                aria-label="Kapat"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image */}
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
                onError={handleImageError}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />

              {/* Image Title */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-4 bg-charcoal-deep/90 text-white px-6 py-3 rounded-lg backdrop-blur-xs shadow-lg border border-white/10"
              >
                <h3 id="image-modal-title" className="text-base font-semibold text-center tracking-wide">
                  {selectedImage.alt}
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bubble Tea Modal */}
      <AnimatePresence>
        {showBubbleTeaModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-9999 bg-black/90 flex items-center justify-center p-4"
            onClick={closeBubbleTeaModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="bubble-tea-modal-title"
            ref={modalRef}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-6xl max-h-[90vh] bg-parchment-light rounded-2xl overflow-hidden flex flex-col border border-slate-muted"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                ref={modalCloseButtonRef}
                onClick={closeBubbleTeaModal}
                className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 z-10 border border-slate-muted/40"
                aria-label="Kapat"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Header */}
              <div className="bg-charcoal-deep text-white p-8 text-center relative border-b border-baked-gold/20">
                <h2 id="bubble-tea-modal-title" className="font-display-lg text-headline-lg mb-2">Bubble Tea Çeşitleri</h2>
                <p className="font-body-lg text-ember uppercase tracking-widest text-sm font-semibold">Özel Serinletici Tariflerimiz</p>
              </div>

              {/* Content (Scrollable) */}
              <div className="p-8 overflow-y-auto grow max-h-[60vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Çilek Bubble Tea */}
                  <div className="bg-white border border-slate-muted/50 rounded-xl p-4 shadow-xs group hover:border-baked-gold transition-colors duration-300">
                    <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                      <img
                        src="/images/bubbletea/cilek.png"
                        alt="Çilek Bubble Tea"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className="font-headline-md text-lg font-bold text-charcoal-deep mb-2 text-center">Çilek</h3>
                    <p className="font-body-md text-sm text-on-surface-variant text-center">Çilek aromalı bubble tea, içinde yumuşak boba topları ile</p>
                  </div>

                  {/* Karamel Bubble Tea */}
                  <div className="bg-white border border-slate-muted/50 rounded-xl p-4 shadow-xs group hover:border-baked-gold transition-colors duration-300">
                    <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                      <img
                        src="/images/bubbletea/karamel.png"
                        alt="Karamel Bubble Tea"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className="font-headline-md text-lg font-bold text-charcoal-deep mb-2 text-center">Karamel</h3>
                    <p className="font-body-md text-sm text-on-surface-variant text-center">Karamel aromalı bubble tea, içinde yumuşak boba topları ile</p>
                  </div>

                  {/* Mango Bubble Tea */}
                  <div className="bg-white border border-slate-muted/50 rounded-xl p-4 shadow-xs group hover:border-baked-gold transition-colors duration-300">
                    <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                      <img
                        src="/images/bubbletea/mango.png"
                        alt="Mango Bubble Tea"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className="font-headline-md text-lg font-bold text-charcoal-deep mb-2 text-center">Mango</h3>
                    <p className="font-body-md text-sm text-on-surface-variant text-center">Mango aromalı bubble tea, içinde yumuşak boba topları ile</p>
                  </div>

                  {/* Yaban Mersini Bubble Tea */}
                  <div className="bg-white border border-slate-muted/50 rounded-xl p-4 shadow-xs group hover:border-baked-gold transition-colors duration-300">
                    <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                      <img
                        src="/images/bubbletea/yaban-mersini.png"
                        alt="Yaban Mersini Bubble Tea"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className="font-headline-md text-lg font-bold text-charcoal-deep mb-2 text-center">Yaban Mersini</h3>
                    <p className="font-body-md text-sm text-on-surface-variant text-center">Yaban mersini aromalı bubble tea, içinde yumuşak boba topları ile</p>
                  </div>

                  {/* Yeşil Elma Bubble Tea */}
                  <div className="bg-white border border-slate-muted/50 rounded-xl p-4 shadow-xs group hover:border-baked-gold transition-colors duration-300">
                    <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                      <img
                        src="/images/bubbletea/yesil-elma.png"
                        alt="Yeşil Elma Bubble Tea"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className="font-headline-md text-lg font-bold text-charcoal-deep mb-2 text-center">Yeşil Elma</h3>
                    <p className="font-body-md text-sm text-on-surface-variant text-center">Yeşil elma aromalı bubble tea, içinde yumuşak boba topları ile</p>
                  </div>
                </div>

                {/* Price and Info */}
                <div className="mt-8 text-center bg-white border border-slate-muted/55 rounded-xl p-6 shadow-xs">
                  <div className="font-display-lg text-headline-lg text-baked-gold mb-2">150₺</div>
                  <p className="font-body-md text-charcoal-deep">Tüm bubble tea çeşitleri aynı fiyatla sunulmaktadır</p>
                  <p className="font-label-sm text-[12px] text-on-surface-variant mt-2 uppercase tracking-wider">İçinde yumuşak boba topları ile servis edilir</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default MenuPage;
