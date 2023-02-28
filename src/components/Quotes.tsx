import axios from "axios";
import { useEffect, useState } from "react";
import { QuotesModel } from "../models/QuotesModel";

export function Quotes() {
  const [quotes, setQuote] = useState<QuotesModel[]>([]);

  useEffect(() => {
    axios
      .get<QuotesModel[]>(
        "https://grandcircusco.github.io/demo-apis/quotes.json"
      )
      .then((response) => setQuote(response.data));
  }, []);
  //run when use effect is changed - used for debugging
  useEffect(() => {
    console.log(quotes);
  }, [quotes]);

  return (
    <div className="Quotes">
      <ul>
        {quotes.map((quote) => (
          <li>
            {quote.author}:{quote.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
