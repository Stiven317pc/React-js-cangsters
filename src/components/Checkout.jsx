import { useState } from "react";
import { useCart } from "./CartContext";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { Button, Container, Table, Form } from "react-bootstrap";

const Checkout = () => {
  const { cart, clearCart, totalCart } = useCart();
  const [ordersDB, setOrdersDB] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGuardarEnDB = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      Swal.fire({
        icon: "warning",
        title: "Formulario incompleto",
        text: "Por favor, completa todos los campos antes de finalizar la compra."
      });
      return;
    }

    try {
      const order = {
        buyer: formData,
        cart,
        total: totalCart(),
        createdAt: new Date()
      };
      const docRef = await addDoc(collection(db, "orders"), order);
      Swal.fire({
        icon: "success",
        title: "Compra registrada",
        text: `Tu orden es: ${docRef.id}`
      });
      clearCart();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo guardar la compra."
      });
      console.error("Error al guardar en Firestore: ", error);
    }
  };

  const handleTraerOrders = async () => {
    if (ordersDB.length > 0) {
      Swal.fire({
        icon: "info",
        title: "Órdenes ya cargadas",
        text: "Ya tienes las órdenes cargadas desde Firestore."
      });
      return;
    }

    try {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const orders = [];
      querySnapshot.forEach((doc) => {
        orders.push({ id: doc.id, ...doc.data() });
      });
      setOrdersDB(orders);

      Swal.fire({
        icon: "success",
        title: "Órdenes Cargadas",
        text: `Se trajeron ${orders.length} órdenes`
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron traer las órdenes."
      });
      console.error("Error al traer órdenes: ", error);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Checkout</h2>

      <h4 className="mb-3">Tu Carrito</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio (u)</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h5 className="mt-3">Total: ${totalCart()}</h5>

      <div className="mt-5">
        <h4>Datos para la compra:</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@email.com"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Número de contacto"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </div>

      <div className="d-flex gap-3 mt-4">
        <Button variant="success" onClick={handleGuardarEnDB}>
          Finalizar compra
        </Button>

        <Button variant="primary" onClick={handleTraerOrders}>
          Traer órdenes de Firestore
        </Button>
      </div>

      {ordersDB.length > 0 && (
        <div className="mt-5">
          <h4>Órdenes de la DB:</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Comprador</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {ordersDB.map((order) => (
                <tr key={order.id}>
                  <td>{order.buyer?.name}</td>
                  <td>{order.buyer?.email}</td>
                  <td>{order.buyer?.phone}</td>
                  <td>${order.total}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default Checkout;
