import { SearchX } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col text-center h-[calc(100vh-200px)] px-4">
      <SearchX width={80} height={80} className="mb-[30px]" />
      <h1 className="text-4xl font-bold">404 - Page not found</h1>
      <p className="text-lg mt-2">
        Check the address or return to the main page.
      </p>
      <Link
        to={"/"}
        className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        To the main page
      </Link>
    </div>
  );
}
