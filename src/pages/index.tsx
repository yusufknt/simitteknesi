import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";
import FiyatTahtasi from "../components/home/FiyatTahtasi";
import Konum from "../components/home/Konum";
import Mutfaktan from "../components/home/Mutfaktan";
import Tezgah from "../components/home/Tezgah";
import Vitrin from "../components/home/Vitrin";
import styles from "../styles/Home.module.css";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Anasayfa - Simit Teknesi Nazilli</title>
        <meta
          name="description"
          content="Simit Teknesi Nazilli'de günlük taze üretim simit, açma, poğaça çeşitleri ve özel kahve karışımları sizi bekliyor."
        />
      </Head>

      {/* Ana sayfanın renkleri (logodan) bu sarmalayıcıda tanımlı; diğer sayfalar etkilenmez */}
      <div className={styles.home}>
        <Hero />
        <Tezgah />
        <Vitrin />
        <FiyatTahtasi />
        <Mutfaktan />
        <Konum />
      </div>
    </>
  );
};

export default HomePage;
