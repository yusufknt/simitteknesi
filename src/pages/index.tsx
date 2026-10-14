import Head from "next/head";
import Link from "next/link";
import React from "react";
import Hero from "../components/Hero";
import {
  ADDRESS,
  DIRECTIONS_URL,
  HOURS_LABEL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../data/business";
import { ANCHOR_BY_ITEM_ID, MenuItem, menuItems } from "../data/menu";
import {
  handleImageError,
  imageFallbackRef,
  optimizedSrc,
  responsiveSrcSet,
} from "../utils/imageUtils";

// Anasayfadaki fiyat tahtasında gösterilen fırın ürünleri (sıra korunur)
const BOARD_ITEM_IDS = [14, 15, 18, 19, 25, 251, 30, 74];
// Öne çıkan doyurucu menüler
const FEATURED_ITEM_IDS = [68, 681];

const pickItems = (ids: number[]) =>
  ids
    .map((id) => menuItems.find((item) => item.id === id))
    .filter((item): item is MenuItem => Boolean(item));

const HomePage: React.FC = () => {
  const boardItems = pickItems(BOARD_ITEM_IDS);
  const featuredItems = pickItems(FEATURED_ITEM_IDS);

  return (
    <>
      <Head>
        <title>Anasayfa - Simit Teknesi Nazilli</title>
        <meta
          name="description"
          content="Simit Teknesi Nazilli'de günlük taze üretim simit, açma, poğaça çeşitleri ve özel kahve karışımları sizi bekliyor."
        />
      </Head>

      <Hero />

      {/* Fiyat tahtası: en çok sorulan fırın ürünleri ve fiyatları */}
      <section className="bg-parchment-light py-20 md:py-28">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-deep">
              Bugün fırında
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-lg">
              Simit, poğaça ve açma her gün tezgâhta. Fiyatlar günceldir; gerisi menüde.
            </p>

            <ul className="mt-10 border-t-2 border-charcoal-deep">
              {boardItems.map((item) => (
                <li key={item.id} className="flex items-baseline py-4 border-b border-slate-muted">
                  <span className="font-headline-md text-lg md:text-xl text-charcoal-deep">
                    {item.name}
                  </span>
                  <span className="menu-leader" aria-hidden="true" />
                  <span className="font-display-lg text-lg md:text-xl font-semibold text-baked-gold lining-nums tabular-nums">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/menu"
              className="inline-block mt-8 font-label-lg text-label-lg text-charcoal-deep underline underline-offset-[6px] decoration-baked-gold decoration-2 hover:text-baked-gold transition-colors"
            >
              Tüm menüyü gör ({menuItems.length} ürün)
            </Link>
          </div>

          <div className="lg:col-span-5">
            <img
              src={optimizedSrc("/images/simitler/sade-simit.jpg", "640")}
              srcSet={responsiveSrcSet("/images/simitler/sade-simit.jpg")}
              sizes="(min-width: 1024px) 460px, 92vw"
              data-full-src="/images/simitler/sade-simit.jpg"
              width={901}
              height={1600}
              alt="Tahta tepsi üzerinde susamlı sade simit"
              className="w-full aspect-[4/5] object-cover rounded-md"
              ref={imageFallbackRef}
              onError={handleImageError}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Doyurucu menüler */}
      <section className="bg-charcoal-deep text-white py-20 md:py-28">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div className="max-w-2xl">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-balance">
              Daha doyurucu bir şey mi?
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container mt-4">
              Mutfağımızdan hamburger ve pizza menüleri; patates kızartması ve içecekle birlikte.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:gap-8 mt-12">
            {featuredItems.map((item) => (
              <Link
                key={item.id}
                href={`/menu#${ANCHOR_BY_ITEM_ID[item.id]}`}
                className="group block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal-deep"
              >
                <div className="aspect-video overflow-hidden rounded-md bg-white/5">
                  <img
                    src={optimizedSrc(item.image, "640")}
                    srcSet={responsiveSrcSet(item.image)}
                    sizes="(min-width: 768px) 600px, 92vw"
                    data-full-src={item.image}
                    width={1600}
                    height={900}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    ref={imageFallbackRef}
                    onError={handleImageError}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex items-baseline mt-5">
                  <h3 className="font-headline-md text-2xl text-white">{item.name}</h3>
                  <span className="menu-leader opacity-40" aria-hidden="true" />
                  <span className="font-display-lg text-2xl font-semibold text-ember lining-nums tabular-nums">
                    {item.price}
                  </span>
                </div>
                <p className="font-body-md text-sm text-on-primary-container mt-2">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ziyaret bilgileri */}
      <section className="bg-parchment-light py-20 md:py-28">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-deep">
              Bamboo AVM&apos;deyiz
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-md">
              Oturup çayınızı içebilir ya da simidinizi alıp yola devam edebilirsiniz.
            </p>
          </div>

          <div className="lg:col-span-7 border-t-2 border-charcoal-deep pt-8">
          <dl className="grid sm:grid-cols-3 gap-8">
            <div>
              <dt className="font-body-md text-sm text-outline">Adres</dt>
              <dd className="font-headline-md text-lg text-charcoal-deep mt-2 lining-nums">{ADDRESS}</dd>
            </div>
            <div>
              <dt className="font-body-md text-sm text-outline">Çalışma saatleri</dt>
              <dd className="font-headline-md text-lg text-charcoal-deep mt-2 lining-nums">{HOURS_LABEL}</dd>
            </div>
            <div>
              <dt className="font-body-md text-sm text-outline">Telefon</dt>
              <dd className="font-headline-md text-lg text-charcoal-deep mt-2 lining-nums">
                <a href={PHONE_HREF} className="hover:text-baked-gold transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
          </dl>
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-baked-gold text-white px-8 py-4 rounded font-label-lg text-label-lg text-center hover:bg-hearth-bronze transition-colors duration-200"
              >
                Yol tarifi al
              </a>
              <Link
                href="/iletisim"
                className="border border-charcoal-deep text-charcoal-deep px-8 py-4 rounded font-label-lg text-label-lg text-center hover:bg-charcoal-deep hover:text-white transition-colors duration-200"
              >
                Bize yazın
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
