const memesService = require("../service/memesService")

exports.get = async function (req, res) {
  randomMeme = await memesService.get();
  return res.status(200).json({ meme: randomMeme });
};
