import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const Brief = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const orderRef = doc(db, "orders", id);
    getDoc(orderRef)
      .then((res) => {
        if (res.exists()) {
          setOrder(res.data());
        } else {
          console.log("La orden no existe");
        }
      })
      .catch((error) => {
        console.error("Error obteniendo la orden: ", error);
      });
  }, [id]);

  if (!order) {
    return <h2>Cargando datos de la orden...</h2>;
  }

  return (
    <div>
      <h2>Resumen de compra</h2>
      <p><strong>Nombre:</strong> {order.buyer.nombre}</p>
      <p><strong>Teléfono:</strong> {order.buyer.telefono}</p>
      <p><strong>Email:</strong> {order.buyer.email}</p>
      <p><strong>Total:</strong> ${order.total}</p>
    </div>
  );
};

export default Brief;
