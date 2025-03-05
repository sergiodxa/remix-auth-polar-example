import { Authenticator } from "remix-auth";
import { PolarStrategy } from "remix-auth-polar";

export const authenticator = new Authenticator<string>();

authenticator.use(
  new PolarStrategy(
    {
      clientId: process.env.POLAR_CLIENT_ID as string,
      clientSecret: process.env.POLAR_CLIENT_SECRET as string,
      redirectURI: "http://localhost:3000/callback",
      scopes: [
        "openid",
        "email",
        "profile",
        "user:read",
        "benefits:read",
        "products:read",
      ],
    },
    async ({ tokens }) => tokens.accessToken()
  )
);
