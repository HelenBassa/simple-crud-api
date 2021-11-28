const { v4, validate } = require("uuid");

const CustomError = require("./CustomError");
const personValidate = require("./person-validate");
const status = require("../constants");

class Persons {
  constructor() {
    this.persons = [];
  }

  getAllPersons() {
    return this.persons;
  }

  getPerson(id) {
    if (validate(id)) {
      const person = this.persons.find((person) => person.id === id);
      if (person) {
        return person;
      } else {
        throw new CustomError("Person is not exist", status.NOT_FOUND);
      }
    } else {
      throw new CustomError("Invalid UUID", status.BAD_REQUEST);
    }
  }

  addPerson(person) {
    let id = v4();
    const newPerson = { ...person, id };
    this.persons.push(newPerson);
    return newPerson;
  }

  editPerson(id, data) {
    if (validate(id)) {
      let person = this.persons.find((person) => person.id === id);
      if (person) {
        person = { ...person, ...data };
        personValidate(person);
        this.persons = this.persons.map((item) => {
          if (item.id === id) {
            return person;
          }
          return item;
        });

        return person;
      }
      throw new CustomError("Person is not exist", status.NOT_FOUND);
    } else {
      throw new CustomError("Invalid UUID", status.BAD_REQUEST);
    }
  }

  deletePerson(id) {
    if (validate(id)) {
      const person = this.persons.find((person) => person.id === id);
      if (person) {
        this.persons = this.persons.filter((person) => person.id !== id);
        return this.persons;
      }
      throw new CustomError("Person is not exist", status.NOT_FOUND);
    } else {
      throw new CustomError("Invalid UUID", status.BAD_REQUEST);
    }
  }
}

module.exports = new Persons();
