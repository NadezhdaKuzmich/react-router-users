import { Link } from 'react-router-dom';

const Card = ({ user, handleClick }) => {

  return (
      <div className="user">
        <h2>{user.name}</h2>
        <p style={{ color: "gray", fontStyle: "italic" }}>@{user.username}</p>
        <ul>
            <li><span><b>Email:</b></span> {user.email}</li>
            <li><span><b>Phone:</b></span> {user.phone}</li>
            <li><span><b>Company:</b></span> {user.company.name}</li>
        </ul>
        <Link to={`/user/${user.id}/albums`} className="btn" onClick={handleClick}>Album</Link>
      </div>
    );
};

export default Card;