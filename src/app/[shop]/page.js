"use client";

import Heading from "@/components/heading";
import { useState } from "react";

export default function Page({ params }) {
  let loggedIn = true;
  const [fileList, setFileList] = useState(null);
  const [backgroundURL, setBackgroundUrl] = useState("");
  const [backgroundElement, setBackgroundElement] = useState("");

  function getMetadataForFileList(fileList) {
    for (const file of fileList) {
      // Not supported in Safari for iOS.
      const name = file.name ? file.name : "NOT SUPPORTED";
      // Not supported in Firefox for Android or Opera for Android.
      const type = file.type ? file.type : "NOT SUPPORTED";
      // Unknown cross-browser support.
      const size = file.size ? file.size : "NOT SUPPORTED";
      console.log({ file, name, type, size });
    }
  }

  const handleChange = (event) => {
    const reader = new FileReader();
    // const backgroundImage = new Image();
    try {
      setFileList(event.target.files);
      console.log("Metadata of file list:");
      getMetadataForFileList(fileList);
      const file = event.target.files[0];
      if (file) {
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
      console.log("Chunk Load Error! (Whatever that means...)");
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-30 bg-green-500 p-20 border-8 border-green-900 text-white bg-default-background">
        <Heading>Welcome to {params.shop} shop page!</Heading>
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
            <li>
              <img src={backgroundURL}></img>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
