

SELECT *
FROM user_note 
LEFT JOIN notes  
ON user_note.noteid = notes.id
WHERE userid=1;
