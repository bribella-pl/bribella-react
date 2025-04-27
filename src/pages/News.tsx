import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import matter from "gray-matter";
import { NewsData, loadNews } from "../utils/loadMarkdown";
import { SimpleData } from "../types/types";
import Header from "../components/Header";
import { formatDate } from "../utils/dateParser";
import Gallery from "../components/Gallery";

function News() {
  const [simple, setSimple] = useState<SimpleData | null>(null);
  const [data, setData] = useState<NewsData[] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("/content/news/simple/news.md")
      .then((res) => res.text())
      .then((text) => {
        const parsed = matter(text);
        setSimple(parsed.data as SimpleData);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const news = loadNews();
    news.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    setData(news);
  }, []);

  return (
    <Layout>
      <ParallaxImage
        imageUrl="/images/drapak2.webp"
        alt="Majestatyczny kot brytyjski"
        title={simple?.title}
      ></ParallaxImage>
      <Section text={simple?.body}></Section>
      {data &&
        data.map((news) => (
          <div
            key={news.date}
            className="m-4 lg:m-auto lg:mb-6 lg:w-[66%] bg-bribella-white rounded-xl overflow-hidden shadow-sm "
          >
            <Header
              title={news.title}
              className="bg-bribella-orange text-bribella-blue"
            />
            <div className="text-bribella-blue/60 p-4 mb-0">
              {formatDate(news.date)}
            </div>
            <section
              className="
                w-[85%] lg:w-[75%] 
                mx-auto mb-10 
                text-bribella-black 
                flex flex-col lg:flex-row items-center"
            >
              <div className="bg-bribella-grey/15 rounded-xl shadow-xl m-2 lg:m-10 p-8">
                <div className="text-md lg:text-lg leading-relaxed text-left p-5">
                  {news.body}
                </div>
              </div>
            </section>
            <Gallery images={news.images} />
          </div>
        ))}
    </Layout>
  );
}

export default News;
