import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase-config';
import ItemList from './ItemList'; 

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      try {
        const productosRef = collection(db, 'productos');
        let q;
        if (categoryId) {
          q = query(productosRef, where("category", "==", categoryId));
        } else {
          q = productosRef;
        }

        const querySnapshot = await getDocs(q);
        const productosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoryId]);

  return (
    <div className="container my-5">
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList productos={productos} /> 
      )}
    </div>
  );
};

export default ItemListContainer;
