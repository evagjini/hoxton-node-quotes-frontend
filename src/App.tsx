import { useEffect, useState } from "react";
import "./App.css";

type Quotes = {
  id: number;
  author: string;
  quote: string;
};
function App() {
  const [quotes, setQuotes] = useState<Quotes[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/quotes")
      .then((resp) => resp.json())
      .then((quotesFromServer) => setQuotes(quotesFromServer));
  }, []);

  return (
    <div className="App">
      <h1 className="fav-title"> Your Favorite Quotes!!</h1>
      <ul>
        {quotes.map((quote) => (
          <li className="quotes-list">
            <h2>{quote.author}</h2>
            <h3 className="description">{quote.quote}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
