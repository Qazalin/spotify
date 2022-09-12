import { AuthLayout } from "components/home/Auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Signup() {
  const { data: session } = useSession();
  const router = useRouter();

  // redirect to app if user is already logged in
  if (session) {
    router.push("/app");
  }
  return <AuthLayout mode="login" />;
}

export default Signup;
