import React, { createContext, useState } from "react";
import NoteForm from "./components/NoteForm";
import Day from "./components/Day";
import NoteStore from "./contexts/NoteStore";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <NoteStore>
        <Day />
        <NoteForm />
      </NoteStore>
    </div>
  );
}
