import React, { useEffect, useState } from "react";
import "./Food.css";
import { Link } from "react-router-dom";
import getProducts from "../../services/product.service";

const Food = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <div className="food ">
        <p className="py-4 ">Tambahkan menu makanan yang ada di resto.</p>
        <div className="p-5 shadow " style={{ backgroundColor: "white" }}>
          <Link to="/tambahkanmenu" className="btn-TambahMenu btn">
            + Tambah Menu
          </Link>
          <table className="w-100 mt-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th className="w-25 text-center">Foto</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td className="text-center">
                    <img src={product.image_url} alt="" />
                  </td>
                  <td>Rp {product.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Food;
