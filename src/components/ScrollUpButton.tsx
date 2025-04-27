import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

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
           visible
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

export default ScrollToTopButton;
