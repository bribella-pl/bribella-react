import { useEffect, useMemo, useState } from "react";
import { loadQuotes } from "../utils/loaders/loadQuotes";
import { Quote } from "../types/types";

function RandomQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);

  const allQuotes = useMemo(() => loadQuotes(), []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    setQuote(allQuotes[randomIndex]);
  }, [allQuotes]);

  return (
    <div
      className="
    text-left m-10 xl:ml-20 p-10
    bg-bribella-white/65 rounded-lg w-fit 
    shadow-lg shadow-gray-500/50
    transition-shadow duration-300 ease-in-out 
    hover:shadow-gray-600/50"
    >
      <p className="italic text-md lg:text-2xl">{quote?.quote}</p>
      <p className="text-sm lg:text-lg mt-2">– {quote?.author}</p>
    </div>
  );
}

export default RandomQuote;
