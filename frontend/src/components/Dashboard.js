import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import SchemeCard from "./SchemeCard";

function Dashboard() {
  const [matchedSchemes, setMatchedSchemes] = useState([]);

  const handleSubmit = async (formData) => {
    try {
      const res = await fetch("http://127.0.0.1:5000/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setMatchedSchemes(data.schemes || []);
    } catch (err) {
      console.error(err);
      setMatchedSchemes([]);
      alert("Error fetching schemes from backend.");
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Sahay Sarthi - Find Matching Government Schemes</h1>
      <ProfileForm onSubmit={handleSubmit} />
      {matchedSchemes.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Matching Schemes:</h2>
          {matchedSchemes.map((scheme, idx) => (
            <SchemeCard key={idx} scheme={scheme} />
          ))}
        </div>
      )}
      {matchedSchemes.length === 0 && <p style={{ marginTop: "20px" }}>No matching schemes found.</p>}
    </div>
  );
}

export default Dashboard;
