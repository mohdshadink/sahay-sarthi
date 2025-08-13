import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import SchemeCard from "./SchemeCard";

function Dashboard() {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setSchemes([]);

    try {
      const res = await fetch("http://127.0.0.1:5000/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setSchemes(data.schemes);
    } catch (err) {
      console.error(err);
      setSchemes([{ name: "Failed to fetch schemes. Please try again." }]);
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Sahay Sarthi - Find Matching Government Schemes</h1>
      <ProfileForm onSubmit={handleSubmit} />
      {loading && <p>Loading schemes...</p>}
      {schemes.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Matching Schemes:</h2>
          {schemes.map((scheme, index) => (
            <SchemeCard key={index} scheme={scheme} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
