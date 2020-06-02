import React from "react";
import ImageCard from "./ImageCard";
import { Data } from "../mock-sever/data";

export default function ImagesContainer() {
  return (
    <div className="imageContainer">
      {Data.map((imageData, idx) => {
        return <ImageCard imageData={imageData} key={idx} />;
      })}
    </div>
  );
}
