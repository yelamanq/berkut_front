import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <div
      onClick={scrollToTop}
      className="w-[40px] h-[40px] bg-white fixed right-[40px] bottom-[40px] flex items-center justify-center rounded-md shadow-sm/20 cursor-pointer"
    >
      <ArrowUp color="black" width={20} />
    </div>
  );
}
