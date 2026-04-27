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
        <p style={{ textAlign: "center", color: "black", fontWeight: "bold" }}>
          {stats.characterCount}
        </p>
      </div>
      <div>
        <p>Words</p>
        <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
          {stats.wordCount}
        </p>
      </div>
      {showReadingTime && (
        <div>
          <p>Reading Time</p>
          <p
            style={{ textAlign: "center", color: "black", fontWeight: "bold" }}
          >
            {stats.readingTime} min
          </p>
        </div>
      )}
    </div>
  );
};
