import { useEffect, useState, useRef, useMemo } from "react";
import Layout from "../components/Layout/Layout";
import ParallaxImage from "../components/ParallaxImage";
import Section from "../components/Section";
import Header from "../components/Header";
import { formatDate } from "../utils/dateParser";
import Gallery from "../components/Gallery";
import { loadNewsPage } from "../utils/loaders/newsLoaders/loadNewsPage";
import { loadAllNews } from "../utils/loaders/newsLoaders/loadAllNews";
import { marked } from "marked";

function News() {
  const [currentPage, setCurrentPage] = useState(1);

  const newsContainerRef = useRef<HTMLDivElement>(null);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const newsData = useMemo(() => loadNewsPage(), []);
  const news = useMemo(() => {
    const n = loadAllNews();
    n.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    return n;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (currentPage === 1 && !isTouched) {
      window.scrollTo(0, 0);
    } else if (newsContainerRef?.current) {
      newsContainerRef.current.scrollIntoView({ behavior: "smooth" });
      setIsTouched(true);
    }
  }, [currentPage, isTouched]);

  const itemsPerPage = Number(newsData.itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = news ? Math.ceil(news.length / itemsPerPage) : 1;

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Layout>
      <ParallaxImage
        imageUrl={newsData?.mainImageUrl}
        alt="Majestatyczny kot brytyjski"
        title={newsData?.title}
      ></ParallaxImage>

      <Section
        text={newsData?.content}
        className="bg-bribella-white shadow-none"
      ></Section>

      <div ref={newsContainerRef}>
        {currentItems &&
          currentItems.map((news) => (
            <div
              key={news.date}
              className="m-4 lg:m-auto lg:mb-6 lg:w-[66%] rounded-xl overflow-hidden shadow-xl bg-bribella-grey/15"
            >
              <Header
                title={news.title}
                className="text-bribella-blue text-left pl-4 lg:p-10 pb-1"
              />
              <div className="text-bribella-blue/60 p-4 lg:pl-10 lg:py-0 mb-0 text-left">
                {formatDate(news.date)}
              </div>

              <div
                className="text-md lg:text-lg leading-relaxed text-left p-4 lg:p-10"
                dangerouslySetInnerHTML={{
                  __html: news?.content ? marked(news.content) : "",
                }}
              ></div>
              <Gallery images={news.images} />
            </div>
          ))}
      </div>
      {news && news.length > itemsPerPage && (
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
