import React, { useRef } from "react";

const SmartVideo = ({ src, poster }) => {
  const videoRef = useRef();

  return (
    <div data-aos="fade-up">
      {" "}
      <video
        ref={videoRef}
        src={src}
        controls
        preload="metadata" // charge uniquement les métadonnées
        poster={poster}
        className="w-full h-96 object-cover rounded-lg hover:scale-105 duration-200"
      />
    </div>
  );
};

export default SmartVideo;
