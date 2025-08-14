import React, { useState } from "react";

function ProfileForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    profession: "",
    state: "",
    numChildren: "",
    income: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="text" name="profession" placeholder="Profession" value={formData.profession} onChange={handleChange} />
      <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
      <input type="number" name="numChildren" placeholder="Number of children" value={formData.numChildren} onChange={handleChange} />
      <input type="number" name="income" placeholder="Annual Income" value={formData.income} onChange={handleChange} />
      <button type="submit" style={{ padding: "10px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Find Schemes</button>
    </form>
  );
}

export default ProfileForm;
