import React, { useState, useEffect } from 'react';
import './App.css';

import twitterIcon from './twitter.svg'

const App = () => {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('')

  const getQuote = () => {
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

  useEffect(getQuote, [])

  return (
    <div id="quote-box">
      <div id="text">
        <p>"{quote}"</p>
        <h3 id="author">{author}</h3>
      </div>
      <div id="buttons">
        <a href="twitter.com/intent/tweet" id="tweet-quote">
          <span><img src={twitterIcon} alt="" id="tweet-icon" /></span>
        </a>
        <button onClick={getQuote} id="new-quote">
          New Quote
        </button>
      </div>
    </div>
  );
  
}

export default App;