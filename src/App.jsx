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
      <h1>Frpg Gallery</h1>

      <THUMBNAIL
        images={images}
        index={index}
        handleSwitchImage={handleSwitchImage}
      />
      <LARGEIMAGE image={images[index]} />
      {/* <ul>
        other elements:
        <li>Method to render all images</li>
        <li>
          an event to click on the images, the event handker here is how we
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
          some codntional logic to render this element once teh user has clicked
          on teh corresponding thumbnail
        </li>
        <li></li>
      </ul> */}
    </>
  );
}
