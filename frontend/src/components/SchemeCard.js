import React from "react";

function SchemeCard({ scheme }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        backgroundColor: "#fafafa",
      }}
    >
      <h3 style={{ margin: "0 0 10px 0" }}>{scheme.name}</h3>
      <p style={{ margin: "0 0 5px 0", fontStyle: "italic", color: "#555" }}>
        {scheme.description}
      </p>
      <p style={{ margin: "5px 0", fontWeight: "bold" }}>Benefit: {scheme.benefit}</p>
      <a
        href={scheme.application_link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 12px",
          backgroundColor: "#4CAF50",
          color: "white",
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
