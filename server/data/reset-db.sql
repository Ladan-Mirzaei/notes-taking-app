
DROP TABLE IF EXISTS user_note;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS notes;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  done boolean
  
);
CREATE TABLE user_note (
   PRIMARY KEY (userid,noteid),
  userid INT NOT NULL REFERENCES users(id),
  noteid INT NOT NULL REFERENCES notes(id)
  
);
INSERT INTO users (name, email) VALUES
  ('Alice', 'alice@alice.com'),
  ('Bob', 'bob@bob.com'),
  ('Charlie', 'charlie@charlie.com');
  
  INSERT INTO notes (title,description, done) VALUES
  ('Buy Coffee', 'also get some milk', FALSE),
  ('Dentist', 'appointment on friday', FALSE),
  ('Call Jeff', 'ideas for secret invention', FALSE);
  
  INSERT INTO user_note(userid,noteid)
Values(1,1),(1,2),(2,2),(3,2);