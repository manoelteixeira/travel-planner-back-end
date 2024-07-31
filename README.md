# travel-planner-back-end

Back end for travel planner app

## Instalation And Setup

1. **Fork** and **Clone** this repository
2. Create a **.env** with:
    - `PORT=<server port>`
    - `PG_HOST=<database url>`
    - `PG_PORT=5432`
    - `PG_DATABASE=trip_planner`
    - `PG_USER=postgres`
3. Install project dependencies with `npm install`

## Commands

- `npm run start`: to run the server
- `npm run watch`: to run the server using nodemon
- `npm run db:init`: to initialize the database
- `npm run db:seed`: to seed the database
- `npm run dev`: to initialize and seed the databa

## Endpoints

|  #  |    URL     | HTTP Verb |    CRUD    |              Description               |
| :-: | :-------- | :------- | :-------- | :------------------------------------ |
| 1 | `/places` | GET | **R**ead | Get a list of all places |
| 2 | `/places/:id` | GET | **R**ead | Get an inividual place |
| 3 | `/places` | POST | **C**reate | Create a new place |
| 4 | `/places/:id` | DELETE | **D**elete | Delete a place |
| 5 | `/places/:id` | PUT | **U**pdate | Update a place |
| 6 | `/trips` | GET | **R**ead | Get a list of all trips |
| 7 | `/trips/:id` | GET | **R**ead | Get an inividual trip |
| 8 | `/trips` | POST | **C**reate | Create a new trip |
| 9 | `/trips/:id` | DELETE | **D**elete | Delete a trip |
| 10 | `/trips/:id` | PUT | **U**pdate | Update a trip |
| 11 | `/trips/:id/places` | GET | **R**ead | Get a list of all places for an individual trip |
| 12 | `/trips/:id/places/:id` | GET | **R**ead | Get an inividual place for an individual trip |
| 8 | `/trips:id/places` | POST | **C**reate | Add a place to an individual trip |
| 9 | `/trips/:id/places/:id` | DELETE | **D**elete | Delete a place of an individual trip |
| 10 | `/trips/:id` | PUT | **U**pdate | Update a place of an individual trip |
