import React from "react";
import styles from "../../styles/Home.module.css";
import {
  handleImageError,
  LOGO_PATH,
  LOGO_SRC,
  LOGO_SRCSET,
  optimizedSrc,
  responsiveSrcSet,
} from "../../utils/imageUtils";

// Tezgâhtan üç ürün: ortadaki öne çıkar, yandakiler hafif eğik durur. Fotoğraflar geniş
// stüdyo çekimi; kadraj `focus` noktasına doğru `zoom` kadar ürüne yaklaştırılır.
const PRINTS = [
  { src: "/images/pogacalar/kasarli-pogaca.jpg", alt: "Kaşarlı poğaça", focus: "50% 66%", zoom: 1.7 },
  { src: "/images/simitler/sade-simit.jpg", alt: "Tahta tepsi üzerinde susamlı sade simit", focus: "52% 58%", zoom: 1.25 },
  { src: "/images/sicak-icecekler/turk-kahvesi.jpg", alt: "Simit Teknesi fincanında Türk kahvesi", focus: "40% 70%", zoom: 1.6 },
];

// Hero'nun hemen altındaki tanıtım: üç fotoğraf baskısı, logo ortadakinin üstüne damga gibi
// basılır (ekrana girince)
const Tezgah: React.FC = () => {
  const [left, center, right] = PRINTS;

  const print = (item: (typeof PRINTS)[number], isCenter: boolean) => (
    <img
      src={optimizedSrc(item.src, "640")}
      srcSet={responsiveSrcSet(item.src)}
      sizes={isCenter ? "(min-width: 1024px) 340px, 46vw" : "(min-width: 1024px) 300px, 38vw"}
      data-full-src={item.src}
      width={640}
      height={800}
      alt={item.alt}
      className="w-full h-full object-cover"
      style={{ transform: `scale(${item.zoom})`, transformOrigin: item.focus }}
      onError={handleImageError}
      loading="lazy"
      decoding="async"
    />
  );

  return (
    <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-16 md:py-28 grid lg:grid-cols-12 lg:gap-12 items-center">
      <div className="lg:col-span-6">
        <h2 className="font-display-lg font-bold text-[48px] leading-[1] md:text-[84px] tracking-tight text-balance">
          Simit sıcak,
          <br />
          çay demli.
        </h2>

        <p className="font-body-lg text-[17px] leading-relaxed md:text-body-lg text-(--soluk) mt-6 md:mt-8 max-w-md">
          Simit, poğaça ve börek gün boyu fırından çıkıyor. Oturup için ya da alıp yolunuza
          devam edin.
        </p>
      </div>

      <div className="lg:col-span-6 mt-14 lg:mt-0 lg:-mr-8 flex justify-center items-center">
        <div className={`relative w-[38%] aspect-[4/5] -mr-[7%] mt-10 -rotate-6 rounded-md overflow-hidden bg-(--kagit-2) ${styles.print}`}>
          {print(left, false)}
        </div>
        <div className="relative z-10 w-[46%] aspect-[4/5]">
          <div className={`w-full h-full rounded-md overflow-hidden bg-(--kagit-2) ${styles.print}`}>
            {print(center, true)}
          </div>
          <img
            src={LOGO_SRC}
            srcSet={LOGO_SRCSET}
            data-full-src={LOGO_PATH}
            sizes="(min-width: 1024px) 170px, 30vw"
            alt=""
            width={540}
            height={456}
            className={`absolute -bottom-[14%] -right-[24%] w-[62%] ${styles.stamp}`}
            onError={handleImageError}
            loading="lazy"
          />
        </div>
        <div className={`relative w-[38%] aspect-[4/5] -ml-[7%] mt-10 rotate-6 rounded-md overflow-hidden bg-(--kagit-2) ${styles.print}`}>
          {print(right, false)}
        </div>
      </div>
    </section>
  );
};

export default Tezgah;
