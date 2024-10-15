import "./App.css";
import { useState, useEffect } from "react";

const { VITE_API_URL: API_URL } = import.meta.env;

function App() {
  const [users, setUsers] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(`${API_URL}/users`);
        if (!response.ok) {
          throw new Error("Data fetching error");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
        alert("An error occured");
      }
    }
    loadUsers();
  }, []);

  // useEffect(() => {
  //   async function loadNotes() {
  //     try {
  //       const response = await fetch(`${API_URL}/notes`);
  //       if (!response.ok) {
  //         throw new Error("Data fetching error");
  //       }
  //       const data = await response.json();
  //       setNotes(data);
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //       alert("An error occured");
  //     }
  //   }
  //   loadNotes();
  // }, []);

  return (
    <>
      <h1>Fullstack Demo</h1>
      <h2>
        Showing data from <code>{API_URL}</code>
      </h2>
      <ul>
        {users.map(({ id, name, email }) => (
          <li key={id}>
            {name} | {email}
          </li>
        ))}
      </ul>

      {/* <ul>
        {notes.map(({ id, title, description }) => (
          <li key={id}>
            {title} | {description}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default App;
