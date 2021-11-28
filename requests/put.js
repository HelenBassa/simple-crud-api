const persons = require("../controllers/Persons");
const status = require("../constants");

module.exports = (req, res) => {
  const url = req.url;
  const path = req.url.split("/").filter((item) => !!item);
  const id = path[1];

  switch (url) {
    case `/person/${id}`:
      res.statusCode = status.OK;
      res.setHeader("Content-Type", "application/json");
      let person = req.body;
      res.write(JSON.stringify(persons.editPerson(id, person)));
      res.end();
      break;

    default:
      res.statusCode = status.BAD_REQUEST;
      res.write(`Cannot PUT ${url}`);
      res.end();
      break;
  }
};
