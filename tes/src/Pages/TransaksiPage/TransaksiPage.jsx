import React, { memo, useCallback, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Invoice from "../../Components/Invoice/Invoice";
import "./TransaksiPage.css";
import "../../Components/CardProduct/CardProduct.css";
import getProducts from "../../services/product.service";

const TransaksiPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
      console.log(data);
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    });
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleAddProduct = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
    setTotalPrice(0);
  };

  return (
    <div className="containerPage">
      <Navbar />
      <section className="content">
        <div className="listProduk">
          <div className="listProduks">
            {products.length > 0 &&
              products.map((product) => (
                <div
                  key={product.id}
                  className="card"
                  onClick={() => handleAddProduct(product.id)}
                >
                  <div className="cardImg">
                    <img src={product.image_url} alt="" />
                  </div>
                  <div className="cardText">
                    <p className="text-dark">{product.name}</p>
                    <p>Rp {product.price.toLocaleString()}</p>
                  </div>
                </div>
                // <CardProduct
                //   key={product.id}
                //   id={product.id}
                //   name={product.name}
                //   price={product.price}
                //   image={product.image_url}
                //   handleAddProduct={handleAddProduct}
                // />
              ))}
          </div>
        </div>
        <div>
          <div className="invoice">
            <div className="invoiceItem">
              <div className="invoiceHeader">
                <img src={require("../../assets/account.png")} alt="" />
                <p>Pesanan</p>
              </div>
              {cart.map((item, index) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                console.log(product);
                return (
                  <div key={index} className="item">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <img src={product.image_url} alt="" />
                          </td>
                          <td>{product.name}</td>
                          <td>x {item.qty}</td>
                          <td style={{ color: "#28b0ff" }}>
                            Rp. {product.price.toLocaleString()}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
            <div className="invoiceButton">
              <div style={{ display: "flex" }}>
                <button
                  className="btn btn-cart "
                  onClick={() => handleClearCart()}
                >
                  Clear Cart
                </button>
              </div>
              <div style={{ display: "flex" }}>
                <button
                  href=""
                  className="btn btn-saveBill"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Save Bill
                </button>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Apakah anda yakin untuk save bill ini ?
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button href="" className="btn btn-saveBill">
                  Print Bill
                </button>
              </div>
              <div style={{ display: "flex" }}>
                <button href="" className="btn btn-charge">
                  Rp. {totalPrice.toLocaleString()}
                </button>
              </div>
            </div>
          </div>
          {/* <Invoice cart={cart}>{products}</Invoice> */}
        </div>
      </section>
    </div>
  );
};

export default TransaksiPage;
