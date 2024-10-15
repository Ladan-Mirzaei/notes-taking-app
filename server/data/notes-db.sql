CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);

INSERT INTO notes (title, description) VALUES
  ('coffee', 'Ich gehe heute '),
  ('test', 'test'),
  ('test2', 'test2');
  