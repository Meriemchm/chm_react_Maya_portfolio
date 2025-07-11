import React, { useRef } from "react";

const SmartVideo = ({ src }) => {
  const videoRef = useRef();

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      preload="metadata" // charge uniquement les métadonnées
      className="w-full h-auto object-cover rounded-lg hover:scale-105 duration-200"
    />
  );
};

export default SmartVideo;
