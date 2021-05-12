"use strict";
const http = require("../utils/http");

module.exports.handler = async (event) => {
  return http.ok({ test: [1, 2, 3, 4, 5] }, "Sve je super");
};
