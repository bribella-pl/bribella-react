import { useEffect, useRef, useState } from "react";

type ImageModalProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  setCurrentIndex: (index: number) => void;
};

function ImageModal({
  images,
  currentIndex,
  onClose,
  setCurrentIndex,
}: ImageModalProps) {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Nowy: kierunek animacji
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    document.body.classList.add("overflow-hidden");
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.classList.remove("overflow-hidden");
    };
  }, [onClose]);

  const goToIndex = (newIndex: number) => {
    if (
      newIndex > currentIndex ||
      (currentIndex === images.length - 1 && newIndex === 0)
    ) {
      setDirection("right");
    } else {
      setDirection("left");
    }
    setCurrentIndex((newIndex + images.length) % images.length);
  };

  const nextImage = () => goToIndex(currentIndex + 1);
  const prevImage = () => goToIndex(currentIndex - 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        nextImage();
      } else if (diff < -50) {
        prevImage();
      }
    }
  };

  const animationClass =
    direction === "right"
      ? "animate-[var(--animate-slide-fade-in-right)]"
      : "animate-[var(--animate-slide-fade-in-left)]";

  return (
    <div
      className="
        fixed top-0 left-0 w-full h-full 
        bg-bribella-blue/50 
        flex items-center justify-center 
        z-50"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={onClose}
        className="
          absolute top-4 right-4 
          text-white text-4xl 
          hover:text-bribella-orange 
          transition-colors duration-300 ease-in-out"
        aria-label="Zamknij modal"
      >
        ✕
      </button>

      {/* Nawigacja desktop */}
      <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={prevImage}
          className="text-white text-5xl hover:text-bribella-orange transition-colors duration-300 ease-in-out"
          aria-label="Poprzednie zdjęcie"
        >
          ◀
        </button>
      </div>
      <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={nextImage}
          className="text-white text-5xl hover:text-bribella-orange transition-colors duration-300 ease-in-out"
          aria-label="Następne zdjęcie"
        >
          ▶
        </button>
      </div>

      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Powiększone zdjęcie ${currentIndex + 1}`}
        className={`
          max-w-full max-h-full 
          object-contain rounded-lg 
          ${animationClass}
        `}
      />
    </div>
  );
}

export default ImageModal;
