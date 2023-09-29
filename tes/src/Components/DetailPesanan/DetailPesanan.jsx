import React from "react";
import "./DetailPesanan.css";

const DetailPesanan = () => {
  return (
    <div className="d-flex justify-content-center ">
      <div className="tabelPesanan border px-5 py-5 mt-5 ">
        <h4>Detail Pesanan</h4>
        <div className="d-flex mt-4">
          <table className="col-8 me-5">
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th className="w-25">Foto</th>
              <th>Harga</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Sate Ayam</td>
              <td>
                <img src={require("../../asset/sate.jpeg")} alt="" />
              </td>
              <td>Rp 30.000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Sate Ayam</td>
              <td>
                <img src={require("../../asset/sate.jpeg")} alt="" />
              </td>
              <td>Rp 30.000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Sate Ayam</td>
              <td>
                <img src={require("../../asset/sate.jpeg")} alt="" />
              </td>
              <td>Rp 30.000</td>
            </tr>
          </table>
          <div className="border-start px-5 col-4">
            <p className="text-center fw-bold">Uang Pembeli (Rp)</p>
            <input type="text" className="form-control w-100" />
            <div className=" d-flex pt-3">
              <a href="" className="btnPay">
                Close
              </a>
              <a href="" className="btnPay">
                Pay!
              </a>
            </div>

            <p className="pt-4 fw-bold">Kembalian :</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPesanan;
