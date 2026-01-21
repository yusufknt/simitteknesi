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
      setActiveCategory('mutfaktan');
      setTimeout(() => {
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
      setActiveCategory('soguk-icecekler');
      setTimeout(() => {
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
      name: "Aperatifler",
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
      price: "150₺",
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
      price: "35₺",
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
    {
      id: 36,
      name: "Mini Tahinli Çörek",
      description: "Tahin dolgulu küçük boy çörek",
      price: "85₺",
      category: "firindanlar",
      image: "/images/acmalar/tahinli-corek.webp",
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
      price: "80₺",
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
      name: "Hamburger / Pizza Menü",
      description: "Hamburger veya pizza, patates ve içecek ile servis edilir",
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
    {
      id: 621,
      name: "Karışık Sıcak Tabağı",
      description: "Patates, nugget ve soğan halkası karışımı",
      price: "190₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/karisikcips.jpeg",
    },
    {
      id: 631,
      name: "Nugget",
      description: "Çıtır tavuk nugget",
      price: "120₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/nugget.jpg",
    },
    {
      id: 64,
      name: "Soğan Halkası",
      description: "Çıtır soğan halkası",
      price: "75₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/sogan-halkasi.webp",
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
      price: "100₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/americano.jpeg",
    },
    {
      id: 78,
      name: "Latte / Cappuccino / Macchiato",
      description: "Sütlü espresso kahve çeşitleri",
      price: "120₺",
      category: "icecekler",
      image: "/images/sicak-icecekler/latte.jpeg",
    },
    {
      id: 79,
      name: "Mocha",
      description: "Çikolatalı espresso kahve",
      price: "150₺",
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
      price: "100₺",
      category: "icecekler",
      image: "/images/soguk-kahveler/ice-americano.jpg",
    },
    {
      id: 113,
      name: "Ice Latte / Ice Macchiato / Ice Chocolate",
      description: "Buzlu espresso içecekleri",
      price: "120₺",
      category: "icecekler",
      image: "/images/soguk-kahveler/ice-latte.webp",
    },
    {
      id: 114,
      name: "Ice Mocha",
      description: "Buzlu çikolatalı kahve",
      price: "150₺",
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
      price: "75₺",
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

  return (
    <>
      <Head>
        <title>Menü - Simit Teknesi Nazilli</title>
        <meta
          name="description"
          content="Simit Teknesi Nazilli menümüzde simit, açma, poğaça, kahve, çay, tatlı ve daha fazlası. Lezzetli seçeneklerimizi keşfedin."
        />
      </Head>

      <div className="pt-16">
        {/* Search and Category Filter */}
        <section className="bg-white py-8 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900"
            >
              Menümüz
            </motion.h1>
            
            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mb-6 max-w-md mx-auto"
            >
              <div className="relative">
                <motion.input
                  type="text"
                  placeholder="Menüde ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ease-out"
                  whileFocus={{
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.03,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ease-out flex items-center space-x-2 ${
                    activeCategory === category.id
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    id={item.name === "Hamburger Menü" ? "hamburger-menu" : item.name === "Bubble Tea Çeşitleri" ? "bubble-tea-cesitleri" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.03,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                    className="card overflow-hidden group relative bg-white rounded-lg shadow-md"
                  >
                    {item.popular && (
                      <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popüler
                      </div>
                    )}

                    <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover cursor-pointer"
                        onError={handleImageError}
                        whileHover={{
                          scale: 1.03,
                          transition: { duration: 0.3, ease: "easeOut" },
                        }}
                        onClick={() => 
                          item.name === "Bubble Tea Çeşitleri" 
                            ? handleBubbleTeaClick() 
                            : handleImageClick(item.image, item.name)
                        }
                      />
                      <div
                        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center cursor-pointer"
                        onClick={() => 
                          item.name === "Bubble Tea Çeşitleri" 
                            ? handleBubbleTeaClick() 
                            : handleImageClick(item.image, item.name)
                        }
                      >
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <span className="text-lg font-bold text-red-600">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
            className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeImageModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
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
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />

              {/* Image Title */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-4 bg-black bg-opacity-80 text-white px-6 py-3 rounded-lg backdrop-blur-sm shadow-lg"
              >
                <h3 className="text-lg font-semibold text-center">
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
            className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setShowBubbleTeaModal(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-6xl max-h-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowBubbleTeaModal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 z-10"
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
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 text-center">
                <h2 className="text-4xl font-bold mb-2">Bubble Tea Çeşitleri</h2>
                <p className="text-xl opacity-90">Tüm aromalarımızı keşfedin!</p>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Çilek Bubble Tea */}
                  <div className="text-center group">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src="/images/bubbletea/cilek.png"
                        alt="Çilek Bubble Tea"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Çilek</h3>
                    <p className="text-gray-600 text-sm">Çilek aromalı bubble tea, içinde yumuşak boba topları ile</p>
                  </div>

                  {/* Karamel Bubble Tea */}
                  <div className="text-center group">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src="/images/bubbletea/karamel.png"
                        alt="Karamel Bubble Tea"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Karamel</h3>
                    <p className="text-gray-600 text-sm">Karamel aromalı bubble tea, içinde yumuşak boba topları ile</p>
                  </div>

                  {/* Mango Bubble Tea */}
                  <div className="text-center group">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src="/images/bubbletea/mango.png"
                        alt="Mango Bubble Tea"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mango</h3>
                    <p className="text-gray-600 text-sm">Mango aromalı bubble tea, içinde yumuşak boba topları ile</p>
                  </div>

                  {/* Yaban Mersini Bubble Tea */}
                  <div className="text-center group">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src="/images/bubbletea/yaban-mersini.png"
                        alt="Yaban Mersini Bubble Tea"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Yaban Mersini</h3>
                    <p className="text-gray-600 text-sm">Yaban mersini aromalı bubble tea, içinde yumuşak boba topları ile</p>
                  </div>

                  {/* Yeşil Elma Bubble Tea */}
                  <div className="text-center group">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src="/images/bubbletea/yesil-elma.png"
                        alt="Yeşil Elma Bubble Tea"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Yeşil Elma</h3>
                    <p className="text-gray-600 text-sm">Yeşil elma aromalı bubble tea, içinde yumuşak boba topları ile</p>
                  </div>
                </div>

                {/* Price and Info */}
                <div className="mt-8 text-center bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">120₺</div>
                  <p className="text-gray-600">Tüm bubble tea çeşitleri aynı fiyatla sunulmaktadır</p>
                  <p className="text-sm text-gray-500 mt-2">İçinde yumuşak boba topları ile servis edilir</p>
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
