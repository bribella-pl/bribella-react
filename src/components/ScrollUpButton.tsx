import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useModalStore } from "../context/modalStore";

function ScrollUpButton() {
  const [visible, setVisible] = useState(false);
  const anyModalOpen = useModalStore((state) => state.anyModalOpen);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shouldShow = visible && !anyModalOpen;

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed 
        bottom-8 right-8 
        border-2 border-white 
        text-white 
        rounded-full 
        p-3 
        bg-bribella-blue/70 
        hover:bg-bribella-blue 
        transition-colors duration-300 
        z-50
         ${
           shouldShow
             ? "opacity-100 pointer-events-auto"
             : "opacity-0 pointer-events-none"
         }
        transition-opacity duration-500 ease-in-out
      `}
      aria-label="Wróć na górę"
    >
      <ArrowUp size={24} />
    </button>
  );
}

export default ScrollUpButton;
