import React, { useState } from "react";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import type { CharacterCounterProps, TextStats } from "../../types";

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100,
}) => {
  // remember the stats
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  // runs every time user types
  const handleTextChange = (text: string) => {
    const characters = text.length;
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / 200);

    // now save it to state
    setStats({
      characterCount: characters,
      wordCount: words,
      readingTime: readingTime,
    });
  };

  return (
    <div>
      <h1>Character Counter App</h1>
      <TextInput onTextChange={handleTextChange} />
      <StatsDisplay stats={stats} />

      <p>Minimum words: {minWords}</p>
      <p>Maximum words: {maxWords}</p>
    </div>
  );
};
