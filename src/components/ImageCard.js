import React from "react";

import ImageControls from "./ImageControls";
export default function ImageCard({ imageData }) {
  return (
    <div className="imageCard">
      <img
        className="singleImage"
        src={require(`../mock-sever/images/${imageData.name}.jpeg`)}
        alt={imageData.alt}
      />

      <ImageControls />
    </div>
  );
}
