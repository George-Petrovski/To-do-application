import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;

    setInputText(newValue);
  }

  function search(event) {
    if (event.keyCode === 13) {
      document.getElementById("addToDo").click();
    }
  }

  return (
    <div className="form">
      <input onKeyDown={search} onChange={handleChange} type="text" value={inputText} />
      <button
        id="addToDo"
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
