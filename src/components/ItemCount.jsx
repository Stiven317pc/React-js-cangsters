import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-3">
        <button className="btn btn-outline-secondary" onClick={decrementar}>-</button>
        <span className="mx-3">{cantidad}</span>
        <button className="btn btn-outline-secondary" onClick={incrementar}>+</button>
      </div>
      <button className="btn btn-success" onClick={() => onAdd(cantidad)}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;
