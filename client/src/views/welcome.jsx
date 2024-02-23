import React, { Fragment, useState, useEffect } from 'react';
import { Card } from 'components/lib';
import axios from 'axios';

export function Welcome(props) {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/quote');
        setQuote(response.data.quote);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <Card title="Welcome">
        <p className="mb-4 text-lg font-semibold">This is a simple fullstack webapp</p>
      </Card>
      <Card title="Random Movie Quote">
        <p>{quote}</p>
      </Card>
    </Fragment>
  );
}
