import { Link } from "@remix-run/react";

export default function AdminIndexRoute() {
  return (
    <div>
      Admin index Outlet
      <p>
        <Link to="new" className="text-blue-600 underline">
          Create a New Post
        </Link>
      </p>
    </div>
  );
}
