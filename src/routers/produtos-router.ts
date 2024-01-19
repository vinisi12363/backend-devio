import { Router} from "express";
import { produtosController} from "@/controller/produtos-controller";

const productsRoute = Router();


productsRoute.get('/', produtosController.getAllProducts);

export { productsRoute }