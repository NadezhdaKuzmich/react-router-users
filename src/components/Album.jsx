import { Link } from 'react-router-dom';

const Album = ({ album, handleClick }) => {
  
  return (
    <div className="album">
      <h3>Albom #{album.id}</h3>
      <p><span><b>Title:</b></span>
        <br/>
        {album.title}
      </p>
      <Link to={`/user/${album.userId}/album/${album.id}/photos`}  className="btn" onClick={handleClick}>Photos</Link>
    </div>
  );
};

export default Album;