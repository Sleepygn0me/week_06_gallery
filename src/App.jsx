//!!! split code into components
//wireframe first
import "./App.css";
import THUMBNAIL from "./components/THUMBNAIL";
import LARGEIMAGE from "./components/LARGEIMAGE";
import { useState, useEffect } from "react";

export default function APP() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(null);

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
      <h1>Frog Gallery</h1>

      <THUMBNAIL
        images={images}
        index={index}
        handleSwitchImage={handleSwitchImage}
      />

      {/* <ul>
        other elements:
        <li>Method to render all images</li>
        <li>
          an event to click on the images, the event handler here is how we
          handle switching images
        </li>
        <li>
          this is a container for my larger images this container is
          CONDTIONALLY RENDERED
        </li>
      </ul>

      <ul>
        <li>element to contianer the larger images</li>
        <li>
          some condtional logic to render this element once the user has clicked
          on th corresponding thumbnail
        </li>
        <li></li>
      </ul> */}
    </>
  );
}
