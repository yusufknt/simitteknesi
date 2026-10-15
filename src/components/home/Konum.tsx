import React from "react";
import {
  ADDRESS,
  DIRECTIONS_URL,
  HOURS_LABEL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../../data/business";

// Sayfanın kapanışı: logonun kırmızısı üzerinde nerede, ne zaman, nasıl ulaşılır
const Konum: React.FC = () => {
  return (
    <section className="bg-(--damga) text-white py-16 md:py-24">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="font-display-lg font-bold text-[44px] leading-[1.05] md:text-[72px] tracking-tight">
            Bamboo AVM&apos;deyiz.
          </h2>
          <dl className="mt-8 grid gap-5 sm:grid-cols-3 sm:gap-8">
            <div>
              <dt className="font-body-md text-sm text-white/75">Adres</dt>
              <dd className="font-body-md text-body-md mt-1">{ADDRESS}</dd>
            </div>
            <div>
              <dt className="font-body-md text-sm text-white/75">Saatler</dt>
              <dd className="font-body-md text-body-md mt-1 lining-nums">{HOURS_LABEL}</dd>
            </div>
            <div>
              <dt className="font-body-md text-sm text-white/75">Telefon</dt>
              <dd className="font-body-md text-body-md mt-1 lining-nums">
                <a href={PHONE_HREF} className="underline underline-offset-4 decoration-white/40 hover:decoration-white">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-3 lg:justify-self-end lg:flex">
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-(--damga) px-6 sm:px-8 py-4 rounded font-label-lg text-label-lg text-center hover:bg-(--murekkep) hover:text-white transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-(--damga)"
          >
            Yol tarifi al
          </a>
          <a
            href={PHONE_HREF}
            className="border border-white px-6 sm:px-8 py-4 rounded font-label-lg text-label-lg text-center hover:bg-white hover:text-(--damga) transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-(--damga)"
          >
            Hemen ara
          </a>
        </div>
      </div>
    </section>
  );
};

export default Konum;
