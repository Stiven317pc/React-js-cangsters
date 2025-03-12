import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();  // Obtenemos el categoryId de la URL

  useEffect(() => {
    setLoading(true);
    fetch("/productos.json")  // Asegúrate de que el archivo esté en public/
      .then((response) => response.json())
      .then((data) => {
        if (categoryId) {
          const filteredProducts = data.filter((prod) => prod.category.toLowerCase() === categoryId.toLowerCase());
          setProductos(filteredProducts);
        } else {
          setProductos(data);
        }
      })
      .catch((error) => console.error("Error al cargar productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  // Función para limitar la longitud de la descripción
  const truncateDescription = (description) => {
    return description.length > 100 ? description.slice(0, 100) + '...' : description;
  };

  // Función para convertir el nombre del producto en una URL amigable (sin espacios, con guiones)
  const formatNameToURL = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  // Función para dar formato al precio con puntos (como el peso colombiano)
  const formatPrice = (price) => {
    return price.toLocaleString('es-CO');  // 'es-CO' es el código de idioma para español de Colombia
  };

  return (
    <div className="container my-5">
      {loading ? <p>Cargando productos...</p> : (
        <div className="row">
          {productos.map((producto) => (
            <div className="col-md-4 mb-4" key={producto.id}>
              <div className="card h-100 shadow-lg"> {/* Sombra añadida */}
                <div className="card-img-container" style={{ height: '300px', overflow: 'hidden' }}>
                  <img
                    src={producto.image}
                    className="card-img-top"
                    alt={producto.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',  // Cubrir la imagen sin deformarla
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{producto.name}</h5>
                  <p className="card-text" style={{ flexGrow: 1 }}>
                    {truncateDescription(producto.description)}
                  </p>
                  <p className="card-text fw-bold" style={{ fontSize: '1.25rem' }}>
                    Precio: <span style={{ fontSize: '1.5rem' }}>${formatPrice(producto.price)}</span>
                  </p>
                  <a
                    href={`/category/${producto.category}/${formatNameToURL(producto.name)}`}
                    className="btn btn-secondary"  // Botón gris
                    style={{
                      fontWeight: 'bold',
                      borderRadius: '5px',
                    }}
                  >
                    Ver Detalles
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
