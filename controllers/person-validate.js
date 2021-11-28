const CustomError = require("./CustomError");
const status = require("../constants");

const personValidate = (person) => {
  if (!person.hasOwnProperty("name") || typeof person.name !== "string") {
    throw new CustomError(
      "NAME is required and must be a string",
      status.BAD_REQUEST
    );
  }

  if (!person.hasOwnProperty("age") || typeof person.age !== "number") {
    throw new CustomError(
      "AGE is required and must be a number",
      status.BAD_REQUEST
    );
  }

  if (
    !person.hasOwnProperty("hobbies") ||
    !Array.isArray(person.hobbies) ||
    (person.hobbies.length &&
      !person.hobbies.every((hobby) => typeof hobby === "string"))
  ) {
    throw new CustomError(
      "HOBBIES is required and must be an array of strings",
      status.BAD_REQUEST
    );
  }
};

module.exports = personValidate;
