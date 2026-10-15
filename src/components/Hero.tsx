import Link from "next/link";
import React, { useSyncExternalStore } from "react";
import { DIRECTIONS_URL } from "../data/business";
import { MenuItem, menuItems } from "../data/menu";
import styles from "../styles/Home.module.css";
import { handleImageError, optimizedSrc } from "../utils/imageUtils";
import OpenStatus from "./OpenStatus";

// Arkadaki fotoğraf duvarı: her satır bir sütun, ürünler menu.ts'ten (id ile) okunur.
// Mobilde ilk 4 sütun görünür; diğerleri gizli ve lazy olduğu için hiç indirilmez.
const WALL_COLUMNS = [
  [14, 25, 1, 60, 76],
  [15, 251, 68, 57, 30],
  [19, 3, 441, 59, 74],
  [18, 23, 681, 31, 594],
  [21, 252, 481, 563, 83],
  [312, 9, 4, 565, 54],
];
// Sütunların akış süresi (sn): farklı hızlar duvara derinlik verir
const WALL_DURATIONS = [64, 78, 70, 84, 74, 80];

const pickItems = (ids: number[]) =>
  ids
    .map((id) => menuItems.find((item) => item.id === id))
    .filter((item): item is MenuItem => Boolean(item));

// Duvar fotoğrafları sayfa yüklendikten (load) sonra istenir: yavaş bağlantıda başlığın
// fontuyla ve CSS ile bant genişliği için yarışmasınlar. Sunucuda ve hydrate sırasında false.
const subscribeLoad = (onChange: () => void) => {
  window.addEventListener("load", onChange);
  return () => window.removeEventListener("load", onChange);
};
const usePageLoaded = () =>
  useSyncExternalStore(
    subscribeLoad,
    () => document.readyState === "complete",
    () => false
  );

// Açılış ekranı: siyah sahnede eğik, yavaşça akan ürün fotoğrafları; önde logonun sloganı.
// LCP başlık metnidir ve animasyonsuz ilk boyamada görünür. Mobilde karolar başlıktan küçük
// tutulur ki sonradan gelen fotoğraf LCP'yi devralmasın. Hareketler yalnızca CSS ile,
// "hareketi azalt" açıkken hepsi durur.
const Hero: React.FC = () => {
  const wallReady = usePageLoaded();

  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className={styles.wallScroll} aria-hidden="true">
        <div className={styles.wallIntro}>
          <div className={styles.wallTilt} data-ready={wallReady || undefined}>
            {WALL_COLUMNS.map((ids, column) => {
              const items = pickItems(ids);
              return (
                <div
                  key={column}
                  className={`${styles.wallColumn} ${column >= 4 ? "hidden lg:block" : ""}`}
                  style={{ animationDelay: `${0.15 + column * 0.12}s` }}
                >
                  <div
                    className={styles.wallTrack}
                    style={{
                      animationDuration: `${WALL_DURATIONS[column]}s`,
                      animationDirection: column % 2 ? "reverse" : "normal",
                    }}
                  >
                    {/* Kesintisiz akış için liste üç kez çizilir (mobilde bir kopya ekranı doldurmuyor) */}
                    {[...items, ...items, ...items].map((item, index) => (
                      <div key={`${item.id}-${index}`} className={styles.wallTile}>
                        {wallReady && (
                          <img
                            src={optimizedSrc(item.image, "thumb")}
                            srcSet={`${optimizedSrc(item.image, "thumb")} 240w, ${optimizedSrc(item.image, "640")} 640w`}
                            sizes="(min-width: 1024px) 240px, 80px"
                            data-full-src={item.image}
                            width={240}
                            height={240}
                            alt=""
                            className="w-full h-full object-cover"
                            onError={handleImageError}
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Yazının okunması için duvarın üstüne inen karanlık ve hafif film grenı */}
      <div className={styles.veil} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div
        className={`${styles.heroCopy} relative max-w-container-max mx-auto px-4 md:px-margin-desktop min-h-svh flex flex-col justify-end lg:justify-center pt-32 pb-14 md:pb-20 lg:pb-0`}
      >
        {/* Açık/kapalı rozeti sadece tarayıcıda çizilir; yeri önceden ayrılır, sayfa kaymaz */}
        <div className="h-8 mb-6 md:mb-8">
          <OpenStatus className="h-8 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white" />
        </div>

        <h1 className="font-display-lg font-bold text-[60px] leading-[0.95] md:text-[112px] lg:text-[136px] tracking-[-0.03em] max-w-[11ch]">
          Türkiye&apos;nin simitçisi.
        </h1>

        <p className="font-body-lg text-[17px] leading-relaxed md:text-body-lg text-white/75 mt-6 md:mt-8 max-w-md animate-fade-up [animation-delay:0.2s] motion-reduce:animate-none">
          Nazilli Bamboo AVM&apos;deyiz. Simitten kahvaltıya, tezgâhta {menuItems.length} çeşit.
        </p>

        <div className="grid grid-cols-2 sm:flex gap-3 mt-8 md:mt-10 animate-fade-up [animation-delay:0.32s] motion-reduce:animate-none">
          <Link
            href="/menu"
            className="bg-(--damga) text-white px-6 sm:px-8 py-4 rounded font-label-lg text-label-lg text-center hover:bg-(--damga-koyu) transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Menüyü gör
          </Link>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/40 text-white px-6 sm:px-8 py-4 rounded font-label-lg text-label-lg text-center backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Yol tarifi al
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
