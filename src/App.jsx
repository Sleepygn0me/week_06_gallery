//!!! split code into components
//wireframe first
import "./App.css";
import THUMBNAIL from "./components/THUMBNAIL";
export default function APP() {
  return (
    <>
      <h1>Gallery</h1>

      <THUMBNAIL />

      <ul>
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
      </ul>
    </>
  );
}
