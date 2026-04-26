import { useState } from "react";
import { TextInput } from "./components/TextInput/TextInput";
import { StatsDisplay } from "./components/StatsDisplay/StatsDisplay";
import "./App.css";

function App() {
  const handleTextChange = (text: string) => {
    console.log("Received text in App: ", text);
  };
  // fake stats just to test the display
  const testStats = {
    characterCount: 50,
    wordCount: 10,
    readingTime: 1,
  };

  return (
    <>
      <h3>Character Counter App</h3>
      <TextInput onTextChange={handleTextChange} />
      <StatsDisplay stats={testStats} />
    </>
  );
}

export default App;
