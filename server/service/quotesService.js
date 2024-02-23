const movieQuote = require('popular-movie-quotes');

exports.get = async function () {
    return movieQuote.getRandomQuote()
}