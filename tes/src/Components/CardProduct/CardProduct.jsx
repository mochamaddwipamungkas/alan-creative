import React from "react";
import "./CardProduct.css";

const CardProduct = (props) => {
  const { name, price, image, handleAddProduct, id } = props;

  return (
    <div className="card" onClick={() => handleAddProduct(id)}>
      <div className="cardImg">
        <img src={image} alt="" />
      </div>
      <div className="cardText">
        <p className="text-dark">{name}</p>
        <p>Rp {price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CardProduct;
