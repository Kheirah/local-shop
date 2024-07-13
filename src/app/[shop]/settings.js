"use client";

import { useRouter } from "next/navigation";
import Heading from "@/components/heading";
import CloudinaryImage from "@/components/cloudinary-image";
import { useState } from "react";
import { CldImage } from "next-cloudinary";
import { CldUploadWidget } from "next-cloudinary";
import ColorPicker from "@/components/colorpicker";
import ColorSelector from "@/components/colorComponentSelector";

export default function Settings({ shopName, shopUrl }) {
  let loggedIn = true;
  const [fileList, setFileList] = useState(null);
  const [backgroundURL, setBackgroundUrl] = useState("");
  const [backgroundElement, setBackgroundElement] = useState("");
  const [fileToUpload, setFileToUpload] = useState(null);
  const [showColorSelect, setShowColorSelect] = useState(false);
  const [colorId, setColorId] = useState(0);
  const [showColorPicker, setShowColorPicker] = useState({
    show: false,
    colorId: 0,
  });
  const [colors, setColors] = useState(["#C87", "#248"]);
  const [colorComponents, setColorComponents] = useState([
    { red: 12, green: 8, blue: 7 },
    { red: 2, green: 4, blue: 8 },
  ]);
  const router = useRouter();

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
    const newColors = colors.map((color) => color);
    const newColorComponents = JSON.parse(JSON.stringify(colorComponents));
    // prevColors[i] = item;
    newColors[colorId] = hexValue;
    newColorComponents[colorId] = components;
    setColors(newColors);
    setColorComponents(newColorComponents);
    console.log("Colors set to  ", colors);
    console.log(
      "Color components set to  ",
      colorComponents[0],
      colorComponents[1]
    );
  };

  const button0function = () => {
    const visible = showColorSelect;
    setShowColorSelect(!visible);
  };

  const button1function = () => {
    setShowColorPicker({ show: true, colorId: 0 });
  };
  const button2function = () => {
    setShowColorPicker({ show: true, colorId: 1 });
  };

  async function sendImage() {
    const formData = new FormData();
    formData.append("file", fileToUpload);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    console.log(process.env.NEXT_PUBLIC_UPLOAD_PRESET);

    const upload = new Request(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
      { method: "POST", body: formData }
    );
    const response = await fetch(upload);
    console.log(response);
  }

  async function handleChangeShopName(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/api/register-shop", {
      method: "PUT",
      body: formData,
    });
    const message = await response.text();
    if (message === "success") {
      alert("Shop name changed successfully");
      event.target.reset();
      router.refresh();
    } else {
      alert("Failed to change shop name");
    }
  }

  return (
    <div
      className="p-30 bg-green-500 p-20 border-8 border-green-900 text-white bg-default-background"
      style={{ backgroundImage: `url(${backgroundURL})` }}
    >
      <Heading>Welcome to {shopName} shop page!</Heading>
      <form className="text-black" onSubmit={handleChangeShopName}>
        <label htmlFor="shopName">Shop Name:</label>
        <input
          id="shopName"
          type="text"
          name="shopName"
          placeholder="Shop Name"
        />
        <input type="hidden" name="shopUrl" value={shopUrl} />
        <button type="submit">Change Shop Name</button>
      </form>

      <button onClick={button0function}>Select Website Colors</button>
      {showColorSelect ? (
        <div>
          <ColorSelector
            value={colorComponents}
            colorId={0}
            valueReturn={colorReturn}
            visible={setShowColorSelect}
          />
          <ColorSelector
            value={colorComponents}
            colorId={1}
            valueReturn={colorReturn}
            visible={setShowColorSelect}
          />
          {showColorPicker.show ? (
            <ColorPicker
              colorId={showColorPicker.colorId}
              colorReturn={colorReturn}
              visible={setShowColorPicker}
            />
          ) : (
            <div
              style={{
                borderWidth: "8px",
                borderColor: colors[0],
                backgroundColor: colors[1],
              }}
            >
              <button style={{}} onClick={button1function}>
                Color 1 Picker
              </button>
              <button style={{}} onClick={button2function}>
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
  );
}
