const http = require("http");
const PORT = process.env.PORT || 4000;
require("url");

const get = require("./requests/get");
const post = require("./requests/post");
const put = require("./requests/put");
const del = require("./requests/delete");
const getBody = require("./utils/get-body");
const status = require("./constants");

const server = http.createServer((req, res) => {
  req.query = new URL(req.url, `http://${req.headers.host}`);

  switch (req.method) {
    case "GET":
      getBody(req, res, get);
      break;

    case "POST":
      getBody(req, res, post);
      break;

    case "PUT":
      getBody(req, res, put);
      break;

    case "DELETE":
      getBody(req, res, del);
      break;

    default:
      res.statusCode = status.BAD_REQUEST;
      res.write("No response");
      res.end();
      break;
  }
});

server.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server is runnning on port ${PORT}`);
});
