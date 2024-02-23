import axios from 'axios';

const getQuote = async () => {
  try {
    const response = await axios.get('/api/quote');
    if (response.status === 200) {
      return response.data.quote;
    } else {
      throw new Error(`Failed to fetch quote. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching quote:', error.message);
    throw error;
  }
};

export {
  getQuote
};
