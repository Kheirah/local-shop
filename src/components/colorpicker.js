export default function ColorPicker({ colorId, colorReturn, visible }) {
  const colors = [];
  let color = "";
  const value = { red: 0, green: 0, blue: 0, color: "000" };
  let hex = "";

  for (let r = 0; r < 16; r++) {
    value.red = r;
    for (let g = 0; g < 16; g++) {
      value.green = g;
      for (let b = 0; b < 16; b++) {
        value.blue = b;
        for (let i in ["red", "green", "blue"]) {
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
        colors.push({
          red: value.red,
          green: value.green,
          blue: value.blue,
          color: color,
        });
        color = "";
      }
    }
    console.log("colors[0]: ", colors[0]);
  }

  const handleClick = (item) => {
    colorReturn(
      colorId,
      { red: item.red, green: item.green, blue: item.blue },
      item.color
    );
    visible({ show: false, colorId: colorId });
  };

  return (
    <form className="flex flex-wrap z-10 sticky">
      {colors.map((item) => (
        <div
          style={{
            backgroundColor: `#${item.color}`,
            width: "8px",
            height: "8px",
            margin: "1px",
          }}
          onClick={handleClick(item)}
        ></div>
      ))}
      <button onClick={visible({ show: false, colorId: colorId })}>
        Cancel
      </button>
    </form>
  );
}
