import React from "react";
import "./Invoice.css";

const InvoiceItem = () => {
  return (
    <div className="item">
      <div className="itemImg">
        <img src={require("../../assets/sate.jpeg")} alt="" />
      </div>
      <p>Sate Ayam</p>
      <p>x1</p>
      <p style={{ color: "#28b0ff" }}>Rp. 30.000.000</p>
    </div>
  );
};

export default InvoiceItem;
