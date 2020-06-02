import React from "react";

export default function ImageControls() {
  return (
    <div className="image-controls">
      <i className="image-controls__icon fa fa-download"></i>
      <i className="image-controls__icon fa fa-share"></i>
      {/* <img
        className="image-controls__icon"
        src={require("../icons/download.svg")}
        alt="download-icon"
      ></img> */}
    </div>
  );
}
