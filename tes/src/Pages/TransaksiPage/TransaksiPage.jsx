import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Invoice from "../../Components/Invoice/Invoice";
import CardProduct from "../../Components/CardProduct/CardProduct";
import "./TransaksiPage.css";
import getProducts from "../../services/product.service";

const TransaksiPage = () => {
  const [products, setProducts] = useState([]);
  const [bill, setBill] = useState([
    {
      id: 2,
      qty: 1,
    },
  ]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleAddProduct = useCallback((id) => {
    setBill([
      ...bill,
      {
        id,
        qty: 1,
      },
    ]);
  });

  return (
    <div className="containerPage">
      <Navbar />
      <section className="content">
        <div className="listProduk">
          <div className="listProduks">
            {products.length > 0 &&
              products.map((product) => (
                <CardProduct
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image_url}
                  handleAddProduct={handleAddProduct}
                />
              ))}
          </div>
        </div>
        <div>
          <Invoice bill={bill}>{products}</Invoice>
        </div>
      </section>
    </div>
  );
};

export default TransaksiPage;
