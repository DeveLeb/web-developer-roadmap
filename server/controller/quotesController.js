const quotesService = require("../service/quotesService")

exports.get = async function (req, res) {
  randomQuote = await quotesService.get();
  return res.status(200).json({ quote: randomQuote });
};
