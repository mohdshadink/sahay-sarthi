import React, { useState } from "react";

function ProfileForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    profession: "",
    state: "",
    numChildren: "",
    income: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert empty strings to null for optional fields
    const dataToSend = {
      age: Number(formData.age),
      gender: formData.gender || null,
      profession: formData.profession || null,
      state: formData.state || null,
      numChildren: formData.numChildren
        ? Number(formData.numChildren)
        : null,
      income: formData.income ? Number(formData.income) : null,
    };

    onSubmit(dataToSend);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input
        type="text"
        name="profession"
        placeholder="Profession"
        value={formData.profession}
        onChange={handleChange}
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
      />
      <input
        type="number"
        name="numChildren"
        placeholder="Number of Children"
        value={formData.numChildren}
        onChange={handleChange}
      />
      <input
        type="number"
        name="income"
        placeholder="Annual Income"
        value={formData.income}
        onChange={handleChange}
      />
      <button type="submit">Find Schemes</button>
    </form>
  );
}

export default ProfileForm;
