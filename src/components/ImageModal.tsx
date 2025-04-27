import { useEffect, useState, useRef } from "react";

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
  const [index, setIndex] = useState(currentIndex);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(index);
  }, [index, setCurrentIndex]);

  // Zamknięcie ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        nextImage(); // swipe left → next
      } else if (diff < -50) {
        prevImage(); // swipe right → prev
      }
    }
  };

  return (
    <div
      className="
        fixed top-0 left-0 w-full h-full 
        bg-bribella-blue/50 
        flex items-center justify-center 
        z-50
      "
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="
          absolute top-4 right-4 
          text-white text-4xl 
          hover:text-bribella-orange 
          transition-colors duration-300 
          ease-in-out
        "
        aria-label="Close image modal"
      >
        ✕
      </button>

      {/* Left / Right buttons (only on desktop) */}
      <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={prevImage}
          className="text-white text-5xl hover:text-bribella-orange transition-colors duration-300 ease-in-out"
          aria-label="Previous image"
        >
          ◀
        </button>
      </div>
      <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={nextImage}
          className="text-white text-5xl hover:text-bribella-orange transition-colors duration-300 ease-in-out"
          aria-label="Next image"
        >
          ▶
        </button>
      </div>

      {/* Image */}
      <img
        src={images[index]}
        alt={`Powiększone zdjęcie ${index + 1}`}
        className="max-w-full max-h-full object-contain rounded-lg"
      />
    </div>
  );
}

export default ImageModal;
