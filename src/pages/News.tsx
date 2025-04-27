import { useEffect, useState, useRef } from "react";
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
  const [simple, setSimple] = useState<SimpleData>({
    title: "",
    body: "",
    itemsPerPage: "3",
  });
  const [data, setData] = useState<NewsData[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const newsContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (newsContainerRef?.current) {
      newsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  const itemsPerPage = Number(simple.itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 1;

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Layout>
      <ParallaxImage
        imageUrl="/images/drapak2.webp"
        alt="Majestatyczny kot brytyjski"
        title={simple?.title}
      ></ParallaxImage>
      <Section text={simple?.body}></Section>

      <div ref={newsContainerRef}>
        {currentItems &&
          currentItems.map((news) => (
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
                mx-auto
                text-bribella-black 
                flex flex-col lg:flex-row items-center"
              >
                <div className="bg-bribella-grey/15 rounded-xl shadow-xl m-2 lg:m-3 p-8">
                  <div className="text-md lg:text-lg leading-relaxed text-left p-5">
                    {news.body}
                  </div>
                </div>
              </section>
              <Gallery images={news.images} />
            </div>
          ))}
      </div>
      {data && data.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-4 my-10">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-6 py-2 rounded-lg border-2 ${
              currentPage === 1
                ? "border-gray-300 text-gray-300"
                : "border-bribella-blue text-bribella-blue hover:border-bribella-orange hover:text-bribella-orange transition-colors duration-300"
            }`}
          >
            Poprzednia
          </button>
          <span className="text-bribella-blue">{`Strona ${currentPage} z ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-6 py-2 rounded-lg border-2 ${
              currentPage === totalPages
                ? "border-gray-300 text-gray-300"
                : "border-bribella-blue text-bribella-blue hover:border-bribella-orange hover:text-bribella-orange transition-colors duration-300"
            }`}
          >
            Następna
          </button>
        </div>
      )}
    </Layout>
  );
}

export default News;
