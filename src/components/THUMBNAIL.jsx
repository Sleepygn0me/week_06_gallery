export default function THUMBNAIL({ images, index, handleSwitchImage }) {
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
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {images.map((img, i) => (
          <img
            key={img.id}
            src={img.url}
            alt={img.alt}
            style={{
              width: 80,
              cursor: "pointer",
              border: i === index ? "2px solid red" : "2px solid transparent",
            }}
            onClick={() => handleSwitchImage(i)}
          />
        ))}
      </div>
    </>
  );
}
