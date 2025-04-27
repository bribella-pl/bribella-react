import { useEffect } from "react";

type ImageModalProps = {
  imageSrc: string;
  onClose: () => void;
};

function ImageModal({ imageSrc, onClose }: ImageModalProps) {
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

  return (
    <div
      className="
        fixed top-0 left-0 w-full h-full 
        bg-bribella-blue/75 
        flex items-center justify-center 
        z-50
      "
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

      {/* Image */}
      <img
        src={imageSrc}
        alt="Powiększone zdjęcie"
        className="max-w-full max-h-full object-contain rounded-lg"
      />
    </div>
  );
}

export default ImageModal;
