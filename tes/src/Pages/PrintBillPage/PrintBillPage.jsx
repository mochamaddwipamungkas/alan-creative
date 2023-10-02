import { useEffect, useState } from "react";
import getProducts from "../../services/product.service";
import "./PrintBillPage.css";

const PrintBillPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayNone, setDisplayNone] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
      setTotalPrice(JSON.parse(localStorage.getItem("total")));
    });
  }, []);

  const handlePrintBill = () => {
    window.print();
  };

  return (
    <div className="d-flex justify-content-center ">
      <div className="printBill">
        <div className="invoiceItem px-3">
          <div className="invoiceHeader">
            <img src={require("../../assets/account.png")} alt="" />
            <p>Pesanan</p>
          </div>
          <div className="item border">
            <table className="text-center">
              <tbody>
                {cart.map((item, index) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  console.log(product);
                  return (
                    <tr key={index}>
                      <td>
                        <img src={product.image_url} alt="" />
                      </td>
                      <td>{product.name}</td>
                      <td>x {item.qty}</td>
                      <td className="text-end" style={{ color: "#28b0ff" }}>
                        Rp. {product.price.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-between px-3">
          <p className="fw-bold">Total Harga:</p>
          <p className="fw-bold">Rp. {totalPrice.toLocaleString()}</p>
        </div>
        <div className="mt-5">
          <div style={{ display: "flex" }}>
            <button className="btn btn-saveBill " onClick={handlePrintBill}>
              Print Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintBillPage;
