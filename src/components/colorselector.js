import ColorComponentSelector from "./colorComponentSelector";
import { useState } from "react";

export default function ColorSelector({
  colorId,
  value,
  colorReturn,
  visible,
}) {
  const [newValue, setNewValue] = useState(value);

  const valueReturn = (component, updatedValue) => {
    let interimValue = {
      red: newValue.red,
      green: newValue.green,
      blue: newValue.blue,
    };
    interimValue[component] = updatedValue;
    setNewValue(interimValue);
  };

  const ok = () => {
    colorReturn(colorId, newValue, color);
    visible(false);
  };

  const color = (value) => {
    for (let i in [red, green, blue]) {
      switch (value[i]) {
        case 10:
          hex = "A";
        case 11:
          hex = "B";
        case 12:
          hex = "C";
        case 13:
          hex = "D";
        case 14:
          hex = "E";
        case 15:
          hex = "F";
        default:
          hex = value[i];
      }
      color = color + hex;
    }
    return color;
  };

  return (
    <form className="flex flex-wrap z-10 sticky">
      <ColorComponentSelector
        label="red"
        value={value.red}
        valueReturn={valueReturn}
      />
      <ColorComponentSelector
        label="green"
        value={value.green}
        valueReturn={valueReturn}
      />
      <ColorComponentSelector
        label="blue"
        value={value.blue}
        valueReturn={valueReturn}
      />
      <div
        className="w-8 h-8"
        style={{ backgroundColor: `#${color(newValue)}` }}
      ></div>
      <button type="submit" onClick={ok}>
        OK
      </button>
    </form>
  );
}
