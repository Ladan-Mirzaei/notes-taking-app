SELECT *
FROM user_note 
LEFT JOIN users  
ON user_note.userid = users.id
