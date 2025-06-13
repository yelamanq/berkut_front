import { useLocation, useNavigate } from "react-router-dom";
import LogoIcon from "../assets/icons/logo.svg?react";
import { Search, Heart } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const searchHandler = () => {
    navigate("/");
  };

  const favoritesHandler = () => {
    navigate("/favorites");
  };

  return (
    <div className="bg-black h-[100px] flex items-center px-[30px] md:px-[60px] lg:px-[100px]  justify-between text-white font-medium">
      <LogoIcon className="w-[100px] md:w-[120px]" />
      <div className="flex items-center gap-[20px] md:gap-[40px]">
        {!isHome && (
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={searchHandler}
          >
            <Search color="white" width={22} className="" />
            <p className="text-[18px] hidden sm:inline">Search</p>
          </div>
        )}
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={favoritesHandler}
        >
          <Heart color="white" width={22} />
          <p className="text-[18px] hidden sm:inline">Favorites</p>
        </div>
      </div>
    </div>
  );
}
