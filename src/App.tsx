import React, { useState } from "react";
import { Note } from "./models/Note";
import "./App.css";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<string>("");

  const handleAddNote = () => {
    if (newNote.trim() === "") return;

    const note: Note = {
      id: Date.now(),
      content: newNote,
    };

    setNotes([...notes, note]);
    setNewNote("");
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Note Saving App</h1>
      <div className="note-input">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a note..."
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <ul className="note-list">
        {notes.map((note) => (
          <li key={note.id}>
            {note.content}
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
