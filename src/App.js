import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import Albums from "./components/Albums";
import Photos from "./components/Photos";
import NotFound from "./components/NotFound";

const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState();
  const [idAlbum, setidAlbum] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
      setUsers(response);
    };
    fetchData();
  }, []);

  const getAlbum = (user) => {
    setId(user.id);
  };

  const getPhoto = async (album) => {
    setidAlbum(album.id)
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<UserList users={users} handleClick={getAlbum} />}
          />
          <Route
            path="/user/:id/albums"
            element={<Albums id={id} handleClick={getPhoto} />}
          />
          <Route
            path="/user/:id/album/:id/photos"
            element={<Photos idAlbum={idAlbum} />}
          />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;