export default function ColorPicker({ colorId, colorReturn, visible }) {
  const colors = [];
  let color = "#";
  //   const value = { red: 0, green: 0, blue: 0, color: "000" };
  const value = [0, 0, 0];
  let hex = "";

  for (let r = 0; r < 16; r++) {
    value[0] = r;
    for (let g = 0; g < 16; g++) {
      value[1] = g;
      for (let b = 0; b < 16; b++) {
        value[2] = b;
        for (let i in [0, 1, 2]) {
          switch (value[i]) {
            case 10:
              hex = "A";
              break;
            case 11:
              hex = "B";
              break;
            case 12:
              hex = "C";
              break;
            case 13:
              hex = "D";
              break;
            case 14:
              hex = "E";
              break;
            case 15:
              hex = "F";
              break;
            default:
              hex = value[i];
          }
          color = color + hex;
        }
        colors.push({
          red: value[0],
          green: value[1],
          blue: value[2],
          color: color,
        });
        color = "#";
      }
    }
    // console.log("colors[10]: ", colors[10]);
  }

  const handleClick = (event) => {
    console.log("event.target.id: ", event.target.id);
    const value = JSON.parse(event.target.id);
    colorReturn(
      colorId,
      { red: value.red, green: value.green, blue: value.blue },
      value.color
    );
    visible({ show: false, colorId: colorId });
  };

  const handleCancel = () => {
    visible({ show: false, colorId: colorId });
  };

  return (
    <form className="z-10 sticky bg-gray-300">
      <div className="flex flex-wrap border border-white bg-gray-200">
        {colors.map((item) => (
          <div
            style={{
              backgroundColor: item.color,
              width: "10px",
              height: "10px",
              border: "1px solid white",
            }}
            id={JSON.stringify(item)}
            onClick={handleClick}
          ></div>
        ))}
      </div>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  );
}
