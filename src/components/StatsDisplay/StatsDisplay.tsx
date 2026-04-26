import React from "react";
import type { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  return (
    <div className="displayStats">
      <div>
        <p>Characters</p>
        <p>{stats.characterCount}</p>
      </div>
      <div>
        <p>Words</p>
        <p>{stats.wordCount}</p>
      </div>
      {showReadingTime && (
        <div>
          <p>Reading Time</p>
          <p>{stats.readingTime} min</p>
        </div>
      )}
    </div>
  );
};
