import { useMemo } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import Header from "../components/Header";
import { formatDate } from "../utils/dateParser";
import Gallery from "../components/Gallery";
import { marked } from "marked";
import { loadQueensPage } from "../utils/loaders/catsLoaders/loadSQueensPage";
import { loadAllQueens } from "../utils/loaders/catsLoaders/loadAllQueens";

function Queens() {
  const data = useMemo(() => loadQueensPage(), []);
  const studs = useMemo(() => loadAllQueens(), []);

  return (
    <Layout>
      <ParallaxImage
        imageUrl={data?.mainImageUrl}
        alt="Majestatyczny kot brytyjski"
        title={data?.title}
      ></ParallaxImage>
      <Section text={data?.content} className="shadow-xl"></Section>
      <div>
        {studs &&
          studs.map((cat) => (
            <div
              key={`${cat?.name}-${cat?.name}}`}
              className="m-4 lg:m-auto lg:mb-6 lg:w-[66%] rounded-xl overflow-hidden shadow-xl bg-bribella-grey/15"
            >
              <Header
                title={cat.name}
                className="text-bribella-blue text-left pl-4 lg:p-10 pb-1"
              />
              <div className="text-bribella-blue/60 p-4 lg:pl-10 lg:py-0 mb-0 text-left">
                Urodzona {formatDate(cat.date)} roku.
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

export default Queens;
