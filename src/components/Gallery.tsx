import { useEffect, useRef, useState } from "react";
import ImageModal from "./ImageModal";
import { useModalStore } from "../context/modalStore";

type GalleryProps = {
  images: string[];
};

function Gallery({ images }: GalleryProps) {
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setAnyModalOpen } = useModalStore();

  const isUserScrollingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToIndex = (index: number) => {
    const container = mobileContainerRef.current;
    if (!container || !container.children[index]) return;

    const child = container.children[index] as HTMLElement;
    const targetScroll =
      child.offsetLeft - (container.offsetWidth - child.offsetWidth) / 2;

    const diff = Math.abs(container.scrollLeft - targetScroll);
    if (diff > 5) {
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (!isModalOpen && !isUserScrollingRef.current) {
      const timeout = setTimeout(() => {
        scrollToIndex(currentIndex);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isModalOpen]);

  const handleNext = () => {
    const next = (currentIndex + 1) % images.length;
    setCurrentIndex(next);
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prev);
  };

  useEffect(() => {
    setAnyModalOpen(isModalOpen);
    return () => setAnyModalOpen(false);
  }, [isModalOpen, setAnyModalOpen]);

  useEffect(() => {
    const container = mobileContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      isUserScrollingRef.current = true;

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        isUserScrollingRef.current = false;
      }, 150);

      const children = Array.from(container.children);
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const element = child as HTMLElement;
        const childCenter = element.offsetLeft + element.offsetWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full text-bribella-blue/75 m-4 mt-10">
      {/* Desktop navigation */}
      <div className="relative hidden md:flex md:flex-row md:items-center md:justify-center">
        {!isModalOpen && (
          <button
            onClick={handlePrev}
            className="bg-transparent p-10 cursor-pointer hover:text-bribella-orange transition-colors duration-300 ease-in-out z-10"
          >
            ◀
          </button>
        )}
        <div className="overflow-hidden flex justify-center items-center w-[60%] h-[50vh]">
          <img
            src={images[currentIndex]}
            alt={`Galeria ${currentIndex + 1}`}
            className="max-h-[50vh] object-contain transition-transform duration-300 cursor-pointer rounded-2xl"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        {!isModalOpen && (
          <button
            onClick={handleNext}
            className="bg-transparent p-10 cursor-pointer hover:text-bribella-orange transition-colors duration-300 ease-in-out z-10"
          >
            ▶
          </button>
        )}
      </div>

      {/* Mobile swiper */}
      <div
        ref={mobileContainerRef}
        className="flex md:hidden overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {images.map((image, index) => (
          <div key={index} className="mx-2 snap-center flex-shrink-0">
            <img
              src={image}
              alt={`g${index + 1}`}
              className="object-contain h-80 max-w-full rounded-xl cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setIsModalOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2 p-6">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-bribella-blue" : "bg-bribella-grey"
            }`}
          ></span>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ImageModal
          images={images}
          currentIndex={currentIndex}
          onClose={() => setIsModalOpen(false)}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </div>
  );
}

export default Gallery;
