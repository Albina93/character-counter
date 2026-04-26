import React from "react";
import type { TextInputProps } from "../../types";

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(event.target.value); // sends text UP to a parent
  };

  return (
    <div className="textInput">
      <textarea
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={handleChange}
        rows={6}
      ></textarea>
    </div>
  );
};
