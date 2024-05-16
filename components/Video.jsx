import React from "react";

const Video = ({ videoUrl }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        left: "10px",
        width: "500px",
        height: "400px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <iframe
        title="YouTube Video"
        width="100%"
        height="100%"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
