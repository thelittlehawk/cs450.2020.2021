"use strict";
const http = require("../utils/http");
const data = require("../data");

module.exports.handler = async (event) => {
  try {
    const { episodeId } = JSON.parse(event.body);
    if (!episodeId) return http.unprocessableEntity();

    const episode = data.find((x) => x.id === parseInt(episodeId));
    if (!episode) return http.notFound("Episode not found.");

    return http.ok(`Episode '${episode.name}' added to the downloads list.`);
  } catch (error) {
    console.error(error);
    return http.error();
  }
};
