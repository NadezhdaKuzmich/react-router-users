import Album from "./Album";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Albums = ({ id, handleClick }) => {
  const navigate = useNavigate();
  const [albums, setAlbum] = useState();

  useEffect(() => {
    console.log();
    const getAlbum = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then((response) => response.json())
        .catch((error) => console.log(error));
        setAlbum(response);
    };
    getAlbum();
  }, [id]);
    
    if (albums !== undefined) {
    return (
      <div className="container">
        <h1>List of albums:</h1>
        <button className="btn-back" onClick={() => navigate('/', { replace: false })}><span>	&#60;</span> Back</button>
        <div className="albums">
          {albums.map((album) => {
            return <Album album={album} key={album.id} handleClick={(() => handleClick(album))}/>;
          })}
        </div>
      </div>
    );
  }
};

export default Albums;