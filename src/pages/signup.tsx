import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Signup: NextPage = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>loading</div>;
  }

  return (
    <div>
      {session ? (
        <>
          <h1>hi {session.user?.name}</h1>
          <button onClick={() => signOut()}>Log out</button>
        </>
      ) : (
        <>
          <h1>Signup now</h1>
          <button onClick={() => signIn("discord")}>Signup with Discord</button>
        </>
      )}
    </div>
  );
};

export default Signup;
