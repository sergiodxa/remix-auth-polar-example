import { redirect } from "react-router";
import { authenticator } from "~/auth";
import type { Route } from "./+types/callback";
import { sessionStorage } from "~/session";

export default function Component() {
  // This component is never rendered, but it's needed so in case of error we
  // can show an error boundary.
  return null;
}

export async function loader({ request }: Route.ActionArgs) {
  let accessToken = await authenticator.authenticate("polar", request);
  let session = await sessionStorage.getSession();
  session.set("token", accessToken);
  return redirect("/", {
    headers: { "Set-Cookie": await sessionStorage.commitSession(session) },
  });
}
