"use client";

import Heading from "@/components/heading";
import CloudinaryImage from "@/components/cloudinary-image";
import { useState } from "react";
import { CldImage } from "next-cloudinary";
import { CldUploadWidget } from "next-cloudinary";
import ColorPicker from "@/components/colorpicker";
import ColorSelector from "@/components/colorComponentSelector";

export default function Page({ params }) {
  let loggedIn = true;
  const [fileList, setFileList] = useState(null);
  const [backgroundURL, setBackgroundUrl] = useState("");
  const [backgroundElement, setBackgroundElement] = useState("");
  const [fileToUpload, setFileToUpload] = useState(null);
  const [colorSelect, toggleColorSelect] = useState(false);
  const [showColorPicker, toggleShowColorPicker] = useState({
    show: false,
    colorId: 0,
  });
  const [colors, setColors] = useState(["#C87", "#248"]);
  const [colorComponents, setColorComponents] = useState([
    { red: 12, green: 8, blue: 7 },
    { red: 2, green: 4, blue: 8 },
  ]);

  const handleChange = (event) => {
    const reader = new FileReader();
    // const backgroundImage = new Image();
    try {
      setFileList(event.target.files);
      // console.log("Metadata of file list:");
      //   getMetadataForFileList(fileList);
      const file = event.target.files[0];
      if (file) {
        setFileToUpload(file);
        reader.readAsDataURL(file);
        reader.onload = (loadEvent) => {
          setBackgroundUrl(loadEvent.target.result);
          //   const url = loadEvent.target.result;
        };
        const backgroundImage = new Image(
          document.getElementsByTagName("img").item(0)
        );
        console.log(
          document.getElementsByTagName("img").length,
          "Bilder im DOM gefunden"
        );
        console.log("Hintergrund-URL: ", backgroundURL);
        backgroundImage.src = backgroundURL;
        console.log("Hintergrund-Element: ", backgroundImage.src);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const colorReturn = (colorId, components, hexValue) => {
    const newColors = JSON.parse(JSON.stringify(colors));
    const newColorComponents = JSON.parse(JSON.stringify(colorComponents));
    // prevColors[i] = item;
    newColors[colorId] = hexValue;
    newColorComponents[colorId] = components;
    setColors(newColors);
    setColorComponents(newColorComponents);
  };

  async function sendImage() {
    const formData = new FormData();
    formData.append("file", fileToUpload);
    formData.append("upload_preset", process.env.UPLOAD_PRESET);
    console.log(process.env.UPLOAD_PRESET);

    const upload = new Request(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
      { method: "POST", body: formData }
    );
    const response = await fetch(upload);
    console.log(response);
  }

  const handleToggleColorPicker = () => {};

  return (
    <>
      <div
        className="p-30 bg-green-500 p-20 border-8 border-green-900 text-white bg-default-background"
        style={{ backgroundImage: `url(${backgroundURL})` }}
      >
        <Heading>Welcome to {params.shop} shop page!</Heading>
        <button onClick={toggleColorSelect(true)}>Select Website Colors</button>
        {colorSelect ? (
          <div>
            {/* <ColorPicker
            // style={{
            //   display: "flex",
            //   flexWrap: "wrap",
            //   position: "sticky",
            //   zIndex: "10",
            // }}
            colorReturn={colorReturn}
            // color={0}
          /> */}
            <ColorSelector
              value={colorComponents}
              colorId={0}
              colorReturn={colorReturn}
              visible={toggleColorSelect}
            />
            <ColorSelector
              value={colorComponents}
              colorId={1}
              colorReturn={colorReturn}
              visible={toggleColorSelect}
            />

            {showColorPicker ? (
              <ColorPicker colorId={showColorPicker.colorId} />
            ) : (
              <div>
                <button
                  onClick={toggleShowColorPicker({ show: true, colorId: 0 })}
                >
                  Color 1 Picker
                </button>
                <button
                  onClick={toggleShowColorPicker({ show: true, colorId: 1 })}
                  colorReturn={colorReturn}
                  visible={toggleShowColorPicker}
                >
                  Color 2 Picker
                </button>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
        {loggedIn ? (
          <ul className="flex flex-col">
            <li>
              <p>Hintergrund ändern: </p>
            </li>
            <li>
              <input
                type="file"
                id="file-selector"
                accept=".jpg, .jpeg, .png"
                onChange={handleChange}
              />
            </li>
            <li>{/* <img src={backgroundURL}></img> */}</li>
            <li>
              <button onClick={sendImage}>übernehmen</button>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
