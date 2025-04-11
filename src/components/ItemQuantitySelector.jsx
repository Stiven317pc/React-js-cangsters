import { useState } from "react";

const ItemQuantitySelector = ({ onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAdd = () => {
    onAdd(quantity);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "24px", marginBottom: "10px" }}>
        <button onClick={decrement} style={{ fontSize: "24px", margin: "5px" }}>
          -
        </button>

        <span style={{ margin: "0 10px" }}>{quantity}</span>

        <button onClick={increment} style={{ fontSize: "24px", margin: "5px" }}>
          +
        </button>
      </div>

      <button onClick={handleAdd} style={{ padding: "10px 20px", fontSize: "18px", background: "green", color: "white", border: "none", borderRadius: "5px" }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
