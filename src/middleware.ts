export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/app"],
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/error",
  },
};
