//large image goes here//
export default function LARGEIMAGE({ image }) {
  return (
    <>
      {image && (
        <div className="mb-4 p-4 border-2 border-gray-300 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">{image.title}</h2>
          <img
            src={image.url}
            alt={image.alt}
            className="max-w-full h-auto mx-auto mb-2"
          />
          <p className="text-gray-600">{image.alt}</p>
        </div>
      )}
    </>
  );
}
