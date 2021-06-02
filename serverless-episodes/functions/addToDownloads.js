"use strict";
const http = require("../utils/http");
const data = require("../data");
const { connect } = require("../db/connection");
const { Episode } = require("../db/schema");

module.exports.handler = async (event) => {
  try {
    const { episodeId } = JSON.parse(event.body);
    if (!episodeId) return http.unprocessableEntity();

    const episode = data.find((x) => x.id === parseInt(episodeId));
    if (!episode) return http.notFound("Episode not found.");

    await connect();
    const dbEpisode = new Episode();
    dbEpisode.episodeId = episode.id;
    dbEpisode.title = episode.name;
    const saveReponse = await dbEpisode.save();
    console.log(saveReponse);

    return http.ok(`Episode '${episode.name}' added to the downloads list.`);
  } catch (error) {
    console.error(error);
    return http.error();
  }
};
