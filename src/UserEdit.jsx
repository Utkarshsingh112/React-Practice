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
    const res = await fetch(`http://localhost:3000/users/${id}`);
    const data = await res.json();

    setName(data.name);
    setAge(data.age);
    setEmail(data.email);
  };

  const updateUser = async () => {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email }),
    });

    if (res.ok) {
      alert("User updated successfully");
    }
  };

  return (
    <div className="user-edit">
      <h1>Edit User</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default UserEdit;
