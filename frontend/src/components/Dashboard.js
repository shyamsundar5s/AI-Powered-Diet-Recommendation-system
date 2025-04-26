import React, { useState } from "react";

const Dashboard = () => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async () => {
    const response = await fetch("/api/suggestions");
    const data = await response.json();
    setSuggestions(data);
  };

  return (
    <div>
      <button onClick={fetchSuggestions}>Get Meal Suggestions</button>
      <ul>
        {suggestions.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
