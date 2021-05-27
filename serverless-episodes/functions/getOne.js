"use strict";
const http = require("../utils/http");
const data = require("../data");

module.exports.handler = async (event) => {
  try {
    const { id } = event.pathParameters;
    if (!id) return http.unprocessableEntity();

    const episode = data.find((x) => x.id === parseInt(id));
    if (!episode) return http.notFound("Episode not found.");

    return http.ok({ episode: episode });
  } catch (error) {
    return http.error();
  }
};
