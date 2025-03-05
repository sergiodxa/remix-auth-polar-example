import { data } from "react-router";
import { authenticator } from "~/auth";
import { Polar } from "@polar-sh/sdk";
import type { Route } from "./+types/home";
import { sessionStorage } from "~/session";

export default function Component({ loaderData }: Route.ComponentProps) {
  return (
    <h1 className="text-4xl m-4">
      Hello user{" "}
      <code className="text-3xl font-mono">{loaderData.user.sub}</code>
    </h1>
  );
}

export async function loader({ request }: Route.ActionArgs) {
  let session = await sessionStorage.getSession(request.headers.get("cookie"));
  let accessToken = session.get("token");
  if (!accessToken) throw await authenticator.authenticate("polar", request);
  let polar = new Polar({ accessToken });
  return data({ user: await polar.oauth2.userinfo() });
}
