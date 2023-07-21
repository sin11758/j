import React, { useState } from "react";

function WorkRoofReplacement() {
  const [images, setImages] = useState([
    "https://lh5.googleusercontent.com/p/AF1QipNbyd8pZKvHEJzMy9rW7CzWbhZoM2rfM5LcwdO7=w203-h135-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipO8zX17CZkPeL4M3tCEbbl8bo85z_hkFjt_aMUL=w203-h152-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipM4De632HKSglek80BFmdoeWCxzEew-5dxxt9uZ=w203-h152-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNn3pmZPZHA0fjozanDQ6S2Xa9hIQ9Yrim9fUZX=w203-h270-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipPxEjkimcp6SvCnNmh4EpJxDiu9ys7vGcR7My6F=w203-h152-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipN7YY--V7tI9FUpIki1kQKw6HxV2taex8PotqWU=w203-h152-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOcIJzN417p2-yShQQ2gg9LE3G0uqT0_hHeUPQd=w203-h152-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipNZcLAvWxXbx-Ght7EY9nCgHPCn2TXxKKKLaRC5=w203-h152-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipMaoyhTA5OreC0jGiJu9s24nduB1e8H2_Hgr81C=w203-h152-k-no",
    "https://lh5.googleusercontent.com/p/AF1QipOwqbtoaxlAXntrvBOY0YvZ9dVPQ8ygIdh6vxj4=w203-h270-k-no",

  ]);

  return (
    <section id="WorkRoofReplacement">
      <div className="WorkRoofReplacement">
        <div className="image-grid">
          {images.map((image) => (
            <img key={image} src={image} alt="roof replacement work" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkRoofReplacement;
