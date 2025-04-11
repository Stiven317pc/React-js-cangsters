import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {

  const truncateDescription = (description) => {
    if (!description) return "Sin descripción disponible.";
    return description.length > 100 ? description.slice(0, 100) + '...' : description;
  };

  const formatPrice = (price) => {
    return price ? price.toLocaleString('es-CO') : "No disponible";
  };

  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col-md-4 mb-4" key={producto.id}>
          <div className="card h-100 shadow-lg">
            <div className="card-img-container" style={{ height: '300px', overflow: 'hidden' }}>
              <img
                src={producto.image || 'https://via.placeholder.com/300x300.png?text=Sin+Imagen'}
                className="card-img-top"
                alt={producto.name || 'Producto sin nombre'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{producto.name || 'Nombre no disponible'}</h5>
              <p className="card-text" style={{ flexGrow: 1 }}>
                {truncateDescription(producto.description)}
              </p>
              <p className="card-text fw-bold" style={{ fontSize: '1.25rem' }}>
                Precio: <span style={{ fontSize: '1.5rem' }}>${formatPrice(producto.price)}</span>
              </p>
              <Link to={`/item/${producto.id}`} className="btn btn-secondary">
                Ver Detalles
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
