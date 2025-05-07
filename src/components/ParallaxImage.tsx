import { ReactNode } from "react";
import { Parallax } from "react-parallax";
import Header from "./Header";

export type ParallaxImageProps = {
  imageUrl: string;
  alt: string;
  title?: string | null;
  children?: ReactNode | null;
};

function ParallaxImage(props: ParallaxImageProps) {
  return (
    <Parallax
      bgImage={props.imageUrl}
      strength={300}
      bgImageAlt={props.alt}
      bgClassName="parallax-bg"
      bgImageStyle={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <section
        className="
          relative 
          h-[85vh] 
          flex flex-col justify-between"
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
