import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UserList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const url = "http://localhost:3000/users";

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data);
    setLoading(false);
  };

  const deleteUser = async (id) => {
    await fetch(`${url}/${id}`, { method: "DELETE" });
    alert("User deleted successfully");
    getUserData();
  };

  const editUser = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <h1>API Data</h1>

      <ul className="user-list user-list-header">
        <li>Name</li>
        <li>Email</li>
        <li>Age</li>
        <li>Action</li>
      </ul>

      {!loading ? (
        userData.map((user) => (
          <ul key={user.id} className="user-list">
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.age}</li>
            <li>
              <button className="delete-btn delete-btn:hover" onClick={() => deleteUser(user.id)}>Delete</button>
              <button onClick={() => editUser(user.id)}>Edit</button>
            </li>
          </ul>
        ))
      ) : (
        <h1>Loading Data</h1>
      )}
    </div>
  );
}

export default UserList;
