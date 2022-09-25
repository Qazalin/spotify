export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/test"],
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/error",
  },
};
