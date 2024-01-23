// app.ts
import express from 'express';
import cors from 'cors';
import { loadEnv } from './config';
import { productsRoute } from './routers/products-route';
import { ordersRoute } from './routers/orders-route';
import { thermalPrinterRoute } from './routers/printer-route';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';


loadEnv();
const app = express();


const port = process.env.port || 4000;

app
.use(cors())
.use(express.json())
.get("/health", (_req, res) => res.send("OK!"))
.use("/products", productsRoute)
.use("/orders", ordersRoute)
.use("/printer", thermalPrinterRoute)
.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
