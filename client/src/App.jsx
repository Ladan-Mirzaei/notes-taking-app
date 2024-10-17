import "./App.css";
import { useState, useEffect } from "react";
import Notes from "./components/Notesform.jsx";
import Result from "./components/Result.jsx";

const { VITE_API_URL: API_URL } = import.meta.env;
console.log(API_URL);

function App() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState({ name: "" });
  const [nameValue, setNameValue] = useState("");
  const [page, setPage] = useState("login");
  const [userId, setUserId] = useState(null);
  const [noteData, setNoteData] = useState(null);

  useEffect(() => {
    if (!nameValue) return;

    async function loadUsers() {
      try {
        const response = await fetch(`${API_URL}/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: nameValue }),
        });
        if (!response.ok) {
          throw new Error("Data fetching error");
        }
        const data = await response.json();
        setUsers(data);
        const user = data.users[0];
        if (nameValue) {
          setUserId(user.id);
          console.log("aa", userId);
          setPage("note");
        } else {
          alert("User not found");
        }
      } catch (err) {
        console.log(err);
      }
    }

    loadUsers();
  }, [nameValue]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameValue(inputValue.name); // Trigger the useEffect to load users
  };

  return (
    <>
      {page === "login" && (
        <div className="login">
          <div className="login-text">
            <p>Enter your information below</p>
          </div>
          <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
              <div>
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  value={inputValue.name}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, name: e.target.value })
                  }
                />
              </div>
              <div className="button-row">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {page === "note" && (
        <Notes nameValue={nameValue} userId={userId} page={page} />
      )}
      {page === "result" && <Result userId={userId} noteId={noteData.noteId} />}
    </>
  );
}

export default App;
