import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { handleImageError } from "../utils/imageUtils";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  popular?: boolean;
}

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("tümü");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [showBubbleTeaModal, setShowBubbleTeaModal] = useState(false);

  // Hash ile mutfaktan kategorisini ve hamburger menüye scroll
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#hamburger-menu') {
      setTimeout(() => {
        setActiveCategory('mutfaktan');
        const el = document.getElementById('hamburger-menu');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300); // kategori değişimi ve render için kısa gecikme
    }
  }, []);

  // Hash ile bubble tea çeşitlerine scroll
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#bubble-tea-cesitleri') {
      setTimeout(() => {
        setActiveCategory('soguk-icecekler');
        const el = document.getElementById('bubble-tea-cesitleri');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300); // kategori değişimi ve render için kısa gecikme
    }
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeImageModal();
    }
  };

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
      id: "mutfaktan",
      name: "Mutfaktan",
      icon: "🍲",
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
      image: "/images/kahvaltılar/kahvalti-tabagi-3-83e4.jpg",
    },
    {
      id: 3,
      name: "Simit Kahvaltı Tabağı",
      description:
        "Simit, peynir, zeytin, reçel, söğüş, yeşillik ve çay ile hafif kahvaltı",
      price: "200₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/simitTabagi.jpg",
    },
    {
      id: 4,
      name: "Kruvasan Kahvaltı Tabağı",
      description:
        "Taze kruvasan, peynir çeşitleri, reçel, bal, tereyağ ve çay",
      price: "350₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/kruvasan-kahvalti.jpg",
    },
    {
      id: 5,
      name: "Menemen (Sade / Kaşarlı)",
      description:
        "Domates, biber ve yumurta ile hazırlanmış geleneksel menemen",
      price: "180₺ / 200₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/menemen.jpg",
    },
    {
      id: 6,
      name: "Sahanda Yumurta",
      description:
        "Tereyağında pişirilmiş taze yumurta",
      price: "100₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/sahanda-yumurta.webp",
    },
    {
      id: 7,
      name: "Sucuklu Yumurta",
      description:
        "Sucuk ile pişirilmiş baharatlı yumurta",
      price: "250₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/sucukluyumurta2.webp",
    },
    {
      id: 8,
      name: "Omlet",
      description:
        "Peynir ve sebzelerle hazırlanmış yumuşacık omlet",
      price: "120₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/omlet2.webp",
    },

    // Tostlar
    {
      id: 11,
      name: "Tost (Kaşarlı / Sucuklu / Kaşarlı Sucuklu)",
      description:
        "Sıcacık ve çıtır tost çeşitleri",
      price: "185₺ / 220₺ / 250₺",
      category: "sandvic-tost",
      image: "/images/tostlar/kasarli-tost-dcb9.webp",
    },

    // Fırından (Simit, Poğaça, Açma)
    {
      id: 14,
      name: "Sade Simit",
      description: "Taptaze susamlı simit",
      price: "20₺",
      category: "firindanlar",
      image: "/images/simitler/sade-simit.png",
      popular: true,
    },
    {
      id: 15,
      name: "Tereyağlı / Sütlü Simit",
      description:
        "Tereyağı veya süt ile zenginleştirilmiş yumuşak simit",
      price: "30₺",
      category: "firindanlar",
      image: "/images/simitler/sade-simit.png",
      popular: true,
    },
    {
      id: 17,
      name: "Çikolatalı Simit",
      description:
        "Çikolata ile tatlandırılmış özel simit",
      price: "35₺",
      category: "firindanlar",
      image: "/images/simitler/cikolatali-simit.png",
      popular: true,
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
      image: "/images/simitler/sade-simit.png",
    },
    {
      id: 20,
      name: "Ankara Tereyağlısı",
      description: "Ankara usulü tereyağlı simit",
      price: "30₺",
      category: "firindanlar",
      image: "/images/simitler/sade-simit.png",
    },
    {
      id: 21,
      name: "Sucuklu Simit",
      description: "Sucuk dolgulu baharatlı simit",
      price: "60₺",
      category: "firindanlar",
      image: "/images/simitler/sade-simit.png",
    },
    {
      id: 22,
      name: "Sade Poğaça",
      description:
        "Yumuşacık ev yapımı poğaça",
      price: "25₺",
      category: "firindanlar",
      image: "/images/pogacalar/sade-pogaca2.jpg",
      popular: true,
    },
    {
      id: 23,
      name: "Peynirli / Zeytinli / Patatesli Poğaça",
      description:
        "Bol içli yumuşacık poğaça çeşitleri",
      price: "25₺",
      category: "firindanlar",
      image: "/images/pogacalar/peynirli-pogoca.png",
      popular: true,
    },
    {
      id: 25,
      name: "Kaşarlı / Kars / Dereotlu / Labneli Poğaça",
      description:
        "Özel dolgulu poğaça çeşitleri",
      price: "30₺",
      category: "firindanlar",
      image: "/images/pogacalar/kasarli-pogoca.png",
      popular: true,
    },
    {
      id: 29,
      name: "Sucuk Kaşarlı Poğaça",
      description: "Sucuk ve kaşar dolgulu zengin poğaça",
      price: "35₺",
      category: "firindanlar",
      image: "/images/pogacalar/sucuklu-kasarli-pogaca.jpeg",
    },
    {
      id: 30,
      name: "Sade Açma",
      description: "Yumuşacık sade açma",
      price: "30₺",
      category: "firindanlar",
      image: "/images/acmalar/sade-acma.png",
    },
    {
      id: 31,
      name: "Zeytinli / Kaşarlı / Patatesli / Çikolatalı Açma",
      description: "Çeşitli dolgulu taze açmalar",
      price: "35₺",
      category: "firindanlar",
      image: "/images/acmalar/zeytinli-acma.png",
    },
    {
      id: 34,
      name: "Sucuklu Kaşarlı Açma",
      description: "Sucuk ve kaşar dolgulu açma",
      price: "40₺",
      category: "firindanlar",
      image: "/images/acmalar/sucuklu-kasarli.jpeg",
    },


    // Sandviçler
    {
      id: 37,
      name: "Sandviç (Sade / 7 Tahıllı / Tam Buğday / Simit)",
      description:
        "Peynir, domates, salatalık ve yeşillik ile taze sandviç çeşitleri",
      price: "100₺",
      category: "sandvic-tost",
      image: "/images/sandvic/sade.jpeg",
    },
    {
      id: 40,
      name: "Burger Sandviç",
      description:
        "Peynir ve yeşillik dolgulu sandviç",
      price: "90₺",
      category: "sandvic-tost",
      image: "/images/sandvic/burger.jpeg",
    },

    // Börekler
    {
      id: 42,
      name: "Kol Böreği (Peynirli / Patatesli) (kg)",
      description: "El açması geleneksel kol böreği",
      price: "600₺",
      category: "borekler",
      image: "/images/borekler/kolboregi.jpg",
    },
    {
      id: 43,
      name: "Kol Böreği (Kıymalı) (kg)",
      description: "Kıyma dolgulu kol böreği",
      price: "720₺",
      category: "borekler",
      image: "/images/borekler/kolboregi.jpg",
    },
    {
      id: 441,
      name: "Gül Böreği (Patatesli / Peynirli / Ispanaklı)",
      description: "Gül şeklinde sarılmış özel börek çeşitleri",
      price: "56₺",
      category: "borekler",
      image: "/images/borekler/gul-boregi.jpg",
    },
    {
      id: 451,
      name: "Avcı Böreği (Sosis Kaşarlı / Patatesli / Patlıcanlı)",
      description:
        "Çıtır yufkalı avcı böreği çeşitleri",
      price: "75₺",
      category: "borekler",
      image: "/images/borekler/avci.jpg",
    },
    {
      id: 48,
      name: "Adana Böreği (kg)",
      description: "Adana usulü özel börek",
      price: "600₺",
      category: "borekler",
      image: "/images/borekler/adana-boregi.webp",
    },
    {
      id: 49,
      name: "Kaşarlı Gözleme",
      description: "El açması kaşarlı gözleme",
      price: "150₺",
      category: "borekler",
      image: "/images/borekler/gozleme.jpg",
    },
    {
      id: 50,
      name: "Gözleme (Patatesli / Peynirli)",
      description: "El açması gözleme çeşitleri",
      price: "130₺",
      category: "borekler",
      image: "/images/borekler/gozleme.jpg",
    },
    {
      id: 52,
      name: "Talaş Böreği",
      description: "Geleneksel talaş böreği",
      price: "75₺",
      category: "borekler",
      image: "/images/borekler/talas-boregi.jpg",
    },
    {
      id: 9,
      name: "Gözleme Menü (Kaşarlı / Peynirli / Patatesli)",
      description:
        "Gözleme, patates kızartması, salata, zeytin ve çay ile servis edilir",
      price: "230₺",
      category: "borekler",
      image: "/images/kahvaltılar/peynirigozleme.webp",
    },

    // Tatlılar
    {
      id: 600,
      name: "Donut",
      description: "Taze donut",
      price: "80₺",
      category: "tatlilar",
      image: "/images/tatlılar/ekler.jpg",
      popular: true,
    },
    {
      id: 53,
      name: "Portakallı Kurabiye",
      description: "Portakal aromalı yumuşak kurabiye",
      price: "60₺",
      category: "tatlilar",
      image: "/images/tatlılar/portakalli-kurabiye.png",
    },
    {
      id: 54,
      name: "Ay Çöreği",
      description: "Geleneksel ay çöreği",
      price: "70₺",
      category: "tatlilar",
      image: "/images/tatlılar/aycorek.jpg",
    },
    {
      id: 561,
      name: "Mini Ekler (Lotus / Muz)",
      description: "Lotus veya muz aromalı mini ekler",
      price: "45₺",
      category: "tatlilar",
      image: "/images/tatlılar/ekler.jpg",
    },
    {
      id: 563,
      name: "Mini Ekler (Çikolata / Beyaz Çikolata / Frambuaz)",
      description: "Çeşitli aromalı mini ekler",
      price: "40₺",
      category: "tatlilar",
      image: "/images/tatlılar/ekler.jpg",
    },
    {
      id: 57,
      name: "Kruvasan",
      description: "Katmanlı taze kruvasan",
      price: "90₺",
      category: "tatlilar",
      image: "/images/tatlılar/kruvasan.webp",
    },
    {
      id: 59,
      name: "Dilim Pasta Çeşitleri",
      description: "Günlük taze pasta dilimleri",
      price: "160₺",
      category: "tatlilar",
      image: "/images/tatlılar/dilimpasta.jpeg",
    },
    {
      id: 60,
      name: "İzmir Bombası",
      description: "İzmir usulü özel tatlı",
      price: "70₺",
      category: "tatlilar",
      image: "/images/tatlılar/izmirbomba.jpg",
    },

    // Mutfaktan
    {
      id: 68,
      name: "Hamburger Menü",
      description: "Hamburger, patates kızartması ve içecek ile servis edilir",
      price: "320₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/hamburger-menu.jpeg",
    },
    {
      id: 681,
      name: "Pizza Menü",
      description: "Pizza, patates kızartması ve içecek ile servis edilir",
      price: "270₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/hamburger-menu.jpeg",
    },
    {
      id: 61,
      name: "Cips Tabağı",
      description: "Çıtır patates cips",
      price: "100₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/cipes.webp",
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
      image: "/images/sicak-icecekler/turkkahvesi.webp",
    },
    {
      id: 77,
      name: "Americano",
      description: "Sıcak americano",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/americano.jpeg",
    },
    {
      id: 78,
      name: "Latte / Cappuccino / Macchiato",
      description: "Sütlü espresso kahve çeşitleri",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/latte.jpeg",
    },
    {
      id: 79,
      name: "Mocha",
      description: "Çikolatalı espresso kahve",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/mocha.jpg",
    },
    {
      id: 81,
      name: "Espresso",
      description: "Yoğun espresso",
      price: "85₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/espresso.jpg",
    },
    {
      id: 83,
      name: "Sıcak Çikolata",
      description: "Sıcak kakao",
      price: "120₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/sicak-cikolata.jpg",
    },
    {
      id: 112,
      name: "Ice Americano",
      description: "Buzlu americano",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/soguk-kahveler/ice-americano.jpg",
    },
    {
      id: 113,
      name: "Ice Latte / Ice Macchiato / Ice Chocolate",
      description: "Buzlu espresso içecekleri",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/soguk-kahveler/ice-latte.webp",
    },
    {
      id: 114,
      name: "Ice Mocha",
      description: "Buzlu çikolatalı kahve",
      price: "M: 135₺ / L: 150₺",
      category: "icecekler",
      image: "/images/soguk-kahveler/ice-mocha.webp",
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
      name: "Cola / Fanta",
      description: "Soğuk meşrubat",
      price: "85₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/kola.webp",
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
      name: "Meyve Suyu / Süt / Meyveli Süt / Link",
      description: "Soğuk içecekler",
      price: "25₺",
      category: "icecekler",
      image: "/images/soguk-icecekler/meyvesuyu200.jpg",
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
      price: "12.5₺",
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

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "tümü" || item.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
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

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pt-24 bg-parchment-light min-h-screen"
      >
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
                <input
                  type="text"
                  placeholder="Menüde ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3.5 pl-14 bg-white border border-slate-muted focus:border-baked-gold focus:ring-1 focus:ring-baked-gold rounded-full font-body-md text-charcoal-deep transition-all duration-300 ease-out outline-none shadow-sm focus:scale-[1.01]"
                />
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-baked-gold">
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
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="space-y-16"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                {Object.entries(getGroupedItems()).map(([catId, items]) => {
                  const categoryName = categories.find((c) => c.id === catId)?.name || "";
                  return (
                    <div key={catId} className="space-y-6">
                      {activeCategory === "tümü" && (
                        <div className="flex items-center gap-4">
                          <h2 className="font-display-lg text-xl md:text-2xl text-charcoal-deep font-bold tracking-wide">
                            {categoryName}
                          </h2>
                          <div className="h-px bg-baked-gold/20 flex-grow" />
                        </div>
                      )}

                      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {items.map((item, index) => (
                          <div
                            key={item.id}
                            id={item.name === "Hamburger Menü" ? "hamburger-menu" : item.name === "Bubble Tea Çeşitleri" ? "bubble-tea-cesitleri" : undefined}
                            className="group relative bg-white border border-slate-muted/40 rounded-2xl overflow-hidden hover:shadow-xl hover:border-baked-gold/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                          >
                            <div className="h-44 md:h-56 overflow-hidden relative bg-gray-50">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                                onError={handleImageError}
                                onClick={() => 
                                  item.name === "Bubble Tea Çeşitleri" 
                                    ? handleBubbleTeaClick() 
                                    : handleImageClick(item.image, item.name)
                                }
                              />
                              <div
                                className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer"
                                onClick={() => 
                                  item.name === "Bubble Tea Çeşitleri" 
                                    ? handleBubbleTeaClick() 
                                    : handleImageClick(item.image, item.name)
                                }
                              >
                                <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  zoom_in
                                </span>
                              </div>
                            </div>

                            <div className="p-4 md:p-6 flex flex-col flex-grow">
                              <div className="flex justify-between items-start gap-3 mb-3">
                                <h3 className="font-headline-md text-base md:text-title-lg text-charcoal-deep font-bold">
                                  {item.name}
                                </h3>
                                <span className="font-display-lg text-base md:text-title-lg text-baked-gold whitespace-nowrap">
                                  {item.price}
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
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            onClick={closeImageModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
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
                onClick={closeImageModal}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 z-10"
                aria-label="Close modal"
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
                className="mt-4 bg-charcoal-deep/90 text-white px-6 py-3 rounded-lg backdrop-blur-sm shadow-lg border border-white/10"
              >
                <h3 className="text-base font-semibold text-center tracking-wide">
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
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setShowBubbleTeaModal(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
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
                onClick={() => setShowBubbleTeaModal(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 z-10 border border-slate-muted/40"
                aria-label="Close modal"
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
                <h2 className="font-display-lg text-headline-lg mb-2">Bubble Tea Çeşitleri</h2>
                <p className="font-body-lg text-baked-gold uppercase tracking-widest text-sm font-semibold">Özel Serinletici Tariflerimiz</p>
              </div>

              {/* Content (Scrollable) */}
              <div className="p-8 overflow-y-auto flex-grow max-h-[60vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Çilek Bubble Tea */}
                  <div className="bg-white border border-slate-muted/50 rounded-xl p-4 shadow-sm group hover:border-baked-gold transition-colors duration-300">
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
                  <div className="bg-white border border-slate-muted/50 rounded-xl p-4 shadow-sm group hover:border-baked-gold transition-colors duration-300">
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
                  <div className="bg-white border border-slate-muted/50 rounded-xl p-4 shadow-sm group hover:border-baked-gold transition-colors duration-300">
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
                  <div className="bg-white border border-slate-muted/50 rounded-xl p-4 shadow-sm group hover:border-baked-gold transition-colors duration-300">
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
                  <div className="bg-white border border-slate-muted/50 rounded-xl p-4 shadow-sm group hover:border-baked-gold transition-colors duration-300">
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
                <div className="mt-8 text-center bg-white border border-slate-muted/55 rounded-xl p-6 shadow-sm">
                  <div className="font-display-lg text-headline-lg text-baked-gold mb-2">120₺</div>
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
