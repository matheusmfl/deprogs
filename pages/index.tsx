import Head from "next/head";
import Header from "../components/Header";
import { MainContent } from "../components/MainContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Deprogs, o Futuro chegou!</title>
        <meta name="description" content="Você de olho no futuro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContent />
    </>
  );
}
