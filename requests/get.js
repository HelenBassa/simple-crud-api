const persons = require("../controllers/Persons");
const status = require("../constants");

module.exports = (req, res) => {
  const url = req.url;
  const path = url.split("/").filter((item) => !!item);
  const id = path[1];

  switch (url) {
    case "/person":
      persons.getAllPersons(res);
      break;

    case `/person/${id}`:
      persons.getPerson({ res, id });
      break;

    default:
      res.statusCode = status.NOT_FOUND;
      res.write(`Cannot GET ${url}`);
      res.end();
      break;
  }
};
