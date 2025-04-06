import { ReactNode } from "react";
import { Parallax } from "react-parallax";

export type ParallaxImageProps = {
  imageUrl: string;
  alt: string;
  title?: string | null;
  children?: ReactNode | null;
  height?: string | null;
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
        height: `${props.height ?? "85"}%`,
      }}
    >
      <section
        className="
  relative 
  h-[85vh] 
  flex flex-col justify-between"
      >
        {props.children}
        {props.title && (
          <div
            className="
bg-bribella-blue
  w-full
  text-bribella-orange text-center
  "
          >
            <h1 className="text-5xl lg:text-8xl m-4 tracking-wide p-10 font-[Corinthia] ">
              {props.title}
            </h1>
          </div>
        )}
      </section>
    </Parallax>
  );
}

export default ParallaxImage;
