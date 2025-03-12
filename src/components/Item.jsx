import { Link } from "react-router-dom";

const Item = ({ id, name, price, image, description }) => {
  const formattedPrice = price.toLocaleString("es-CO", { style: "currency", currency: "COP" });

  return (
    <div className="col-md-4 mb-4 d-flex align-items-stretch"> 
      <div className="card shadow-sm" style={{ width: "18rem", display: "flex", flexDirection: "column" }}>
        <img 
          src={image} 
          className="card-img-top" 
          alt={name} 
          style={{ height: "200px", width: "100%", objectFit: "contain", backgroundColor: "#f8f9fa" }} 
        />
        <div className="card-body d-flex flex-column" style={{ flexGrow: 1 }}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text flex-grow-1">
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </p> 
          <h4 className="fw-bold">{formattedPrice}</h4> 
          <Link to={`/item/${id}`} className="btn btn-primary mt-auto">Ver detalles</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
