module.exports = ({ res, code, message = "", body = "" }) => {
  if (message) {
    res.statusCode = code;
    res.write(message);
  }

  if (body) {
    res.statusCode = code;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(body));
  } else {
    res.statusCode = code;
  }

  res.end();
};
