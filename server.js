const express = require("express");
const app = express();
app.use(express.json());
const userRoute = require("./routes/userRoute");
app.use("/api", userRoute);
const productRoute = require("./routes/productRoute");
app.use("/api", productRoute);
const categoryRoute = require("./routes/categoryRoute");
app.use("/api", categoryRoute);
const shippingRoute = require("./routes/shippingRoute");
app.use("/api", shippingRoute);
const orderRoute = require("./routes/orderRoute");
app.use("/api", orderRoute);

app.listen(3500, console.log("server is runing"));

