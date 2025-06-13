import { usePhotoStore } from "@/store/photoStore";
import { Search as SearchIcon } from "lucide-react";
import React, { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const searchPhotos = usePhotoStore((state) => state.searchPhotos);

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;
    searchPhotos(query);
  };

  return (
    <section
      className="relative w-full h-[200px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/images/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <form
        className="z-10 flex bg-white py-3 px-6 gap-3 rounded-md"
        onSubmit={searchHandler}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="sm:w-[300px] md:w-[500px] outline-none"
          type="text"
          placeholder="Search"
        />

        <button type="submit">
          <SearchIcon className="w-[18px] cursor-pointer" />
        </button>
      </form>
    </section>
  );
}
