import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Cangsters! Aquí encontrarás la mejor selección de ropa para hombre, desde camisetas hasta calzado. Explora nuestras categorías y encuentra tu estilo perfecto." />
    </div>
  );
};

export default App;
