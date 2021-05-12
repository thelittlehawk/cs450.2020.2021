const ok = (data = {}, message = "Request executed succesfully.") => ({
  statusCode: 200,
  body: JSON.stringify({
    message: message,
    data: data,
  }),
  headers: {
    "content-type": "application/json",
  },
});

const error = (message = "Internal server error.") => ({
  statusCode: 500,
  body: JSON.stringify({
    message: message,
  }),
  headers: {
    "content-type": "application/json",
  },
});

module.exports = {
  ok,
  error,
};
