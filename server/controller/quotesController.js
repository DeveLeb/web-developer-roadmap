const movieQuote = require('popular-movie-quotes');

exports.get = async function (req, res) {
  return res.status(200).json({ quote: movieQuote.getRandomQuote() });
};
