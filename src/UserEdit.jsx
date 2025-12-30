import { useEffect, useState } from "react";
import { useParams } from "react-router";

function UserEdit() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = `http://localhost:3000/users/${id}`;
    let response = await fetch(url);
    response = await response.json();

    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  };

  return (
    <div className="user-edit">
      <h1>Edit User Details</h1>

      <input
        type="text"
        value={name}
        placeholder="Type new name"
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input
        type="text"
        value={age}
        placeholder="Type new age"
        onChange={(e) => setAge(e.target.value)}
      />

      <br />

      <input
        type="text"
        value={email}
        placeholder="Type new mail"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <button>Update User</button>
    </div>
  );
}

export default UserEdit;
