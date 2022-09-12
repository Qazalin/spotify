import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spotify | Music player</title>
        <meta name="description" content="A clone of Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen">Hello world</main>
    </>
  );
};

export default Home;
