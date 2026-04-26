import { useState } from "react";
import { TextInput } from "./components/TextInput/TextInput";
import "./App.css";

function App() {
  const handleTextChange = (text: string) => {
    console.log("Received text in App: ", text);
  };

  return (
    <>
      <h3>Character Counter App</h3>
      <TextInput onTextChange={handleTextChange} />
    </>
  );
}

export default App;
