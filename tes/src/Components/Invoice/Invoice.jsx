import React from "react";
import "./Invoice.css";

const Invoice = (props) => {
  const { bill, children } = props;
  console.log(children);
  return (
    <div className="invoice">
      <div className="invoiceItem">
        <div className="invoiceHeader">
          <img src={require("../../assets/account.png")} alt="" />
          <p>Pesanan</p>
        </div>
        {bill.map((item, index) => {
          const products = children.find((product) => product.id === item.id);
          return (
            <div key={index} className="item">
              <div className="itemImg">
                <img src={""} alt="" />
              </div>
              <p>asdsdf</p>
              <p>{item.qty}</p>
              <p style={{ color: "#28b0ff" }}>Rp. 489000</p>
            </div>
          );
        })}
      </div>
      <div className="invoiceButton">
        <div style={{ display: "flex" }}>
          <button className="btn btn-cart ">Clear Cart</button>
        </div>
        <div style={{ display: "flex" }}>
          <button href="" className="btn btn-saveBill">
            Save Bill
          </button>
          <button href="" className="btn btn-saveBill">
            Print Bill
          </button>
        </div>
        <div style={{ display: "flex" }}>
          <button href="" className="btn btn-charge">
            Charge Rp. 40.000
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
