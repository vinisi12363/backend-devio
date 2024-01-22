// app.ts
import express from 'express';
import cors from 'cors';
import { loadEnv } from './config';
import { productsRoute } from './routers/products-router';


loadEnv();
const app = express();


const port = process.env.port || 4000;

app
.use(cors())
.use(express.json())
.get("/health", (_req, res) => res.send("OK!"))
.use("/products", productsRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
