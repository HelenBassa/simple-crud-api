const persons = require("../controllers/Persons");
const status = require("../constants");

module.exports = (req, res) => {
  const url = req.url;
  const path = req.url.split("/").filter((item) => !!item);
  const id = path[1];

  switch (url) {
    case `/person/${id}`:
      res.statusCode = status.NO_CONTENT;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(persons.deletePerson(id)));
      res.end();
      break;

    default:
      res.statusCode = status.BAD_REQUEST;
      res.write(`Cannot DELETE ${url}`);
      res.end();
  }
};
