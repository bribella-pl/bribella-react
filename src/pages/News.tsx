import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import matter from "gray-matter";
import { NewsData, loadNews } from "../utils/loadMarkdown";
import { SimpleData } from "../types/types";
import Header from "../components/Header";
import { formatDate } from "../utils/dateParser";
import Gallery from "../components/gallery";

function News() {
  const [simple, setSimple] = useState<SimpleData | null>(null);
  const [data, setData] = useState<NewsData[] | null>(null);

  useEffect(() => {
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
          <div key={news.date}>
            <Header title={news.title} />
            <div className="text-bribella-blue">{formatDate(news.date)}</div>
            <Section text={news.body} />
            <Gallery images={news.images} />
          </div>
        ))}
    </Layout>
  );
}

export default News;
