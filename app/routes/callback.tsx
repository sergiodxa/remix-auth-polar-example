import { redirect } from "react-router";
import { authenticator } from "~/auth";
import type { Route } from "./+types/home";
import { sessionStorage } from "~/session";

export default function Component({ loaderData }: Route.ComponentProps) {
  return (
    <pre>
      <code style={{ tabSize: 2 }}>
        {JSON.stringify(loaderData, null, "\t")}
      </code>
    </pre>
  );
}

export async function loader({ request }: Route.ActionArgs) {
  let accessToken = await authenticator.authenticate("polar", request);
  let session = await sessionStorage.getSession();
  session.set("token", accessToken);
  return redirect("/", {
    headers: { "Set-Cookie": await sessionStorage.commitSession(session) },
  });
}
