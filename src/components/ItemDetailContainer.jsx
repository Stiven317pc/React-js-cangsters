import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { CartContext } from '../components/CartContext';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  useEffect(() => {
    const fetchProducto = async () => {
      setLoading(true);
      try {
        const productoRef = doc(db, 'productos', id);
        const productoSnap = await getDoc(productoRef);

        if (productoSnap.exists()) {
          setProducto({ id: productoSnap.id, ...productoSnap.data() });
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al cargar producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  const handleAddToCart = () => {
    const productoConCantidad = {
      ...producto,
      quantity: selectedQuantity,
      total: producto.price * selectedQuantity,
    };
  
    addToCart(productoConCantidad);
  
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
      text: `${producto.name} (${selectedQuantity}) añadido al carrito`,
      timer: 1500,
      showConfirmButton: false,
      position: 'top-end',
      toast: true,
      background: '#4caf50',
      color: 'white',
    });
  };

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
          <p className="fw-bold" style={{ fontSize: '1.5rem' }}>
            Precio: ${producto.price.toLocaleString('es-CO')}
          </p>

          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-secondary" onClick={() => setSelectedQuantity(prev => Math.max(prev - 1, 1))}>-</button>
            <span style={{ fontSize: '1.2rem' }}>{selectedQuantity}</span>
            <button className="btn btn-outline-secondary" onClick={() => setSelectedQuantity(prev => prev + 1)}>+</button>
          </div>

          <button className="btn btn-success mt-3" onClick={handleAddToCart}>
            Añadir {selectedQuantity} al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
