import { useState, useEffect } from "react";

const { VITE_API_URL: API_URL } = import.meta.env;
console.log(API_URL);

function Result({ noteId, userId }) {
  const [valueResult, setValueResult] = useState({
    id: "",
    user_id: "",
  });

  setValueResult({
    id: noteId,
    user_id: userId,
  });
  useEffect(() => {
    if (!valueResult) return;
    console.log("value", valueResult);
    async function loadResult() {
      try {
        const response = await fetch(`${API_URL}/notes/result`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: valueResult.noteId,
            user_id: valueResult.user_id,
          }),
        });
        if (!response.ok) {
          throw new Error("Data fetching error");
        }
        const data = await response.json();

        console.log("aa", userId);
      } catch (err) {
        console.log(err);
      }
    }

    loadResult();
  }, [valueResult]);

  return (
    <div>
      <h1>
        Hello, {noteId} {userId}!
      </h1>
      <p>Fill out the form for Notes</p>
      <div>
        <h2>Notes List:</h2>
        {/* <ul>
          {notes.map((note, index) => (
            <li key={index}>
              {note.title}
              {note.description}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Result;
