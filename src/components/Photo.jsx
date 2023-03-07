import React from "react";

const Photo = ({ photo }) => {
  const url = photo.url;
  
  return (
    <div className="photo">
        <img src={url} alt="img" />
      <p>
        <span><b>Title:</b></span>
        <br/>
        {photo.title}
      </p>
    </div>
  );
};

export default Photo;