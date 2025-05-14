import { ReactNode } from "react";
import { Parallax } from "react-parallax";
import Header from "./Header";
import { useDeviceStore } from "../context/deviceStore";

export type ParallaxImageProps = {
  imageUrl: string;
  alt: string;
  title?: string | null;
  children?: ReactNode | null;
  mainImage?: boolean;
};

function ParallaxImage(props: ParallaxImageProps) {
  const { isMobile } = useDeviceStore();

  return (
    <Parallax
      bgImage={props.imageUrl}
      strength={isMobile ? 100 : 300}
      blur={{ min: 0, max: 0 }}
      bgImageAlt={props.alt}
      bgClassName="parallax-bg"
      bgImageStyle={{
        objectFit: "cover",
        width: "100%",
        height: `${props.mainImage ? "100%" : "75%"}`,
      }}
    >
      <section
        className={`
          relative 
          ${props.mainImage ? "h-[85vh]" : "h-[55vh]"} 
          flex flex-col justify-between`}
      >
        {props.children ?? <div></div>}
        {props.title && (
          <Header
            title={props.title}
            className="bg-bribella-blue text-bribella-orange"
          />
        )}
      </section>
    </Parallax>
  );
}

export default ParallaxImage;
