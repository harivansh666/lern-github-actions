const App = () => {
  const heading = {
    color: "red",
    textAlign: "center",
    fontSize: "2rem",
    margin: "20px 0",
    fontWeight: "bold", // Corrected this line
    fontFamily: "Arial, sans-serif",
  };

  return (
    <>
      <h1 style={heading}>Hello, World!</h1>;
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
        voluptatum magnam quidem doloribus facilis beatae enim? Ipsam excepturi
        illum minus libero numquam rerum, quis impedit odit facere, repudiandae
        laborum culpa!
      </p>
    </>
  );
};

export default App;
