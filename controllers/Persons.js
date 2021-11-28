const { v4, validate } = require("uuid");

const status = require("../constants");
const responseBuild = require("../utils/response-build");

class Persons {
  constructor() {
    this.persons = [];
  }

  getAllPersons(res) {
    responseBuild({
      res,
      code: status.OK,
      body: this.persons,
    });
  }

  getPerson({ res, id }) {
    if (validate(id)) {
      const person = this.persons.find((person) => person.id === id);
      if (person) {
        responseBuild({
          res,
          code: status.OK,
          body: person,
        });
      } else {
        responseBuild({
          res,
          code: status.NOT_FOUND,
          message: `Person with ID: ${id} isn't exist`,
        });
      }
    } else {
      responseBuild({
        res,
        code: status.BAD_REQUEST,
        message: `ID: ${id} - is invalid UUID`,
      });
    }
  }

  addPerson({ res, person }) {
    let id = v4();
    if (
      !person.hasOwnProperty("name") ||
      typeof person.name !== "string" ||
      !person.hasOwnProperty("age") ||
      typeof person.age !== "number" ||
      !person.hasOwnProperty("hobbies") ||
      !Array.isArray(person.hobbies) ||
      (person.hobbies.length &&
        !person.hobbies.every((hobby) => typeof hobby === "string"))
    ) {
      responseBuild({
        res,
        code: status.BAD_REQUEST,
        message: `All fields are required, please check them:
        NAME must be a string 
        AGE must be a number 
        HOBBIES must be an array of strings`,
      });
    } else {
      const newPerson = { ...person, id };
      responseBuild({
        res,
        code: status.CREATED,
        body: newPerson,
      });
      this.persons.push(newPerson);
      return newPerson;
    }
  }

  editPerson({ res, id, data }) {
    if (validate(id)) {
      let person = this.persons.find((person) => person.id === id);
      if (person) {
        person = { ...person, ...data };
        if (
          !person.hasOwnProperty("name") ||
          typeof person.name !== "string" ||
          !person.hasOwnProperty("age") ||
          typeof person.age !== "number" ||
          !person.hasOwnProperty("hobbies") ||
          !Array.isArray(person.hobbies) ||
          (person.hobbies.length &&
            !person.hobbies.every((hobby) => typeof hobby === "string"))
        ) {
          responseBuild({
            res,
            code: status.BAD_REQUEST,
            message: `All fields are required, please check them:
            NAME must be a string 
            AGE must be a number 
            HOBBIES must be an array of strings`,
          });
        } else {
          this.persons = this.persons.map((item) => {
            if (item.id === id) {
              return person;
            }
            return item;
          });
          responseBuild({
            res,
            code: status.OK,
            body: person,
          });
          return person;
        }
      } else {
        responseBuild({
          res,
          code: status.NOT_FOUND,
          message: `Person with ID: ${id} isn't exist`,
        });
      }
    } else {
      responseBuild({
        res,
        code: status.BAD_REQUEST,
        message: `ID: ${id} - is invalid UUID`,
      });
    }
  }

  deletePerson({ res, id }) {
    if (validate(id)) {
      const person = this.persons.find((person) => person.id === id);
      if (person) {
        this.persons = this.persons.filter((person) => person.id !== id);
        responseBuild({
          res,
          code: status.NO_CONTENT,
        });
      } else {
        responseBuild({
          res,
          code: status.NOT_FOUND,
          message: `Person with ID: ${id} isn't exist`,
        });
      }
    } else {
      responseBuild({
        res,
        code: status.BAD_REQUEST,
        message: `ID: ${id} - is invalid UUID`,
      });
    }
  }
}

module.exports = new Persons();
