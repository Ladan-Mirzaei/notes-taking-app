SELECT *
FROM notes
LEFT JOIN users  
ON users.id = notes.user_id

