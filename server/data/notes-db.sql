DROP TABLE IF EXISTS user_note;
DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) ,
  done boolean,
  user_id INT
);

INSERT INTO users (name, email) VALUES
  ('Alice', 'alice@alice.com'),
  ('Bob', 'bob@bob.com'),
  ('Charlie', 'charlie@charlie.com');
  
  INSERT INTO notes (title,description,done,user_id) VALUES
  ('Buy Coffee', 'also get some milk', FALSE,2),
  ('Dentist', 'appointment on friday', FALSE,1),
  ('Call Jeff', 'ideas for secret invention', FALSE,1);
  
 