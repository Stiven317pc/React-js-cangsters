import { useCart } from "../components/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelector";


const ItemDetail = ({ item }) => {
  const { addToCart } = useCart();

  const handleAdd = (quantity) => {
    addToCart({ ...item, quantity });
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <p>Precio: ${item.price}</p>

      <ItemQuantitySelector onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetail;
