import { useRef, useEffect, useState } from "react";

type CollapsibleProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

function Collapsible({ isOpen, children }: CollapsibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
      style={{ maxHeight: height }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

export default Collapsible;
