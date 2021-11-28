# Simple CRUD API

## Install npm

`npm install`

## Run

Development mode: `npm run start:dev`

Production mode: `npm run start:prod`

## Description

### API path `/person`:

- **GET** `/person` or `/person/${personId}` should return all persons or person with corresponding `personId`

- **POST** `/person` is used to create record about new person and store it in database

- **PUT** `/person/${personId}` is used to update record about existing person

- **DELETE** `/person/${personId}` is used to delete record about existing person from database

### Persons are stored as `objects` that have following properties:

- `id` — unique identifier (`string`, `uuid`) generated on server side

- `name` — person's name (`string`, **required**)

- `age` — person's age (`number`, **required**)

- `hobbies` — person's hobbies (`array` of `strings` or empty `array`, **required**)
