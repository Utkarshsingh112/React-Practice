import React, { useState } from "react";

function UserAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const createUser = async () => {
   
    if (!name || !age || !email) {
      alert("All fields are mandatory");
      return;
    }

    const url = "http://localhost:3000/users";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email }),
    });

    if (response.ok) {
      setSuccess(true);

  
      setName("");
      setAge("");
      setEmail("");

  
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="user-add">
      <h1>Add New User</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter age"
        value={age}
        required
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={createUser}>Add User</button>

      {success && (
        <p className="success-msg">✅ User added successfully!</p>
      )}
    </div>
  );
}

export default UserAdd;
