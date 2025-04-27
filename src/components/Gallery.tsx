import { useRef, useState } from "react";
import ImageModal from "./ImageModal";

type GalleryProps = {
  images: string[];
};

function Gallery({ images }: GalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const child = container.children[index] as HTMLElement;
      container.scrollTo({
        left:
          child.offsetLeft - (container.offsetWidth - child.offsetWidth) / 2,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    scrollToIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    scrollToIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const widths = Array.from(container.children).map(
        (child) => (child as HTMLElement).offsetWidth
      );
      let cumulativeWidth = 0;
      for (let i = 0; i < widths.length; i++) {
        cumulativeWidth += widths[i];
        if (scrollLeft + container.offsetWidth / 2 < cumulativeWidth) {
          setCurrentIndex(i);
          break;
        }
      }
    }
  };

  return (
    <div className="w-full text-bribella-blue/75">
      {/* Desktop navigation */}
      <div className="relative hidden md:flex md:flex-row md:items-center md:justify-center">
        <button
          onClick={handlePrev}
          className="
            bg-transparent p-20 cursor-pointer 
            hover:opacity-75 transition-opacity duration-300 ease-in-out 
            z-10"
        >
          ◀
        </button>
        <div
          ref={containerRef}
          className="overflow-hidden flex justify-center items-center w-[40%]"
        >
          <img
            src={images[currentIndex]}
            alt={`Galeria ${currentIndex + 1}`}
            className="max-h-[60vh] object-contain"
            onClick={() => {
              setModalImage(images[currentIndex]);
              setIsModalOpen(true);
            }}
          />
        </div>{" "}
        <button
          onClick={handleNext}
          className="
            bg-transparent p-20 cursor-pointer 
            hover:opacity-75 transition-opacity duration-300 ease-in-out 
            z-10"
        >
          ▶
        </button>
      </div>

      {/* Mobile swiper */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex md:hidden overflow-x-auto scroll-smooth snap-x snap-mandatory "
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-[90%] mx-2 snap-center flex-shrink-0"
          >
            <img
              src={image}
              alt={`g${index + 1}`}
              className="object-cover w-full h-60 rounded-xl"
              onClick={() => {
                setModalImage(images[currentIndex]);
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

      {isModalOpen && modalImage && (
        <ImageModal
          imageSrc={modalImage}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Gallery;
