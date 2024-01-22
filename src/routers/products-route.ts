import { Router} from "express";
import { productsController} from "@/controller/products-controller";

const productsRoute = Router();


productsRoute.get('/', productsController.getAllProducts);

export { productsRoute }