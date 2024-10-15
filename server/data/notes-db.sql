CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  tittel VARCHAR(255) NOT NULL,
  descdescription VARCHAR(255) NOT NULL
);

INSERT INTO notes (title, description) VALUES
  ('coffee', 'Ich gehe heute '),
  ('test', 'test'),
  ('test2', 'test2');
  