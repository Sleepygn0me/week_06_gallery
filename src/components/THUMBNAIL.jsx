import "./THUMBNAIL.css";
export default function THUMBNAIL({ images, index, handleSwitchImage }) {
  return (
    <>
      <section className="thumbnail-section">
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {images.map((img, i) => (
            <img
              key={img.id}
              src={img.url}
              alt={img.alt}
              tabIndex={0}
              style={{
                width: 80,
                cursor: "pointer",
                border: i === index ? "2px solid red" : "2px solid transparent",
              }}
              onClick={() => handleSwitchImage(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSwitchImage(i);
                }
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
