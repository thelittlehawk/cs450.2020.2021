const mongoose = require("mongoose");

const connect = async () =>
  await mongoose.connect("mongodb://localhost:27017/episodes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

module.exports = { connect };
