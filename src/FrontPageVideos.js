import React from "react";
import "./FrontPageVideos.css";
function FrontPageVideos({ src }) {
  return (
    <div classname="frontpageVideos">
      <iframe
        src={src}
        width="440"
        height="300"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default FrontPageVideos;
