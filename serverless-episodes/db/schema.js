const mongoose = require("mongoose");

const Episode = mongoose.model(
  "Episode",
  new mongoose.Schema({
    title: String,
    episodeId: Number,
  })
);

module.exports = {
  Episode,
};
