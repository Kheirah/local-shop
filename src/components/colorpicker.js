export default function ColorPicker({ colorReturn }) {
  const colors = [];
  let color = "";
  const value = ["", "", ""];
  let hex = "";

  for (let r = 0; r < 16; r++) {
    value[0] = r;
    for (let g = 0; g < 16; g++) {
      value[1] = g;
      for (let b = 0; b < 16; b++) {
        value[2] = b;
        for (let i = 0; i < 3; i++) {
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
        colors.push(color);
        color = "";
      }
    }
    console.log("colors[0]: ", colors[0]);
  }

  return (
    <form className="flex flex-wrap z-10 sticky">
      {colors.map((item) => (
        <div
          style={{
            backgroundColor: `#${item}`,
            width: "8px",
            height: "8px",
            margin: "1px",
          }}
          onClick={colorReturn(item)}
        ></div>
      ))}
    </form>
  );
}
