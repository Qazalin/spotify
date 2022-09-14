import type { NextPage } from "next";
import Head from "next/head";
import { AppLayout } from "components/player/AppLayout";
import { LoadingScreen } from "components/shared/LoadingScreen";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AppMain } from "components/player/AppMain";
import { AppWelcome } from "components/player/AppWelcome";

const App: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <LoadingScreen />;
  }
  if (status === "unauthenticated") {
    router.push("/login");
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>Spotify | Music player</title>
        <meta name="description" content="A clone of Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <AppMain />
      </AppLayout>
    </>
  );
};

export default App;
