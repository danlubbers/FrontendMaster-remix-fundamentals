import { Link } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { requireAdminUser } from "~/session.server";

// 🐨 add a loader here so we can get the request
export async function loader({ request }: LoaderArgs) {
  // 🐨 call requireAdminUser from session.server with the request
  await requireAdminUser(request);

  // 💰 return json({}) (you must return a response)
  return json({});
}

export default function AdminIndex() {
  return (
    <p>
      <Link to="new" className="text-blue-600 underline">
        Create a New Post
      </Link>
    </p>
  );
}
