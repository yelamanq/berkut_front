import { useDebounce } from "@/hooks/useDebounce";
import { usePhotoStore } from "@/store/photoStore";
import { Search as SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import bg from "@/assets/images/bg.jpg";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const debouncedValue = useDebounce(query);
  const searchPhotos = usePhotoStore((state) => state.searchPhotos);

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;
    searchPhotos(query);
  };

  useEffect(() => {
    if (debouncedValue) searchPhotos(debouncedValue);
  }, [debouncedValue]);

  return (
    <section
      className="relative w-full h-[200px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
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
