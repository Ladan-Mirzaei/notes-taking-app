SELECT *
FROM  user_note  
LEFT JOIN users  
ON user_note.userid = users.id
LEFT JOIN notes  
ON user_note.noteid = notes.id
WHERE noteid=2;