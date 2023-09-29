import React from "react";
import "./TambahkanMenu.css";

import Navbar from "../Navbar/Navbar";

const TambahkanMenu = () => {
  return (
    <div className="containerPage">
      <Navbar />
      <div className="tambahkanMenu mt-5">
        <div className="p-5 shadow" style={{ backgroundColor: "white" }}>
          <p className="fs-5 fw-bold formTitle">Tambahkan Menu</p>
          <form action="">
            <label htmlFor="name">Nama Menu</label>
            <input type="text" className="form-control mt-2" />
            <label htmlFor="foto" className="mt-4">
              Foto Menu
            </label>
            <div className="formFotoMenu text-center mt-2">
              <img src={require("../../assets/upload.png")} alt="" />
              <p>drag and drop a file here or click</p>
            </div>
            <label htmlFor="name" className="mt-4">
              Harga Menu
            </label>
            <div className="formHarga d-flex mt-2">
              <p className="">Rp</p>
              <input type="text" className="form-control" />
            </div>
            <div className="text-end mt-4">
              <button className="btn btn-simpan">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TambahkanMenu;
