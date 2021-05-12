"use strict";
const http = require("../utils/http");

module.exports.handler = async (event) => {
  try {
    console.log(event);
    const { test, testText } = event.queryStringParameters;
    const { firstName } = JSON.parse(event.body);
    return http.ok(
      `Hello, ${firstName} with test (${test}) and testText (${testText})`
    );
  } catch (error) {
    console.error(error);
    return http.error();
  }
};
