import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import React, { useState } from "react";

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
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (image: string, name: string) => {
    setSelectedImage({ src: image, alt: name });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
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
      id: "tostlar",
      name: "Tostlar",
      icon: "🥪",
    },
    {
      id: "simitler",
      name: "Simitler",
      icon: "🥯",
    },
    {
      id: "pogacalar",
      name: "Poğaçalar",
      icon: "🥐",
    },
    {
      id: "acmalar",
      name: "Açmalar",
      icon: "🥖",
    },
    {
      id: "sandvic",
      name: "Sandviç",
      icon: "🥙",
    },
    {
      id: "borekler",
      name: "Börekler",
      icon: "🥧",
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
      id: "sicak-icecekler",
      name: "Sıcak İçecekler",
      icon: "☕",
    },
    {
      id: "soguk-icecekler",
      name: "Soğuk İçecekler",
      icon: "🥤",
    },
  ];

  const menuItems: MenuItem[] = [
    // Kahvaltılar
    {
      id: 1,
      name: "Kahvaltı Tabağı",
      description: "Omlet, 3 çeşit peynir, salam, patates kızartması, bal, tereyağ, reçel, domates, salatalık, simit ve 1 bardak çay ile zengin kahvaltı deneyimi",
      price: "--₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/kahvalti-tabagi-3-83e4.jpg",
    },
    {
      id: 2,
      name: "Alaçatı Kahvaltı",
      description: "Omlet, 3 çeşit peynir, salam, pastırma, patates kızartması, zeytin, bal, tereyağ, reçel, domates, salatalık, simit ve çay ile özel kahvaltı",
      price: "--₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/alacati.jpg",
    },
    {
      id: 3,
      name: "Simit Kahvaltı Tabağı",
      description: "1 adet simit, peynir, zeytin, reçel, söğüş ve yeşillik tabağı, 1 adet çay ile hafif ve lezzetli kahvaltı",
      price: "--₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/simitTabagi.jpg",
    },
    {
      id: 4,
      name: "Kruvasan Kahvaltı Tabağı",
      description: "Taze kruvasan, peynir çeşitleri, reçel, bal, tereyağ ve çay ile Fransız tarzı kahvaltı keyfi",
      price: "--₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/kruvasan-kahvalti.jpg",
    },
    {
      id: 5,
      name: "Menemen",
      description: "Domates, biber ve yumurta ile hazırlanmış geleneksel Türk menemeni, taze ekmek ile servis edilir",
      price: "--₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/menemen.jpg",
    },
    {
      id: 6,
      name: "Sahanda Yumurta",
      description: "Tereyağında pişirilmiş taze yumurta, tuz ve karabiber ile klasik kahvaltı lezzeti",
      price: "--₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/sahanda-yumurta.webp",
    },
    {
      id: 7,
      name: "Sucuklu Yumurta",
      description: "Sucuk ile pişirilmiş yumurta, baharatlı ve lezzetli kahvaltı seçeneği",
      price: "--₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/sucukluyumurta2.webp",
    },
    {
      id: 8,
      name: "Omlet",
      description: "Peynir ve sebzelerle hazırlanmış yumuşacık omlet, kahvaltıların vazgeçilmezi",
      price: "--₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/omlet2.webp",
    },
    {
      id: 9,
      name: "Peynirli Gözleme",
      description: "El açması gözleme, peynir dolgusu, patates kızartması, domates, salatalık, yeşillik, zeytin ve çay ile servis",
      price: "--₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/peynirigozleme.webp",
    },
    {
      id: 10,
      name: "Patatesli Gözleme",
      description: "Patates dolgulu gözleme, patates kızartması, domates, salatalık, yeşillik, zeytin ve çay ile servis",
      price: "--₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/patatesligozleme.webp",
    },

    // Tostlar
    {
      id: 11,
      name: "Kaşarlı Tost",
      description: "Kaşar peyniri ile hazırlanmış sıcacık ve çıtır tost, klasik lezzet",
      price: "--₺",
      category: "tostlar",
      image: "/images/tostlar/kasarli-tost-dcb9.webp",
    },
    {
      id: 12,
      name: "Sucuklu Tost",
      description: "Sucuk ile hazırlanmış baharatlı ve lezzetli tost seçeneği",
      price: "--₺",
      category: "tostlar",
      image: "/images/tostlar/sucuklutost.jpg",
    },
    {
      id: 13,
      name: "Kaşarlı Sucuklu Tost",
      description: "Kaşar peyniri ve sucuk ile hazırlanmış zengin lezzetli tost",
      price: "--₺",
      category: "tostlar",
      image: "/images/tostlar/kasarlisucuklutost.jpg",
    },

    // Simit & Fırın
    {
      id: 14,
      name: "Sade Simit",
      description: "Geleneksel susamlı lezzetiyle taptaze ve çıtır simit",
      price: "15₺",
      category: "simitler",
      image: "/images/simitler/sade-simit.png",
      popular: true,
    },
    {
      id: 15,
      name: "Tereyağlı Simit",
      description:
        "Tereyağının eşsiz aromasıyla zenginleşen enfes simit lezzeti",
      price: "27₺",
      category: "simitler",
      image: "/images/simitler/sade-simit.png",
      popular: true,
    },
    {
      id: 16,
      name: "Sütlü Simit",
      description:
        "Sütle yoğrulan yumuşacık dokusuyla hafif ve lezzetli bir simit seçeneği",
      price: "18₺",
      category: "simitler",
      image: "/images/simitler/sade-simit.png",
      popular: true,
    },
    {
      id: 17,
      name: "Çikolatalı Simit",
      description:
        "Sütün yumuşaklığı ve çikolatanın tatlılığıyla buluşan özel simit lezzeti",
      price: "22₺",
      category: "simitler",
      image: "/images/simitler/cikolatali-simit.png",
      popular: true,
    },
    {
      id: 18,
      name: "Atom Simit",
      description:
        "Dışı çıtır simit, içi nefis pizza harcıyla dolu enfes bir lezzet bombası",
      price: "25₺",
      category: "simitler",
      image: "/images/simitler/atom.jpg",
      popular: true,
    },

    // Poğaçalar
    {
      id: 19,
      name: "Sade Poğaça",
      description:
        "Yumuşacık hamuru ve sade lezzetiyle her lokmada ev yapımı hissi veren klasik poğaça",
      price: "25₺",
      category: "pogacalar",
      image: "/images/pogacalar/sade-pogaca2.jpg",
      popular: true,
    },
    {
      id: 20,
      name: "Peynirli Poğaça",
      description:
        "İçindeki bol beyaz peynirle her ısırıkta lezzet dolu, yumuşacık poğaça keyfi",
      price: "25₺",
      category: "pogacalar",
      image: "/images/pogacalar/peynirli-pogoca.png",
      popular: true,
    },
    {
      id: 21,
      name: "Zeytinli Poğaça",
      description:
        "Zeytinin enfes aromasıyla harmanlanmış, çay saatlerinin vazgeçilmez lezzeti",
      price: "25₺",
      category: "pogacalar",
      image: "/images/pogacalar/zeytinli-pogoca.png",
      popular: true,
    },
    {
      id: 22,
      name: "Kaşarlı Poğaça",
      description:
        "Kaşar peynirinin erimiş lezzetiyle dolu, sıcacık ve çıtır poğaça",
      price: "28₺",
      category: "pogacalar",
      image: "/images/pogacalar/kasarli-pogoca.png",
      popular: true,
    },
    {
      id: 23,
      name: "Patatesli Poğaça",
      description:
        "Patates püresi ve baharatlarla hazırlanmış, doyurucu ve lezzetli poğaça",
      price: "26₺",
      category: "pogacalar",
      image: "/images/pogacalar/patatesli-pogoca.png",
    },
    {
      id: 24,
      name: "Kars Poğaçası",
      description:
        "Kars yöresinin özel peyniriyle hazırlanmış, geleneksel lezzet poğaçası",
      price: "30₺",
      category: "pogacalar",
      image: "/images/pogacalar/kars-pogocasi.png",
      popular: true,
    },
    {
      id: 25,
      name: "Ev Poğaçası",
      description:
        "Ev yapımı tarifle hazırlanmış, annelerimizin elinden çıkmış gibi lezzetli poğaça",
      price: "24₺",
      category: "pogacalar",
      image: "/images/pogacalar/evpogacasi.jpg",
    },

    // Açmalar
    {
      id: 26,
      name: "Sade Açma",
      description: "Yumuşacık hamuru ve sade lezzetiyle klasik açma deneyimi",
      price: "--₺",
      category: "acmalar",
      image: "/images/acmalar/sade-acma.png",
    },
    {
      id: 27,
      name: "Zeytinli Açma",
      description: "Zeytin dolgusu ile hazırlanmış lezzetli ve aromatik açma",
      price: "--₺",
      category: "acmalar",
      image: "/images/acmalar/zeytinli-acma.png",
    },
    {
      id: 28,
      name: "Kaşarlı Açma",
      description: "Kaşar peyniri ile hazırlanmış sıcacık ve lezzetli açma",
      price: "--₺",
      category: "acmalar",
      image: "/images/acmalar/sade-acma.png",
    },
    {
      id: 29,
      name: "Patatesli Açma",
      description: "Patates püresi dolgusu ile hazırlanmış doyurucu açma",
      price: "--₺",
      category: "acmalar",
      image: "/images/acmalar/patatesli-acma.png",
    },
    {
      id: 30,
      name: "Sucuklu Kaşarlı",
      description: "Sucuk ve kaşar peyniri ile hazırlanmış baharatlı açma",
      price: "--₺",
      category: "acmalar",
      image: "/images/acmalar/sade-acma.png",
    },
    {
      id: 31,
      name: "Çikolatalı Açma",
      description: "Çikolata dolgusu ile hazırlanmış tatlı açma seçeneği",
      price: "--₺",
      category: "acmalar",
      image: "/images/acmalar/cikolatali-acma.png",
    },
    {
      id: 32,
      name: "Haşhaşlı Açma",
      description: "Haşhaş dolgusu ile hazırlanmış geleneksel lezzet açması",
      price: "--₺",
      category: "acmalar",
      image: "/images/acmalar/hashasli-acma.png",
    },
    {
      id: 33,
      name: "Mini Tahinli",
      description: "Tahin dolgusu ile hazırlanmış küçük boy lezzetli açma",
      price: "--₺",
      category: "acmalar",
      image: "/images/acmalar/tahinli-corek.webp",
    },

    // Sandviçler
    {
      id: 34,
      name: "Sandviç",
      description: "Peynir, domates, salatalık ve yeşillik ile hazırlanmış klasik sandviç",
      price: "--₺",
      category: "sandvic",
      image: "/images/sandvic/sandvic.webp",
    },
    {
      id: 35,
      name: "7 Tahıllı Sandviç",
      description: "7 farklı tahıl ile hazırlanmış sağlıklı ve besleyici sandviç",
      price: "--₺",
      category: "sandvic",
      image: "/images/sandvic/tambugday.jpeg",
    },
    {
      id: 36,
      name: "Tam Buğday Sandviç",
      description: "Tam buğday ekmeği ile hazırlanmış sağlıklı sandviç seçeneği",
      price: "--₺",
      category: "sandvic",
      image: "/images/sandvic/tambugdaysandvic.jpeg",
    },
    {
      id: 37,
      name: "Burger Sandviç",
      description: "Et köftesi, peynir, domates, salatalık ve özel sos ile burger sandviç",
      price: "--₺",
      category: "sandvic",
      image: "/images/sandvic/burgersandvic.jpg",
    },

    // Börekler
    {
      id: 38,
      name: "Kol Böreği",
      description: "El açması yufka ile hazırlanmış geleneksel kol böreği",
      price: "--₺",
      category: "borekler",
      image: "/images/borekler/kolboregi.jpg",
    },
    {
      id: 39,
      name: "Kıymalı Kol Böreği",
      description: "Kıyma dolgusu ile hazırlanmış lezzetli kol böreği",
      price: "--₺",
      category: "borekler",
      image: "/images/borekler/kolboregi.jpg",
    },
    {
      id: 40,
      name: "Gül Böreği",
      description: "Gül şeklinde sarılmış özel börek çeşidi",
      price: "--₺",
      category: "borekler",
      image: "/images/borekler/gulboregi.jpg",
    },
    {
      id: 41,
      name: "Avcı Böreği",
      description: "Avcı tarzında hazırlanmış özel börek çeşidi",
      price: "--₺",
      category: "borekler",
      image: "/images/borekler/avci.jpg",
    },
    {
      id: 42,
      name: "1 Porsiyon Su Böreği",
      description: "Su böreği tek porsiyon olarak servis edilir",
      price: "--₺",
      category: "borekler",
      image: "/images/borekler/suboregi.jpg",
    },
    {
      id: 43,
      name: "Kalem Böreği",
      description: "Kalem şeklinde sarılmış özel börek çeşidi",
      price: "--₺",
      category: "borekler",
      image: "/images/borekler/kalem-boregi.png",
    },

    // Tatlılar
    {
      id: 44,
      name: "Portakallı Kurabiye",
      description: "Portakal aroması ile hazırlanmış yumuşacık kurabiye",
      price: "--₺",
      category: "tatlilar",
      image: "/images/tatlılar/portakalli-kurabiye.png",
    },
    {
      id: 45,
      name: "Ay Çöreği",
      description: "Ay şeklinde hazırlanmış geleneksel çörek çeşidi",
      price: "--₺",
      category: "tatlilar",
      image: "/images/tatlılar/aycorek.jpg",
    },
    {
      id: 46,
      name: "Elmalı Tart",
      description: "Elma dolgusu ile hazırlanmış lezzetli tart",
      price: "--₺",
      category: "tatlilar",
      image: "/images/tatlılar/elmali-turta.png",
    },
    {
      id: 47,
      name: "Mini Ekler",
      description: "Küçük boy ekler pasta, krema dolgusu ile",
      price: "--₺",
      category: "tatlilar",
      image: "/images/tatlılar/ekler.jpg",
    },
    {
      id: 48,
      name: "Kruvasan",
      description: "Fransız tarzı katmanlı kruvasan, sade veya çikolatalı",
      price: "--₺",
      category: "tatlilar",
      image: "/images/tatlılar/kruvasan.webp",
    },
    {
      id: 49,
      name: "Alman Pastası",
      description: "Alman tarzında hazırlanmış özel pasta çeşidi",
      price: "--₺",
      category: "tatlilar",
      image: "/images/tatlılar/alman-pastasi.jpg",
    },
    {
      id: 50,
      name: "Dilim Pasta",
      description: "Çeşitli tatlar seçeneği ile dilim pasta",
      price: "--₺",
      category: "tatlilar",
      image: "/images/tatlılar/dilimpastaa.png",
    },
    {
      id: 51,
      name: "İzmir Bombası",
      description: "İzmir yöresine özgü özel tatlı çeşidi",
      price: "--₺",
      category: "tatlilar",
      image: "/images/tatlılar/izmirbomba.jpg",
    },

    // Mutfaktan
    {
      id: 52,
      name: "Patates Cips",
      description: "Taze patates ile hazırlanmış çıtır çıtır cips",
      price: "--₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/cipes.webp",
    },
    {
      id: 53,
      name: "Karışık Cips Tabağı",
      description: "Patates, nugget, soğan halkası ile karışık cips tabağı",
      price: "--₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/karisikcips.jpeg",
    },

    // Sıcak İçecekler
    {
      id: 54,
      name: "Çay",
      description: "Rize yöresinden özenle seçilmiş çay yaprakları",
      price: "--₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/cay.jpeg",
    },
    {
      id: 55,
      name: "Fincan Çay",
      description: "Fincan içinde servis edilen özel çay",
      price: "--₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/fincancay.webp",
    },
    {
      id: 56,
      name: "Türk Kahvesi",
      description: "Geleneksel yöntemle pişirilmiş Türk kahvesi",
      price: "--₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/turkkahvesi.webp",
    },
    {
      id: 57,
      name: "Americano",
      description: "Sıcak su ile inceltilmiş espresso kahve",
      price: "--₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/americano.jpeg",
    },
    {
      id: 58,
      name: "Latte",
      description: "Espresso ve buharlanmış süt ile hazırlanmış latte",
      price: "--₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/latte.jpeg",
    },
    {
      id: 59,
      name: "Cappuccino",
      description: "Espresso, buharlanmış süt ve süt köpüğü ile cappuccino",
      price: "--₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/cappuccino.jpeg",
    },

    // Soğuk İçecekler
    {
      id: 60,
      name: "Su 500ml",
      description: "500ml doğal kaynak suyu",
      price: "--₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/su.webp",
    },
    {
      id: 61,
      name: "Meyve Suyu 200ml",
      description: "200ml taze meyve suyu, çeşitli tatlar mevcut",
      price: "--₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/meyvesuyu200.jpg",
    },
    {
      id: 62,
      name: "Meyve Suyu 330ml",
      description: "330ml taze meyve suyu, çeşitli tatlar mevcut",
      price: "--₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/meyvesuyu.jpg",
    },
    {
      id: 63,
      name: "Cola 330ml",
      description: "330ml soğuk cola içeceği",
      price: "--₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/kola.jpg",
    },
    {
      id: 64,
      name: "Fanta 330ml",
      description: "330ml soğuk fanta içeceği",
      price: "--₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/fanta.webp",
    },
    {
      id: 65,
      name: "Sprite 330ml",
      description: "330ml soğuk sprite içeceği",
      price: "--₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/sprite.png",
    },
    {
      id: 66,
      name: "Ayran 200ml",
      description: "200ml geleneksel Türk ayranı",
      price: "--₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/ayran.jpg",
    },
    {
      id: 67,
      name: "Sade Soda",
      description: "Sade maden suyu",
      price: "--₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/sadesoda.webp",
    },
    {
      id: 68,
      name: "Meyveli Soda",
      description: "Meyve aromalı maden suyu",
      price: "--₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/meyvelisoda.jpg",
    },
    {
      id: 69,
      name: "Red Bull",
      description: "Enerji içeceği",
      price: "--₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/redbull.jpeg",
    },
    {
      id: 70,
      name: "Limonata",
      description: "Taze sıkılmış limon ile hazırlanmış limonata",
      price: "--₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/limonata.jpeg",
    },
  ];

  const filteredItems =
    activeCategory === "tümü"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

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
        {/* Header */}
        <section className="bg-gradient-to-br from-red-500 via-red-600 to-red-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Lezzetli Menümüz
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Günlük taze üretim simit, açma, poğaça çeşitlerimiz ve özel
                kahve karışımlarımızı keşfedin
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Category Filter */}
        <section className="bg-white py-8 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  ease: "easeInOut"
                }}
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
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
                        whileHover={{
                          scale: 1.03,
                          transition: { duration: 0.3, ease: "easeOut" },
                        }}
                        onClick={() => handleImageClick(item.image, item.name)}
                      />
                      <div 
                        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center cursor-pointer"
                        onClick={() => handleImageClick(item.image, item.name)}
                      >
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
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
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 z-10"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />

              {/* Image Title */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-4 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold">{selectedImage.alt}</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuPage; 