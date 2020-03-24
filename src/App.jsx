import React from "react";
import Store from "./reducer";
import Head from "./components/Head/Head";
import NoteForm from "./components/Form/Form";
import List from "./components/List/List";
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
