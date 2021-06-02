"use strict";
const http = require("../utils/http");
const data = require("../data");
const { connect } = require("../db/connection");
const { Episode } = require("../db/schema");

module.exports.handler = async (event) => {
  try {
    const { id } = event.pathParameters;
    if (!id) return http.unprocessableEntity();

    await connect();

    const episode = await Episode.findOne({ episodeId: parseInt(id) });
    if (!episode) return http.notFound("Episode not found.");

    return http.ok({ episode });
  } catch (error) {
    return http.error();
  }
};
