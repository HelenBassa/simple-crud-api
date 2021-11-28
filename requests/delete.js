const persons = require("../controllers/Persons");
const status = require("../constants");

module.exports = (req, res) => {
  const url = req.url;
  const path = req.url.split("/").filter((item) => !!item);
  const id = path[1];

  switch (url) {
    case `/person/${id}`:
      persons.deletePerson({ res, id });
      break;

    default:
      res.statusCode = status.NOT_FOUND;
      res.write(`Cannot DELETE ${url}`);
      res.end();
  }
};
