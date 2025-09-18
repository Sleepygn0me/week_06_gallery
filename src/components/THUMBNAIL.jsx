import { useState, useEffect } from "react";
import LARGEIMAGE from "./LARGEIMAGE";

export default function THUMBNAIL() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  //state to store api data "in the image component"
  //state to store index value (to nevigate between images)

  //effects
  //fetch data from api and update the data state to store the fetched data

  //function to control what index we are clicking on
  //the index represents a specific image object in the array

  //function handleSwitchImage(index){
  //setIndex(index)}

  return (
    <>
      <h1>Frog Gallery</h1>
    </>
  );
}
