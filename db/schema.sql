-- db/schema.sql
DROP DATABASE IF EXISTS trip_planner;
CREATE DATABASE trip_planner;

\c trip_planner;

DROP TABLE IF EXISTS places;
DROP TABLE IF EXISTS trips;
DROP TABLE IF EXISTS trip_places;

CREATE TABLE places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(140) NOT NULL,
    city VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    UNIQUE (name, address, city)
);

CREATE TABLE trips (
    id SERIAL PRIMARY KEY,
    name VARCHAR(140) NOT NULL,
    city VARCHAR(50),
    description TEXT,
    image TEXT
);

CREATE TABLE trip_places(
  id SERIAL PRIMARY KEY,
  is_favorite BOOLEAN DEFAULT FALSE,
  visited BOOLEAN DEFAULT FALSE,
  trip_id INTEGER REFERENCES trips (id) ON DELETE CASCADE,
  place_id INTEGER REFERENCES places (id) ON DELETE CASCADE
  );