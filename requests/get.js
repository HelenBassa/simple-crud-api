const persons = require("../controllers/Persons");
const status = require("../constants");

module.exports = (req, res) => {
  const url = req.url;
  const path = url.split("/").filter((item) => !!item);
  const id = path[1];

  switch (url) {
    case "/person":
      res.statusCode = status.OK;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(persons.getAllPersons()));
      res.end();
      break;

    case `/person/${id}`:
      res.statusCode = status.OK;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(persons.getPerson(id)));
      res.end();
      break;

    default:
      res.statusCode = status.BAD_REQUEST;
      res.write(`Cannot GET ${url}`);
      res.end();
      break;
  }
};
