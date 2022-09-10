import type { NextPage } from "next";
import Head from "next/head";
import { PlayerLayout } from "../components/player/PlayerLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spotify | Music player</title>
        <meta name="description" content="A clone of Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen">
        <PlayerLayout />
      </main>
    </>
  );
};

export default Home;
