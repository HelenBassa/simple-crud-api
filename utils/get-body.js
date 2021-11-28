module.exports = (req, res, next) => {
  let data = [];

  req.on("data", (dataChunk) => {
    data.push(dataChunk);
  });

  req.on("end", () => {
    req.body = Buffer.concat(data).toString();

    if (req.headers["content-type"] === "application/json") {
      req.body = JSON.parse(req.body);
    }

    next(req, res);
  });
};
