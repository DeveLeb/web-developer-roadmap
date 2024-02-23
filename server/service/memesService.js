const axios = require('axios');

exports.get = async function () {
  try {
    const response = await axios.get('https://meme-api.com/gimme/ProgrammerHumor');
    const data = response.data;
    return data.url;
  } catch (error) {
    console.error('Error fetching data from the API:', error.message);
    throw error;
  }
};