//!!! split code into components
//wireframe first
import "./App.css";
import THUMBNAIL from "./components/THUMBNAIL";
import LARGEIMAGE from "./components/LARGEIMAGE";
import { useState, useEffect } from "react";

export default function APP() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await fetch(import.meta.env.VITE_WEEK6_API);
      const data = await response.json();
      setImages(data);
    }
    getData();
  }, []);

  function handleSwitchImage(newIndex) {
    setIndex(newIndex);
  }

  return (
    <>
      <div className="title-div">
        <h1 className="flex justify-center text-4xl font-bold">Frog Gallery</h1>
      </div>
      <THUMBNAIL
        images={images}
        index={index}
        handleSwitchImage={handleSwitchImage}
      />

      <LARGEIMAGE image={images[index]} />
    </>
  );
}
