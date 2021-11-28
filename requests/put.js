const persons = require("../controllers/Persons");
const status = require("../constants");

module.exports = (req, res) => {
  const url = req.url;
  const path = req.url.split("/").filter((item) => !!item);
  const id = path[1];

  switch (url) {
    case `/person/${id}`:
      const data = req.body;
      persons.editPerson({ res, id, data });
      break;

    default:
      res.statusCode = status.NOT_FOUND;
      res.write(`Cannot PUT ${url}`);
      res.end();
      break;
  }
};
