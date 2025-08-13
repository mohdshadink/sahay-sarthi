import React from "react";

function SchemeCard({ scheme }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3 style={{ margin: "0 0 10px 0", color: "#2c3e50" }}>{scheme.name}</h3>
      <p style={{ margin: "5px 0", fontWeight: "bold" }}>{scheme.description}</p>
      <p style={{ margin: "5px 0", color: "#16a085" }}>Benefit: {scheme.benefit}</p>
      <a
        href={scheme.application_link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 15px",
          backgroundColor: "#2980b9",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Apply Here
      </a>
    </div>
  );
}

export default SchemeCard;
