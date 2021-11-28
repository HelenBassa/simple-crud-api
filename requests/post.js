const persons = require("../controllers/Persons");
const status = require("../constants");

module.exports = (req, res) => {
  const url = req.url;

  switch (url) {
    case "/person":
      const person = req.body;
      persons.addPerson({ res, person });
      break;

    default:
      res.statusCode = status.NOT_FOUND;
      res.write(`Cannot POST ${url}`);
      res.end();
      break;
  }
};
