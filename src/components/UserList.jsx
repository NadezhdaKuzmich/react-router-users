import Card from "./Card";

const UserList = ({ users, handleClick }) => {
  return (
    <div className="container">
      <h1>List of users:</h1>
      <div className="users-wrap">
        {users.map((user) => {
          return (
            <Card
              user={user}
              handleClick={(event) => handleClick(user, event)}
              key={user.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserList;