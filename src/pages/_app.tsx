import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
