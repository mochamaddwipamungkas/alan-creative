const router = require("express").Router();

const multer = require("multer");

const upload = multer({ dest: "uploads" });
const productController = require("./controller");

router.get("/products", productController.getProduct);
router.post(
  "/products",
  upload.single("image"),
  productController.createProduct
);

module.exports = router;
