import { useEffect, useState } from "react";
import "./App.css";

type Quotes = {
  id: number;
  author: string;
  quote: string;
  firstName: string;
  lastName: string;
  age: number;
  image: string;
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
      <h1 className="fav-title"> My Favorite Quotes!!</h1>
      <div className="wraper">
        <ul>
          {quotes.map((quote) => (
            <li key={quote.id} className="quotes-list">
              <h2 className="name">{quote.firstName}</h2>
              <h2 className="name">{quote.lastName}</h2>
              <h3 className="description">{quote.quote}</h3>
              <span> Age : {quote.age}</span>
              <img className="images" src={quote.image} width="170" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
