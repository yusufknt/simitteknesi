import type { AppProps } from "next/app";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

// Fontlar build sırasında indirilip sitenin kendi adresinden sunulur (Google'a istek gitmez,
// sayfa çizimi font CSS'ini beklemez). Türkçe harfler (ş, ğ, İ) latin-ext alt kümesinde.
const montserrat = Montserrat({ subsets: ["latin", "latin-ext"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], display: "swap" });
const inter = Inter({ subsets: ["latin", "latin-ext"], display: "swap", preload: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* globals.css'teki --font-* tema değişkenleri bunlara bağlanır */}
      <style jsx global>{`
        :root {
          --font-montserrat: ${montserrat.style.fontFamily};
          --font-playfair: ${playfair.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Simit Teknesi Nazilli - Türk Kafesi</title>
        <meta
          name="description"
          content="Simit Teknesi Nazilli - Nazilli'nin en taze ve lezzetli simit, açma, poğaça çeşitleri ile özel kahve karışımları"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
