import React from "react";

const App = () => {
  const heading = {
    color: "red",
    textAlign: "center",
    fontSize: "2rem",
    margin: "20px 0",
    fontWeight: "bold", // Corrected this line
    fontFamily: "Arial, sans-serif",
  };

  return <h1 style={heading}>Hello, World!</h1>;
};

export default App;
