import { useEffect, useMemo, useState } from "react";
import { loadQuotes } from "../utils/loadMarkdown";
type Quote = {
  author: string;
  quote: string;
};
function RandomQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);

  const allQuotes = useMemo(() => loadQuotes(), []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    setQuote(allQuotes[randomIndex]);
  }, [allQuotes]);

  return (
    <div className="text-left m-10 ml-20 p-10 bg-bribella-white/70 rounded-lg w-fit">
      <p className="italic text-2xl">{quote?.quote}</p>
      <p className="mt-2">– {quote?.author}</p>
    </div>
  );
}

export default RandomQuote;
