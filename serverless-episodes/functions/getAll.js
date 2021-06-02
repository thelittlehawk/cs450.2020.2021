"use strict";
const http = require("../utils/http");
const { connect } = require("../db/connection");
const { Episode } = require("../db/schema");

module.exports.handler = async (event) => {
  await connect();
  const episodes = await Episode.find();
  return http.ok({ episodes });
};
