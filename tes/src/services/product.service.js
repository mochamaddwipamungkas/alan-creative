import axios from "axios";

const getProducts = (callback) => {
  axios
    .get("http://localhost:3000/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getProducts;
