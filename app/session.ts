import { createCookieSessionStorage } from "react-router";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "s",
    sameSite: "lax",
    path: "/",
    secrets: [process.env.SESSION_SECRET!],
  },
});
