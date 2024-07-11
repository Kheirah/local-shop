import { useState } from "react";

export default function ColorComponentSelector({ label, value, valueReturn }) {
  const [newValue, setNewValue] = useState(value);

  const handleChange = (e) => {
    setNewValue(e.target.value);
    valueReturn(label, newValue);
  };
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="range"
        min="0"
        max="15"
        value={newValue}
        onChange={handleChange}
      ></input>
    </div>
  );
}
