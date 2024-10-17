import { useState, useEffect } from "react";
import "./Notes.css";

const { VITE_API_URL: API_URL } = import.meta.env;
console.log(API_URL);

function Notes({ nameValue, userId }) {
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
    done: 0,
  });
  const [value, setValue] = useState({
    title: "",
    description: "",
    done: "",
    user_id: "",
  });
  const [valueResult, setValueResult] = useState({
    id: "",
    user_id: "",
  });
  const [notes, setNotes] = useState([]);
  const [resultNotes, setResultNotes] = useState([]);

  valueResult.user_id = userId;
  useEffect(() => {
    if (!value) return;
    async function loadNotes() {
      try {
        const response = await fetch(`${API_URL}/notes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: value.title,
            description: value.description,
            done: value.done,
            user_id: value.user_id,
          }),
        });
        if (!response.ok) {
          throw new Error("Data fetching error");
        }
        // const notes = data.notes[0];
        const data = await response.json();
        setInputValue({ title: "", description: "", done: 0 });
        setNotes(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadNotes();
  }, [value]);

  useEffect(() => {
    if (!userId) return;
    async function loadResult() {
      try {
        const response = await fetch(
          `${API_URL}/notes/result?user_id=${userId}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) {
          throw new Error("Data fetching error");
        }
        const dataResult = await response.json();
        setResultNotes(dataResult);
        console.log("Daten erfolgreich abgerufen:", dataResult);
      } catch (err) {
        console.log(err);
      }
    }
    loadResult();
  }, [userId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      title: inputValue.title,
      description: inputValue.description,
      done: inputValue.done,
      user_id: userId,
    });
    console.log(value);
  };

  return (
    <div>
      <h1>
        Hello, {nameValue} {userId}!
      </h1>
      <p>Fill out the form for Notes</p>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Titel:</label>
            <input
              type="text"
              name="title"
              value={inputValue.title}
              onChange={(e) =>
                setInputValue({ ...inputValue, title: e.target.value })
              }
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              cols="50"
              type="text"
              value={inputValue.description}
              onChange={(e) =>
                setInputValue({ ...inputValue, description: e.target.value })
              }
            ></textarea>
          </div>
          <div>
            <label>Is Done:</label>
            <select
              value={inputValue.done}
              onChange={(e) =>
                setInputValue({ ...inputValue, done: e.target.value })
              }
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>
          <div className="button-row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div>
        <h2>Notes List:</h2>
        <ul>
          {resultNotes.map((notes, index) => (
            <li key={index}>
              Title:{notes.title}------------- Description:{notes.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notes;
