const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const productRouter = require("./app/products/routes");
const logger = require("morgan");

app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(productRouter);
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "failed",
    message: "Resource " + req.originalUrl + " Not Found",
  });
});
app.listen(process.env.PORT || 3000, () =>
  console.log("Server: http://localhost:3000")
);
