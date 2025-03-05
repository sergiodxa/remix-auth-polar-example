# Remix Auth + Polar Example

This is an example of how to use [Remix Auth](https://github.com/sergiodxa/remix-auth) with the [PolarStrategy](https://github.com/sergiodxa/remix-auth-polar) to authorize the [Polar SDK](https://docs.polar.sh/integrate/sdk/typescript) in a React Router app.

To make the app work create a `.env` file with the following content:

```env
POLAR_CLIENT_ID=YOUR_POLAR_CLIENT_ID
POLAR_CLIENT_SECRET=YOUR_POLAR_CLIENT_SECRET
```

Then run the following commands:

```bash
bun install
bun dev
```

And open [http://localhost:3000](http://localhost:3000) in your browser.

Ensure your Polar OAuth2 redirect URI is set to `http://localhost:3000/callback` in Polar's dashboard, or change the `redirectUri` in the `PolarStrategy` to match your redirect URI.

# Author

- [Sergio Xalambrí](https://sergiodxa.com)
