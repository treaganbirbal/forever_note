
DROP DATABASE IF EXISTS forevernote;
CREATE DATABASE forevernote;

\c forevernote;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password_digest VARCHAR NOT NULL
);

CREATE TABLE note_books (
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  author INTEGER REFERENCES users(id) ON DELETE SET NULL
);


CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  body TEXT,
  notebook_id INTEGER REFERENCES note_books(id) ON DELETE CASCADE
);

INSERT INTO users(name, email, password_digest)VALUES('trey', 'trey123@gmail.com', '1234')
