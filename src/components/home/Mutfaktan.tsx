import Link from "next/link";
import React from "react";
import { ANCHOR_BY_ITEM_ID, MenuItem, menuItems } from "../../data/menu";
import { handleImageError, optimizedSrc, responsiveSrcSet } from "../../utils/imageUtils";

// Mutfaktan öne çıkan doyurucu menüler
const FEATURED_ITEM_IDS = [68, 681];

const Mutfaktan: React.FC = () => {
  const items = FEATURED_ITEM_IDS.map((id) => menuItems.find((item) => item.id === id)).filter(
    (item): item is MenuItem => Boolean(item)
  );

  return (
    <section className="bg-(--murekkep) text-white py-16 md:py-24">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg">
          Daha doyurucu bir şey mi?
        </h2>

        <ul className="mt-8 md:mt-10 grid gap-8 md:grid-cols-2 md:gap-8">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`/menu#${ANCHOR_BY_ITEM_ID[item.id]}`}
                className="group block outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-md"
              >
                <div className="aspect-[16/10] rounded-md overflow-hidden bg-white/5">
                  <img
                    src={optimizedSrc(item.image, "640")}
                    srcSet={responsiveSrcSet(item.image)}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    data-full-src={item.image}
                    width={1280}
                    height={721}
                    alt={item.name}
                    className="w-full h-full object-cover scale-[1.2] [object-position:50%_65%] transition-transform duration-500 ease-out group-hover:scale-[1.26] motion-reduce:transition-none"
                    onError={handleImageError}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="font-headline-md text-2xl md:text-[28px]">{item.name}</span>
                  {/* Siyah zeminde logonun kırmızısının açık tonu (5.6:1, AA) */}
                  <span className="font-display-lg text-2xl md:text-[28px] font-bold text-[#ff2a2a] lining-nums">
                    {item.price}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-white/65 mt-1">{item.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Mutfaktan;
