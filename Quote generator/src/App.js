import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let random = Math.floor(Math.random() * data.length);
      setQuotes(data[random]);
    });
  };
  
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <div className='quote'>
      <p>{quotes.text}</p>
      <p>{quotes.author}</p>
        <button onClick={getQuote}>Click me!</button>
      </div>
    </div>
  );
}

export default App;
