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
      name: "Börekler ve Gözlemeler",
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
      id: "aperatifler",
      name: "Aperatifler",
      icon: "🍫",
    },
    {
      id: "sicak-icecekler",
      name: "Sıcak İçecekler",
      icon: "☕",
    },
    {
      id: "soguk-kahveler",
      name: "Soğuk Kahveler",
      icon: "🧊",
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
      description:
        "Omlet, 3 çeşit peynir, salam, bal, tereyağ, reçel, domates, salatalık, simit ve 1 bardak çay ile zengin kahvaltı deneyimi",
      price: "300₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/kahvalti-tabagi-3-83e4.jpg",
    },
    {
      id: 2,
      name: "Alaçatı Kahvaltı",
      description:
        "Omlet, 3 çeşit peynir, salam, pastırma, patates kızartması, zeytin, bal, tereyağ, reçel, domates, salatalık, simit ve çay ile özel kahvaltı",
      price: "350₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/alacati.jpg",
    },
    {
      id: 3,
      name: "Simit Kahvaltı Tabağı",
      description:
        "1 adet simit, peynir, zeytin, reçel, söğüş ve yeşillik tabağı, 1 adet çay ile hafif ve lezzetli kahvaltı",
      price: "180₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/simitTabagi.jpg",
    },
    {
      id: 4,
      name: "Kruvasan Kahvaltı Tabağı",
      description:
        "Taze kruvasan, peynir çeşitleri, reçel, bal, tereyağ ve çay ile Fransız tarzı kahvaltı keyfi",
      price: "300₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/kruvasan-kahvalti.jpg",
    },
    {
      id: 5,
      name: "Menemen",
      description:
        "Domates, biber ve yumurta ile hazırlanmış geleneksel Türk menemeni, taze ekmek ile servis edilir",
      price: "190₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/menemen.jpg",
    },
    {
      id: 6,
      name: "Sahanda Yumurta",
      description:
        "Tereyağında pişirilmiş taze yumurta, tuz ve karabiber ile klasik kahvaltı lezzeti",
      price: "120₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/sahanda-yumurta.webp",
    },
    {
      id: 7,
      name: "Sucuklu Yumurta",
      description:
        "Sucuk ile pişirilmiş yumurta, baharatlı ve lezzetli kahvaltı seçeneği",
      price: "150₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/sucukluyumurta2.webp",
    },
    {
      id: 8,
      name: "Omlet",
      description:
        "Peynir ve sebzelerle hazırlanmış yumuşacık omlet, kahvaltıların vazgeçilmezi",
      price: "150₺",
      category: "kahvaltilar",
      image: "/images/kahvaltılar/omlet2.webp",
    },
    {
      id: 9,
      name: "Gözleme Menü (Kaşarlı / Peynirli / Patatesli)",
      description:
        "El açması gözleme (kaşarlı, peynirli veya patatesli seçenekleriyle), patates kızartması, domates, salatalık, yeşillik, zeytin ve çay ile servis edilir.",
      price: "200₺",
      category: "borekler",
      image: "/images/kahvaltılar/peynirigozleme.webp",
    },

    // Tostlar
    {
      id: 11,
      name: "Kaşarlı Tost",
      description:
        "Kaşar peyniri ile hazırlanmış sıcacık ve çıtır tost, klasik lezzet",
      price: "165₺",
      category: "tostlar",
      image: "/images/tostlar/kasarli-tost-dcb9.webp",
    },
    {
      id: 12,
      name: "Sucuklu Tost",
      description: "Sucuk ile hazırlanmış baharatlı ve lezzetli tost seçeneği",
      price: "165₺",
      category: "tostlar",
      image: "/images/tostlar/sucuklutost.jpg",
    },
    {
      id: 13,
      name: "Kaşarlı Sucuklu Tost",
      description:
        "Kaşar peyniri ve sucuk ile hazırlanmış zengin lezzetli tost",
      price: "180₺",
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
      price: "27₺",
      category: "simitler",
      image: "/images/simitler/sade-simit.png",
      popular: true,
    },
    {
      id: 17,
      name: "Çikolatalı Simit",
      description:
        "Sütün yumuşaklığı ve çikolatanın tatlılığıyla buluşan özel simit lezzeti",
      price: "30₺",
      category: "simitler",
      image: "/images/simitler/cikolatali-simit.png",
      popular: true,
    },
    {
      id: 18,
      name: "Atom Simit",
      description:
        "Dışı çıtır simit, içi nefis pizza harcıyla dolu enfes bir lezzet bombası",
      price: "70₺",
      category: "simitler",
      image: "/images/simitler/atom-simit.jpeg",
      popular: true,
    },
    {
      id: 19,
      name: "Sade Kaşarlı Simit",
      description: "Kaşar peyniri ile hazırlanmış lezzetli simit",
      price: "45₺",
      category: "simitler",
      image: "/images/simitler/sade-simit.png",
    },
    {
      id: 20,
      name: "Ankara Tereyağlısı",
      description: "Ankara tarzında hazırlanmış tereyağlı simit",
      price: "30₺",
      category: "simitler",
      image: "/images/simitler/sade-simit.png",
    },
    {
      id: 21,
      name: "Sucuklu Simit",
      description: "Sucuk ile hazırlanmış baharatlı simit",
      price: "50₺",
      category: "simitler",
      image: "/images/simitler/sade-simit.png",
    },

    // Poğaçalar
    {
      id: 22,
      name: "Sade Poğaça",
      description:
        "Yumuşacık hamuru ve sade lezzetiyle her lokmada ev yapımı hissi veren klasik poğaça",
      price: "20₺",
      category: "pogacalar",
      image: "/images/pogacalar/sade-pogaca2.jpg",
      popular: true,
    },
    {
      id: 23,
      name: "Peynirli Poğaça",
      description:
        "İçindeki bol beyaz peynirle her ısırıkta lezzet dolu, yumuşacık poğaça keyfi",
      price: "22.5₺",
      category: "pogacalar",
      image: "/images/pogacalar/peynirli-pogoca.png",
      popular: true,
    },
    {
      id: 24,
      name: "Zeytinli Poğaça",
      description:
        "Zeytinin enfes aromasıyla harmanlanmış, çay saatlerinin vazgeçilmez lezzeti",
      price: "22.5₺",
      category: "pogacalar",
      image: "/images/pogacalar/zeytinli-pogoca.png",
      popular: true,
    },
    {
      id: 25,
      name: "Kaşarlı Poğaça",
      description:
        "Kaşar peynirinin erimiş lezzetiyle dolu, sıcacık ve çıtır poğaça",
      price: "25₺",
      category: "pogacalar",
      image: "/images/pogacalar/kasarli-pogoca.png",
      popular: true,
    },
    {
      id: 26,
      name: "Patatesli Poğaça",
      description:
        "Patates püresi ve baharatlarla hazırlanmış, doyurucu ve lezzetli poğaça",
      price: "22.5₺",
      category: "pogacalar",
      image: "/images/pogacalar/patatesli-pogoca.png",
    },
    {
      id: 27,
      name: "Kars Poğaçası",
      description:
        "Kars yöresinin özel peyniriyle hazırlanmış, geleneksel lezzet poğaçası",
      price: "25₺",
      category: "pogacalar",
      image: "/images/pogacalar/kars-pogocasi.png",
      popular: true,
    },
    {
      id: 28,
      name: "Dereotlu Poğaça",
      description:
        "Ev yapımı tarifle hazırlanmış, annelerimizin elinden çıkmış gibi lezzetli poğaça",
      price: "25₺",
      category: "pogacalar",
      image: "/images/pogacalar/dereotlu-pogaca.jpg",
    },
    {
      id: 29,
      name: "Sucuk Kaşarlı Poğaça",
      description: "Sucuk ve kaşar peyniri ile hazırlanmış lezzetli poğaça",
      price: "30₺",
      category: "pogacalar",
      image: "/images/pogacalar/sucuklu-kasarli-pogaca.jpeg",
    },

    // Açmalar
    {
      id: 30,
      name: "Sade Açma",
      description: "Yumuşacık hamuru ve sade lezzetiyle klasik açma deneyimi",
      price: "22₺",
      category: "acmalar",
      image: "/images/acmalar/sade-acma.png",
    },
    {
      id: 31,
      name: "Zeytinli Açma",
      description: "Zeytin dolgusu ile hazırlanmış lezzetli ve aromatik açma",
      price: "25₺",
      category: "acmalar",
      image: "/images/acmalar/zeytinli-acma.png",
    },
    {
      id: 32,
      name: "Kaşarlı Açma",
      description: "Kaşar peyniri ile hazırlanmış sıcacık ve lezzetli açma",
      price: "25₺",
      category: "acmalar",
      image: "/images/acmalar/kasarli-acma.jpeg",
    },
    {
      id: 33,
      name: "Patatesli Açma",
      description: "Patates püresi dolgusu ile hazırlanmış doyurucu açma",
      price: "25₺",
      category: "acmalar",
      image: "/images/acmalar/patatesli-acma.png",
    },
    {
      id: 34,
      name: "Sucuklu Kaşarlı",
      description: "Sucuk ve kaşar peyniri ile hazırlanmış baharatlı açma",
      price: "30₺",
      category: "acmalar",
      image: "/images/acmalar/sucuklu-kasarli.jpeg",
    },
    {
      id: 35,
      name: "Çikolatalı Açma",
      description: "Çikolata dolgusu ile hazırlanmış tatlı açma seçeneği",
      price: "25₺",
      category: "acmalar",
      image: "/images/acmalar/cikolatali-acma.png",
    },
    {
      id: 36,
      name: "Mini Tahinli",
      description: "Tahin dolgusu ile hazırlanmış küçük boy lezzetli açma",
      price: "60₺",
      category: "acmalar",
      image: "/images/acmalar/tahinli-corek.webp",
    },

    // Sandviçler
    {
      id: 37,
      name: "Sandviç",
      description:
        "Peynir, domates, salatalık ve yeşillik ile hazırlanmış klasik sandviç",
      price: "80₺",
      category: "sandvic",
      image: "/images/sandvic/sade.jpeg",
    },
    {
      id: 38,
      name: "7 Tahıllı Sandviç",
      description:
        "7 farklı tahıl ile hazırlanmış sağlıklı ve besleyici sandviç",
      price: "80₺",
      category: "sandvic",
      image: "/images/sandvic/7-tahilli.jpeg",
    },
    {
      id: 39,
      name: "Tam Buğday Sandviç",
      description:
        "Tam buğday ekmeği ile hazırlanmış sağlıklı sandviç seçeneği",
      price: "80₺",
      category: "sandvic",
      image: "/images/sandvic/tambugday.jpeg",
    },
    {
      id: 40,
      name: "Burger Sandviç",
      description:
        "Et köftesi, peynir, domates, salatalık ve özel sos ile burger sandviç",
      price: "60₺",
      category: "sandvic",
      image: "/images/sandvic/burger.jpeg",
    },
    {
      id: 41,
      name: "Simit Sandviç",
      description: "Simit ile hazırlanmış özel sandviç",
      price: "80₺",
      category: "sandvic",
      image: "/images/sandvic/simit-sandvic.png",
    },

    // Börekler
    {
      id: 42,
      name: "Kol Böreği (Peynirli, Patatesli) (kg)",
      description: "El açması yufka ile hazırlanmış geleneksel kol böreği",
      price: "440₺",
      category: "borekler",
      image: "/images/borekler/kolboregi.jpg",
    },
    {
      id: 43,
      name: "Kıymalı Kol Böreği (kg)",
      description: "Kıyma dolgusu ile hazırlanmış lezzetli kol böreği",
      price: "460₺",
      category: "borekler",
      image: "/images/borekler/kolboregi.jpg",
    },
    {
      id: 44,
      name: "Gül Böreği (Patatesli, Peynirli, Ispanaklı)",
      description: "Gül şeklinde sarılmış özel börek çeşidi",
      price: "60₺",
      category: "borekler",
      image: "/images/borekler/gul-boregi.jpg",
    },
    {
      id: 45,
      name: "Avcı Böreği (Sosis Kaşarlı / Patatesli / Patlıcanlı)",
      description:
        "Avcı tarzında hazırlanmış börek (sosis kaşarlı, patatesli veya patlıcanlı seçenekleriyle), çıtır yufka ve özel baharatlarla servis edilir.",
      price: "50₺",
      category: "borekler",
      image: "/images/borekler/avci.jpg",
    },
    {
      id: 47,
      name: "Su Böreği (kg)",
      description: "Su böreği tek porsiyon olarak servis edilir",
      price: "1500",
      category: "borekler",
      image: "/images/borekler/suboregi.jpg",
    },
    {
      id: 48,
      name: "Adana Böreği (kg)",
      description: "Adana yöresine özgü özel börek çeşidi",
      price: "500₺",
      category: "borekler",
      image: "/images/borekler/adana-boregi.webp",
    },
    {
      id: 49,
      name: "Kaşarlı Gözleme",
      description: "El açması gözleme, kaşar peyniri dolgusu ile",
      price: "130₺",
      category: "borekler",
      image: "/images/borekler/gozleme.jpg",
    },
    {
      id: 50,
      name: "Gözleme (Patatesli / Peynirli)",
      description: "El açması gözleme, patates ya da peynir dolgusu ile",
      price: "100₺",
      category: "borekler",
      image: "/images/borekler/gozleme.jpg",
    },
  
    {
      id: 52,
      name: "Talaş Böreği",
      description: "Geleneksel talaş böreği, özel hamur tekniği ile hazırlanmış",
      price: "60₺",
      category: "borekler",
      image: "/images/borekler/talas-boregi.jpg",
    },

    // Tatlılar
    {
      id: 53,
      name: "Portakallı Kurabiye",
      description: "Portakal aroması ile hazırlanmış yumuşacık kurabiye",
      price: "50₺",
      category: "tatlilar",
      image: "/images/tatlılar/portakalli-kurabiye.png",
    },
    {
      id: 54,
      name: "Ay Çöreği",
      description: "Ay şeklinde hazırlanmış geleneksel çörek çeşidi",
      price: "60₺",
      category: "tatlilar",
      image: "/images/tatlılar/aycorek.jpg",
    },
    {
      id: 55,
      name: "Elmalı Turta",
      description: "Elma dolgusu ile hazırlanmış lezzetli tart",
      price: "50₺",
      category: "tatlilar",
      image: "/images/tatlılar/elmali-turta.png",
    },
    {
      id: 56,
      name: "Mini Ekler",
      description: "Küçük boy ekler pasta, krema dolgusu ile",
      price: "35₺",
      category: "tatlilar",
      image: "/images/tatlılar/ekler.jpg",
    },
    {
      id: 57,
      name: "Kruvasan",
      description: "Fransız tarzı katmanlı kruvasan, sade veya çikolatalı",
      price: "80₺",
      category: "tatlilar",
      image: "/images/tatlılar/kruvasan.webp",
    },
    {
      id: 58,
      name: "Alman Pastası",
      description: "Alman tarzında hazırlanmış özel pasta çeşidi",
      price: "80₺",
      category: "tatlilar",
      image: "/images/tatlılar/alman-pastasi.jpg",
    },
    {
      id: 59,
      name: "Dilim Pasta Çeşitleri",
      description: "Çeşitli tatlar seçeneği ile dilim pasta",
      price: "140₺",
      category: "tatlilar",
      image: "/images/tatlılar/dilimpasta.jpeg",
    },
    {
      id: 60,
      name: "İzmir Bombası",
      description: "İzmir yöresine özgü özel tatlı çeşidi",
      price: "50₺",
      category: "tatlilar",
      image: "/images/tatlılar/izmirbomba.jpg",
    },

    // Mutfaktan
    {
      id: 68,
      name: "Hamburger Menü",
      description: "Hamburger, patates ve istediğiniz içecek ile servis edilir.",
      price: "230₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/hamburger-menu.jpeg",
    },
    {
      id: 61,
      name: "Patates Cips",
      description: "Taze patates ile hazırlanmış çıtır çıtır cips",
      price: "75₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/cipes.webp",
    },
    {
      id: 62,
      name: "Karışık Cips Tabağı",
      description: "Patates, nugget, soğan halkası ile karışık cips tabağı",
      price: "150₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/karisikcips.jpeg",
    },
    {
      id: 63,
      name: "Nugget",
      description: "Çıtır çıtır tavuk nugget",
      price: "100₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/nugget.jpg",
    },
    {
      id: 64,
      name: "Soğan Halkası",
      description: "Çıtır çıtır soğan halkası",
      price: "70₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/sogan-halkasi.webp",
    },
    {
      id: 65,
      name: "Peynir Tabağı",
      description: "Çeşitli peynirlerden oluşan özel tabak",
      price: "150₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/peynir-tabagi.jpg",
    },
    {
      id: 66,
      name: "Zeytin Tabağı",
      description: "Çeşitli zeytinlerden oluşan özel tabak",
      price: "150₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/zeytin-tabagi.webp",
    },
    {
      id: 67,
      name: "Söğüş Tabağı",
      description: "Domates, salatalık ve yeşillikten oluşan taze tabak",
      price: "100₺",
      category: "mutfaktan",
      image: "/images/mutfaktan/sogus-tabagi.webp",
    },

    // Aperatifler
    {
      id: 68,
      name: "Piknik Çikolata",
      description: "Lezzetli piknik çikolatası",
      price: "15₺",
      category: "aperatifler",
      image: "/images/aperatifler/piknik-cikolata.webp",
    },
    {
      id: 69,
      name: "Sarelle Cam Mini",
      description: "Sarelle cam mini çikolata",
      price: "45₺",
      category: "aperatifler",
      image: "/images/aperatifler/sarelle-cam-mini.webp",
    },
    {
      id: 70,
      name: "Simit Sosu",
      description: "Simit için özel sos",
      price: "15₺",
      category: "aperatifler",
      image: "/images/aperatifler/simit-sosu.webp",
    },
    {
      id: 71,
      name: "Sütaş Peynir Çeşitleri",
      description: "Sütaş peynir çeşitleri",
      price: "12.5₺",
      category: "aperatifler",
      image: "/images/aperatifler/sutas-peynir.jpeg",
    },
    {
      id: 72,
      name: "Zeytin Çeşitleri",
      description: "Çeşitli zeytin seçenekleri",
      price: "15₺",
      category: "aperatifler",
      image: "/images/aperatifler/zeytin-cesitleri.webp",
    },
    {
      id: 73,
      name: "Tadelle Gofret",
      description: "Tadelle gofret çikolata",
      price: "25₺",
      category: "aperatifler",
      image: "/images/aperatifler/tadelle-gofret.png",
    },

    // Sıcak İçecekler
    {
      id: 74,
      name: "Çay",
      description: "Rize yöresinden özenle seçilmiş çay yaprakları",
      price: "20₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/cay.jpeg",
    },
    {
      id: 75,
      name: "Fincan Çay",
      description: "Fincan içinde servis edilen özel çay",
      price: "30₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/fincancay.webp",
    },
    {
      id: 76,
      name: "Türk Kahvesi",
      description: "Geleneksel yöntemle pişirilmiş Türk kahvesi",
      price: "80₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/turkkahvesi.webp",
    },
    {
      id: 77,
      name: "Americano",
      description: "Sıcak su ile inceltilmiş espresso kahve",
      price: "100₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/americano.jpeg",
    },
    {
      id: 78,
      name: "Latte",
      description: "Espresso ve buharlanmış süt ile hazırlanmış latte",
      price: "120₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/latte.jpeg",
    },
    {
      id: 79,
      name: "Mocha",
      description: "Espresso, sıcak süt ve çikolata ile hazırlanmış lezzetli içecek",
      price: "150₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/mocha.jpg",
    },
    {
      id: 80,
      name: "Cappuccino",
      description: "Espresso, buharlanmış süt ve süt köpüğü ile hazırlanmış İtalyan tarzı kahve",
      price: "120₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/cappuccino.jpeg",
    },
    {
      id: 81,
      name: "Espresso",
      description: "Yoğun ve aromalı tek shot espresso",
      price: "85₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/espresso.jpg",
    },
    {
      id: 82,
      name: "Macchiato",
      description: "Espresso üzerine az miktarda süt köpüğü eklenmiş kahve",
      price: "120₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/macchiato.jpg",
    },
    {
      id: 83,
      name: "Sıcak Çikolata",
      description: "Sıcak süt ve çikolata ile hazırlanmış tatlı içecek",
      price: "120₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/sicak-cikolata.jpg",
    },
    {
      id: 84,
      name: "Yeşil Çay",
      description: "Sağlıklı ve ferahlatıcı yeşil çay",
      price: "50₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/yesil-cay.jpg",
    },
    {
      id: 85,
      name: "Sıcak Süt",
      description: "Sıcak ve doğal süt",
      price: "50₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/sicak-sut.jpeg",
    },
    {
      id: 86,
      name: "Nescafe",
      description: "Anında çözünen kahve",
      price: "85₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/nescafe.webp",
    },
    {
      id: 87,
      name: "Sütlü Nescafe",
      description: "Süt ile hazırlanmış nescafe",
      price: "100₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/sutlu-nescafe.jpeg",
    },
    {
      id: 88,
      name: "Nane Limon",
      description: "Nane ve limon ile hazırlanmış ferahlatıcı çay",
      price: "50₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/nane-limon.webp",
    },
    {
      id: 89,
      name: "Ihlamur",
      description: "Doğal ıhlamur çiçeği çayı",
      price: "50₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/ihlamur.jpg",
    },
    {
      id: 90,
      name: "Adaçayı",
      description: "Şifalı adaçayı çayı",
      price: "50₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/adacayi.jpg",
    },
    {
      id: 91,
      name: "Bitki Çayları",
      description: "Çeşitli bitki çayları seçeneği",
      price: "70₺",
      category: "sicak-icecekler",
      image: "/images/sicak-icecekler/bitki-caylari.jpg",
    },

    // Soğuk İçecekler
    {
      id: 92,
      name: "Bubble Tea Çeşitleri",
      description: "Çilek, Karamel, Mango, Yaban Mersini, Yeşil Elma aromalı bubble tea çeşitleri. İçinde yumuşak boba topları ile servis edilir.",
      price: "120₺",
      category: "soguk-icecekler",
      image: "/images/bubbletea/cilek.png",
    },
    {
      id: 93,
      name: "Cool Lime",
      description: "Ferahlatıcı lime aromalı soğuk içecek",
      price: "120₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/cool-lime.webp",
    },
    {
      id: 94,
      name: "Cool Berry",
      description: "Karışık meyve aromalı soğuk içecek",
      price: "120₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/cool-berry.jpg",
    },
    {
      id: 95,
      name: "Su 500ml",
      description: "500ml doğal kaynak suyu",
      price: "15₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/su.webp",
    },
    {
      id: 96,
      name: "Meyve Suyu 200ml",
      description: "200ml taze meyve suyu, çeşitli tatlar mevcut",
      price: "20₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/meyvesuyu200.jpg",
    },
    {
      id: 97,
      name: "Caprisun",
      description: "Capri-Sun, meyve suyu lezzetini pratik ve eğlenceli ambalajında sunan ferahlatıcı bir içecektir.",
      price: "30₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/caprisun.jpg",
    },
    {
      id: 98,
      name: "Süt",
      description: "Taze ve doğal süt",
      price: "20₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/süt.webp",
    },
    {
      id: 99,
      name: "Meyveli Süt",
      description: "Meyve aromalı süt",
      price: "20₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/meyveli-sut.png",
    },
    {
      id: 100,
      name: "Juss Tea",
      description: "Ferahlatıcı çay aromalı içecek",
      price: "60₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/soguk-cay.webp",
    },
    {
      id: 101,
      name: "Cola 330ml",
      description: "330ml soğuk cola içeceği",
      price: "60₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/kola.webp",
    },
    {
      id: 102,
      name: "Fanta 330ml",
      description: "330ml soğuk fanta içeceği",
      price: "60₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/fanta.jpg",
    },
    {
      id: 103,
      name: "Link",
      description: "330ml soğuk link içeceği",
      price: "20₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/link.webp",
    },
    {
      id: 104,
      name: "Ayran 175ml",
      description: "175ml geleneksel Türk ayranı",
      price: "20₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/ayran.jpg",
    },
    {
      id: 105,
      name: "Sade Soda",
      description: "Sade maden suyu",
      price: "25₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/sadesoda.webp",
    },
    {
      id: 106,
      name: "Meyveli Soda",
      description: "Meyve aromalı maden suyu",
      price: "30₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/meyvelisoda.jpg",
    },
    {
      id: 107,
      name: "Red Bull",
      description: "Enerji içeceği",
      price: "75₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/redbull.jpeg",
    },
    {
      id: 108,
      name: "Limonata",
      description: "Taze sıkılmış limon ile hazırlanmış limonata",
      price: "80₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/limonata.jpg",
    },
    {
      id: 109,
      name: " Kuşadası, Nazilli Gazoz",
      description: "Geleneksel Türk gazozu",
      price: "50₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/gazoz.webp",
    },
    {
      id: 110,
      name: "Churchill",
      description: "Churchill içeceği",
      price: "75₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/churchill.webp",
    },
    {
      id: 111,
      name: "Beypazarı Coala",
      description: "Doğal maden suyu ve cola lezzetinin birleşimiyle ferahlatıcı içecek.",
      price: "30₺",
      category: "soguk-icecekler",
      image: "/images/soguk-icecekler/coala.png",
    },

    // Soğuk Kahveler
    {
      id: 112,
      name: "Ice Americano",
      description: "Soğuk americano kahve",
      price: "100₺",
      category: "soguk-kahveler",
      image: "/images/soguk-kahveler/ice-americano.jpg",
    },
    {
      id: 113,
      name: "Ice Latte",
      description: "Soğuk latte kahve",
      price: "120₺",
      category: "soguk-kahveler",
      image: "/images/soguk-kahveler/ice-latte.webp",
    },
    {
      id: 114,
      name: "Ice Mocha",
      description: "Soğuk mocha kahve",
      price: "150₺",
      category: "soguk-kahveler",
      image: "/images/soguk-kahveler/ice-mocha.webp",
    },
    {
      id: 115,
      name: "Ice Chocolate",
      description: "Soğuk çikolata",
      price: "120₺",
      category: "soguk-kahveler",
      image: "/images/soguk-kahveler/ice-chocolate.webp",
    },
    {
      id: 116,
      name: "Ice Cappuccino",
      description: "Soğuk cappuccino kahve",
      price: "120₺",
      category: "soguk-kahveler",
      image: "/images/soguk-kahveler/ice-cappuccino.png",
    },
    {
      id: 117,
      name: "Ice Macchiato",
      description: "Soğuk macchiato kahve",
      price: "120₺",
      category: "soguk-kahveler",
      image: "/images/soguk-kahveler/ice-macchiato.png",
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
