import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    text: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function addItem(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({ title: "", text: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="text"
          placeholder="Take a note..."
          rows="3"
          value={note.text}
        />
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
