import React, { Fragment, useState, useEffect } from 'react';
import { Card } from 'components/lib';
import { getQuote } from 'api/quotes';
import { getMeme } from 'api/memes';

export function Welcome(props) {
  const [quote, setQuote] = useState('');
  const [meme, setMeme] = useState('');
  const [quoteLoading, setQuoteLoading] = useState(true);
  const [memeLoading, setMemeLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const newQuote = await getQuote();
        setQuote(newQuote);
      } catch (error) {
        console.error('Error fetching quote:', error.message);
        setQuote('');
      } finally {
        setQuoteLoading(false);
      }
    };

    fetchQuote();
  }, []);

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const newMeme = await getMeme();
        setMeme(newMeme);
      } catch (error) {
        console.error('Error fetching meme:', error.message);
        setMeme('');
      } finally {
        setMemeLoading(false);
      }
    };

    fetchMeme();
  }, []);

  return (
    <Fragment>
      <Card title="Welcome">
        <p className="mb-4 text-lg font-semibold">This is a simple fullstack webapp</p>
      </Card>

      <Card title="Random Movie Quote">
        {quoteLoading ? <p>Loading...</p> : <p>{quote || 'Quote cannot be loaded'}</p>}
      </Card>

      <Card title="Random Meme">{memeLoading ? <p>Loading...</p> : <img src={meme} alt="Random Meme" />}</Card>
    </Fragment>
  );
}
