import React, { createContext, useState } from "react";
import NoteForm from "./components/NoteForm";
import List from "./components/List";
import NoteStore from "./contexts/NoteStore";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <NoteStore>
        <List />
        <NoteForm values={{}} />
      </NoteStore>
    </div>
  );
}
