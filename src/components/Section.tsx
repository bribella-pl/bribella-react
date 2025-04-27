export type SectionProps = {
  title?: string | undefined;
  text: string | undefined;
  imageUrl?: string;
  imageAlt?: string;
  imageFirst?: boolean;
};

function Section(props: SectionProps) {
  const image = props.imageUrl ? (
    <img src={props.imageUrl} alt={props.imageAlt} className="max-w-40 m-8" />
  ) : null;

  return (
    <section
      className="
        w-[85%] lg:w-[75%] 
        mx-auto my-16 px-4
        text-bribella-black 
        flex flex-col lg:flex-row items-center"
    >
      {props.imageFirst && image}
      <div className="bg-bribella-grey/15 rounded-xl shadow-xl m-2 lg:m-10 p-8">
        {props.title && (
          <h2 className="text-lg lg:text-3xl font-semibold p-5">
            {props.title}
          </h2>
        )}
        <p className="text-md lg:text-lg leading-relaxed text-left p-5">
          {props.text}
        </p>
      </div>
      {!props.imageFirst && image}
    </section>
  );
}

export default Section;
