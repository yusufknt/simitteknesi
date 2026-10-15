import Link from "next/link";
import React from "react";
import { MenuItem, menuItems } from "../../data/menu";
import { handleImageError, optimizedSrc } from "../../utils/imageUtils";

// En çok sorulan fırın ürünleri (sıra korunur)
const BOARD_ITEM_IDS = [14, 15, 18, 19, 25, 251, 30, 74];

const FiyatTahtasi: React.FC = () => {
  const items = BOARD_ITEM_IDS.map((id) => menuItems.find((item) => item.id === id)).filter(
    (item): item is MenuItem => Boolean(item)
  );

  return (
    <section className="bg-(--kagit-2) py-16 md:py-24">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg">Bugün fırında</h2>

        <ul className="mt-8 md:mt-10 border-t-2 border-(--murekkep) md:grid md:grid-cols-2 md:gap-x-16">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-4 py-3 border-b border-(--cizgi)">
              <img
                src={optimizedSrc(item.image, "thumb")}
                data-full-src={item.image}
                width={240}
                height={240}
                alt=""
                className="w-14 h-14 rounded object-cover shrink-0 bg-white"
                onError={handleImageError}
                loading="lazy"
                decoding="async"
              />
              <span className="flex flex-1 items-baseline min-w-0">
                <span className="font-headline-md text-lg md:text-xl">{item.name}</span>
                <span className="menu-leader" aria-hidden="true" />
                <span className="font-display-lg text-lg md:text-xl font-semibold text-(--damga) lining-nums tabular-nums">
                  {item.price}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <Link
          href="/menu"
          className="inline-block mt-10 bg-(--murekkep) text-white px-8 py-4 rounded font-label-lg text-label-lg hover:bg-(--damga) transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-(--damga) focus-visible:ring-offset-2"
        >
          Tüm menü ({menuItems.length} ürün)
        </Link>
      </div>
    </section>
  );
};

export default FiyatTahtasi;
