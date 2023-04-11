import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import UserCard from "./Components/UserCard";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  //import the useDark mode hook here
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [text, setText] = useState("");

  console.log(isDarkMode);

  function handleMode() {
    toggleDarkMode();
  }

  const handleChange = (event) => setText(event.target.value);

  return (
    // add the dark-mode class name along with App depending on the boolean value of isDarkMode
    <div
      data-testid="app-component"
      className={isDarkMode == true ? "dark-mode" : ""}
    >
      {/* to toggle the darkMode value of the application */}
      {/* Default value: Dark.  */}
      <button data-testid="theme-button" onClick={handleMode}>
        {isDarkMode == true ? "Light" : "Dark"}
      </button>

      {/* use the UserCard component here */}
      <UserCard
        name={"GAGAN"}
        imageURL={
          "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
        }
        title={"Software Developer"}
        backgroundColor={"green"}
      />

      <br />
      {/* use the Input component here */}

      <Input onChange={handleChange} variant="outline" />
      <div data-testid="input-value">Input value is {text}</div>
    </div>
  );
}

export default App;

/*
imageURL for testing;
1. https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60
2. https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60
*/
