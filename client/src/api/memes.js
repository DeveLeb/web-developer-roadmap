import axios from 'axios';

const getMeme = async () => {
  try {
    const response = await axios.get('/api/meme');
    if (response.status === 200) {
      return response.data.meme;
    } else {
      throw new Error(`Failed to fetch meme. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching meme:', error.message);
    throw error;
  }
};

export {
  getMeme
};