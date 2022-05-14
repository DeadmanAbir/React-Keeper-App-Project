import React from "react";

function App() {
  const [inputType, setInput] = React.useState("");
  const [arrayInput, setArrayInput] = React.useState([]);
  function write(event) {
    setInput(event.target.value);
  }
  function enter() {
    setArrayInput((event) => {
      return [...event, inputType];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={write} type="text" value={inputType} />
        <button onClick={enter}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul id="list">
          {arrayInput.map((input) => {
            return <li>{input}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
