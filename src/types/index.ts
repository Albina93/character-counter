import React from "react";

// TextInput
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}
// StatsDisplay
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in miuntes
}
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

// CharacterCounter
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}
