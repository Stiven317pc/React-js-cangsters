import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const CartPage = () => {
  const { cart, removeItem, clearCart, totalCart } = useCart();

  const handleRemove = (id) => {
    Swal.fire({
      title: "¿Seguro que quieres eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(id);
        Swal.fire("Eliminado!", "El producto fue eliminado del carrito.", "success");
      }
    });
  };

  const handleClearCart = () => {
    Swal.fire({
      title: "¿Vaciar carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("¡Carrito vaciado!", "", "success");
      }
    });
  };

  if (cart.length === 0) {
    return (
      <Container className="my-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al catálogo
        </Link>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Tu Carrito</h2>

      <Table striped bordered hover responsive className="shadow">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>${prod.price}</td>
              <td>{prod.quantity}</td>
              <td>${prod.price * prod.quantity}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleRemove(prod.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="text-end">
        <h4>Total: ${totalCart()}</h4>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <Button variant="danger" onClick={handleClearCart}>
          Vaciar carrito
        </Button>

        <Link to="/checkout" className="btn btn-success">
          Finalizar compra
        </Link>
      </div>
    </Container>
  );
};

export default CartPage;
