import Photo from "./Photo";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Photos = ({ idAlbum }) => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState();

  useEffect(() => {
    const getPhoto = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${idAlbum}`)
        .then((response) => response.json())
        .catch((error) => console.log(error));
        setPhotos(response);
    };
    getPhoto();
  }, [idAlbum]);
    
    if (photos !== undefined) {
    return (
      <div className="container">
        <h1>List of photos:</h1>
        <button className="btn-back" onClick={() => navigate('/user/:id/albums', { replace: false })}><span>	&#60;</span> Back</button>
        <div className="photos">
          {photos.map((photo) => {
            return <Photo photo={photo} key={photo.id}/>;
          })}
        </div>
      </div>
    );
  }
};

export default Photos;