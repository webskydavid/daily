import React from "react";
import Store from "./reducer";
import Head from "./components/Head";
import NoteForm from "./components/NoteForm";
import List from "./components/List";
import "./styles.scss";

export default function App() {
  return (
    <Store>
      <Head />
      <List />
      <NoteForm />
    </Store>
  );
}
