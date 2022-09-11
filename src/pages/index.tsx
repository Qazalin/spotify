import type { NextPage } from "next";
import Head from "next/head";
import { AppLayout } from "../components/player/AppLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spotify | Music player</title>
        <meta name="description" content="A clone of Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen">
        <AppLayout />
      </main>
    </>
  );
};

export default Home;
