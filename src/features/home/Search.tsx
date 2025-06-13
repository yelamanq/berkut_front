import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <section
      className="relative w-full h-[200px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/images/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="z-10 flex bg-white py-3 px-6 gap-3 rounded-md">
        <input
          className="sm:w-[300px] md:w-[500px] outline-none"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="w-[18px]" />
      </div>
    </section>
  );
}
