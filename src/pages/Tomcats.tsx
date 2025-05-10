import { useMemo } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import { loadTomcatsPage } from "../utils/loaders/catsLoaders/loadTomcatsPage";
import { loadAllTomcats } from "../utils/loaders/catsLoaders/loadAllTomcats";
import Header from "../components/Header";
import { formatDate } from "../utils/dateParser";
import Gallery from "../components/Gallery";
import { marked } from "marked";

function Tomcats() {
  const data = useMemo(() => loadTomcatsPage(), []);
  const tomcats = useMemo(() => loadAllTomcats(), []);

  return (
    <Layout>
      <ParallaxImage
        imageUrl={data?.mainImageUrl}
        alt="Majestatyczny kot brytyjski"
        title={data?.title}
      ></ParallaxImage>
      <Section text={data?.content} className="shadow-xl"></Section>
      <div>
        {tomcats &&
          tomcats.map((cat) => (
            <div
              key={`${cat?.name}-${cat?.name}}`}
              className="m-4 lg:m-auto lg:mb-6 lg:w-[66%] rounded-xl overflow-hidden shadow-xl bg-bribella-grey/15"
            >
              <Header
                title={cat.name}
                className="text-bribella-blue text-left pl-4 lg:p-10 pb-1"
              />
              <div className="text-bribella-blue/60 p-4 lg:pl-10 lg:py-0 mb-0 text-left">
                Urodzony {formatDate(cat.date)} roku.
              </div>
              <div
                className="text-md lg:text-lg leading-relaxed text-left p-4 lg:p-10"
                dangerouslySetInnerHTML={{
                  __html: cat?.content ? marked(cat.content) : "",
                }}
              ></div>
              <Gallery images={cat.images} />
            </div>
          ))}
      </div>
    </Layout>
  );
}

export default Tomcats;
