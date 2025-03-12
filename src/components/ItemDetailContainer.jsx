import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { categoryId, productName } = useParams();  // Obtenemos el categoryId y productName desde la URL
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/productos.json")  // Asegúrate de que el archivo esté en public/
      .then((response) => response.json())
      .then((data) => {
        // Buscamos el producto que coincide con el nombre de la URL
        const formattedName = decodeURIComponent(productName).replace(/-/g, ' ').toLowerCase();
        const foundProduct = data.find(prod => prod.name.toLowerCase() === formattedName);
        setProducto(foundProduct);
      })
      .catch((error) => console.error("Error al cargar producto:", error))
      .finally(() => setLoading(false));
  }, [productName]);

  if (loading) return <p>Cargando detalles...</p>;

  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={producto.image} alt={producto.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>{producto.name}</h3>
          <p>{producto.description}</p>
          <p className="fw-bold" style={{ fontSize: '1.5rem' }}>Precio: ${producto.price}</p>
          <button className="btn btn-success">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
