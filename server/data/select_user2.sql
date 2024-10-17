SELECT *
FROM users
INNERE JOIN notes  
ON users.note_id = notes.id
WHERE id=2;