const persons = require("../controllers/Persons");
const status = require("../constants");
const personValidate = require("../controllers/person-validate");

module.exports = (req, res) => {
  const url = req.url;

  switch (url) {
    case "/person":
      res.statusCode = status.CREATED;
      res.setHeader("Content-Type", "application/json");
      const person = req.body;
      personValidate(person);
      res.write(JSON.stringify(persons.addPerson(person)));
      res.end();
      break;

    default:
      res.statusCode = status.BAD_REQUEST;
      res.write(`Cannot POST ${url}`);
      res.end();
      break;
  }
};
