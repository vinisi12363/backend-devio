import { Router } from "express";
import { ordersController } from "@/controller/orders-controller";

const ordersRoute = Router();

ordersRoute.get('/', ordersController.getAllOrders);
ordersRoute.post('/', ordersController.postOrder);
ordersRoute.delete('/:numeropedido', ordersController.deleteOrderById);
ordersRoute.put('/:numeropedido/:status', ordersController.updateOrderById);


export { ordersRoute }


