import Link from "next/link";
import React from "react";
import { MenuItem, menuItems } from "../../data/menu";
import styles from "../../styles/Home.module.css";
import { handleImageError, optimizedSrc, responsiveSrcSet } from "../../utils/imageUtils";

// Tezgâhtaki ürün grupları. Çeşit sayıları menu.ts'ten hesaplanır.
// Fotoğraflar aynı stüdyo setinde geniş çekilmiş; ürün küçük kalmasın diye kadraj
// `focus` noktasına doğru `zoom` kadar yaklaştırılır.
const isFirindan = (item: MenuItem) => item.category === "firindanlar";
const GROUPS: {
  name: string;
  image: string;
  focus: string;
  zoom: number;
  match: (item: MenuItem) => boolean;
}[] = [
  {
    name: "Simitler",
    image: "/images/simitler/tereyagli-simit.jpg",
    focus: "50% 72%",
    zoom: 1.7,
    match: (item) => isFirindan(item) && /simit|tereyağlısı/i.test(item.name),
  },
  {
    name: "Poğaçalar",
    image: "/images/pogacalar/kars-pogacasi.jpg",
    focus: "50% 70%",
    zoom: 2.1,
    match: (item) => isFirindan(item) && /poğaça/i.test(item.name),
  },
  {
    name: "Açmalar",
    image: "/images/acmalar/sade-acma.jpg",
    focus: "50% 70%",
    zoom: 2.1,
    match: (item) => isFirindan(item) && /açma/i.test(item.name),
  },
  {
    name: "Börek & Gözleme",
    image: "/images/borekler/su-boregi.jpg",
    focus: "50% 70%",
    zoom: 2,
    match: (item) => item.category === "borekler",
  },
  {
    name: "Kahvaltılar",
    image: "/images/kahvaltilar/kahvalti-tabagi.jpg",
    focus: "50% 68%",
    zoom: 1.6,
    match: (item) => item.category === "kahvaltilar",
  },
  {
    name: "Tatlılar",
    image: "/images/tatlilar/dilim-pastalar.jpg",
    focus: "58% 74%",
    zoom: 1.7,
    match: (item) => item.category === "tatlilar",
  },
];

const Vitrin: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-(--cizgi)">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg">
          Ne yemek istersiniz?
        </h2>
      </div>

      {/* Mobilde yana kayan şerit, geniş ekranda 3 sütun */}
      <ul
        className={`mt-8 md:mt-10 flex gap-4 overflow-x-auto px-4 pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:max-w-container-max md:mx-auto md:px-margin-desktop ${styles.rail}`}
      >
        {GROUPS.map((group) => {
          const count = menuItems.filter(group.match).length;
          return (
            <li key={group.name} className="shrink-0 w-[68%] sm:w-[45%] md:w-auto">
              <Link
                href="/menu"
                className="group block outline-none focus-visible:ring-2 focus-visible:ring-(--damga) focus-visible:ring-offset-4 rounded-md"
              >
                <div className="aspect-[4/3] rounded-md overflow-hidden bg-(--kagit-2)">
                  <div
                    className="w-full h-full"
                    style={{ transform: `scale(${group.zoom})`, transformOrigin: group.focus }}
                  >
                    <img
                      src={optimizedSrc(group.image, "640")}
                      srcSet={responsiveSrcSet(group.image)}
                      sizes="(min-width: 768px) 33vw, 68vw"
                      data-full-src={group.image}
                      width={640}
                      height={360}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                      onError={handleImageError}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <span className="font-headline-md text-xl group-hover:text-(--damga) transition-colors">
                    {group.name}
                  </span>
                  <span className="font-body-md text-sm text-(--soluk) lining-nums whitespace-nowrap">
                    {count} çeşit
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Vitrin;
