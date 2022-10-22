import { LoadingScreen } from "components/shared/LoadingScreen";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsDiscord } from "react-icons/bs";

export const AuthLayout: React.FC<{ mode: "login" | "signup" }> = ({
  mode,
}) => {
  const msg =
    mode === "login" ? "Login to your account" : "Create your account";
  const [email, setEmail] = useState("");

  const { status } = useSession();
  const router = useRouter();
  useEffect(() => console.log(status), [status]);

  function validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  // loading spinner
  if (status === "loading") {
    return <LoadingScreen />;
  }
  if (status === "authenticated") {
    router.push("/app");
    return <LoadingScreen />;
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 flex justify-center items-center flex-col">
      <h1 className="text-xl md:text-2xl font-semibold text-zinc-300">{msg}</h1>
      <div className="mt-5 space-y-3">
        <button
          className="bg-zinc-700 p-2 px-10 rounded-md flex text-md md:text-lg hover:fill-indigo-400 hover:text-indigo-400 fill-zinc-100 text-zinc-100 transition-colors"
          onClick={() => {
            console.log("sining you in...");
            signIn("discord");
          }}
        >
          <BsDiscord className="fill-inherit mr-2 my-auto text-lg md:text-xl" />
          Continue with Discord
        </button>
        <hr className="opacity-20" />
        <input
          name="email"
          type="email"
          placeholder="you@email.com"
          autoComplete="off"
          className="w-full p-2 px-10 rounded-md bg-zinc-800 shadow-md shadow-zinc-900 focus:outline-zinc-700 text-md md:text-lg"
          onClick={() => {
            if (validateEmail(email)) {
              console.log("email valid");
              signIn("email", { email });
            }
            console.log("invalid email");
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-zinc-800 p-2 px-10 rounded-md flex text-md md:text-lg hover:fill-indigo-400 hover:text-blue-400 fill-zinc-100 text-zinc-100 transition-colors w-full justify-center">
          Continue with Email
        </button>
      </div>
    </div>
  );
};

/* 
 *
        <button className="bg-zinc-700 p-2 rounded-md flex text-md md:text-lg text-zinc-100">
          <GoogleIcon className="w-5 md:w-6 mr-2 my-auto" />
          Continue with Discord
        </button>
        */
