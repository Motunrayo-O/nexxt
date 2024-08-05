import middleware from "next-auth/middleware";

// Gets executed on every request to routes in the config matcher, Used to check if user is authenticated and redirect to the login page if not.
export default middleware;

export const config = {
  matcher: ["/api"],
};
