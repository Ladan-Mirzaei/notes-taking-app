import { useState } from "react";

// import "./note.css";

export default function Login({ users }) {
  const [inputValue, setInputValue] = useState({
    name: "",
  });
  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState({
    name: "",
  });
  console.log("user", users);
  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    let hasError = false;

    const validUser = users.find((item) => item.name === inputValue.name);
    // setCurrentUser(validUser);
    if (!inputValue.name) {
      errors.name = "Name darf nicht leer sein";
      hasError = true;
    }

    // if (hasError) {
    //   setErrorMessage(errors);
    //   return;
    // }
    //   if (currentUser) {
    //     setPage("note");
    //     setInputValue({
    //       name: "",
    //     });
    //     setErrorMessage({
    //       name: "",
    //     });
    //  }
  };

  return (
    <div className="login">
      <div className="login-text">
        <p>Enter your information below</p>
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label htmlFor="name">name: </label>
            <input
              type="text"
              name="name"
              value={inputValue.name}
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
              style={{
                border: errorMessage.name ? "1px solid red" : "",
              }}
            />
            {errorMessage.name && !inputValue.name ? (
              <p>{errorMessage.name}</p>
            ) : undefined}
          </div>

          <div className="button-row">
            <button type="submit">Login</button>
          </div>
        </form>
        <h1>Fullstack Demo</h1>
        <h2>{/* Showing data from <code>{API_URL}</code> */}</h2>
        <ul>
          {users.map(({ id, name, email }) => (
            <li key={id}>
              {name} | {email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
