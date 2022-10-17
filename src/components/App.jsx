import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addNote(note) {
    console.log(note);
    setItems((prevItems) => {
      return [...prevItems, note];
    });
  }

  function deleteNote(id) {
    setItems((prevItems) => {
      console.log(prevItems);
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
    console.log(items);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {items.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            text={noteItem.text}
            delete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
