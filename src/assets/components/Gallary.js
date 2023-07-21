import React, { useEffect, useState } from "react";
import axios from "axios";
import images from "../img/replaceRoof.json";

function Gallery() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get("apiEndpoint");
//         setImages(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchImages();
//   }, [apiEndpoint]);

  return (
    <div>
      {images.map((image) => (
          <div  key={image.id}>
        <img src={image.url} alt={image.title} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
