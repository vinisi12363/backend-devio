// app.ts
import express from "express";
import cors from "cors";
import { loadEnv } from "./config";
import { productsRoute } from "./routers/products-route";
import { ordersRoute } from "./routers/orders-route";
import { userRoute } from "./routers/user-route";
import { thermalPrinterRoute } from "./routers/printer-route";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import axios from "axios";
loadEnv();
const app = express();

const port = process.env.port || 4000;

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => {
    res.send("I'm Ok!");
  })
  .use("/products", productsRoute)
  .use("/user", userRoute)
  .use("/orders", ordersRoute)
  .use("/printer", thermalPrinterRoute)
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  setInterval(() => {
    axios
      .get(`https://devio-backend-challenge.onrender.com/health`)
      .then((response) => {
        console.log("Requisição bem-sucedida:", response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error.message);
      });
  }, 240000);
});
