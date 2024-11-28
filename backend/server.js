const express = require("express");
const app = express();
const userRoute = require("./Routes/userRoute");
const productRoute = require("./Routes/productRoute");
const orderRoute = require("./Routes/orderRoute");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
const cors = require("cors");
const seeder = require("./seeder");
const uploadRoute = require("./Routes/uploadRoute");

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/upload", uploadRoute);
app.use("/api", userRoute);
app.use("/api", productRoute);
app.use("/api", orderRoute);

connectDb();
//seeder();
const port = process.env.SERVER_PORT;
app.listen(port, (error) => {
    if (error) {
        console.log("There is a problem");
    } else {
        console.log(`Server is running on ${port}`);
    }
});
