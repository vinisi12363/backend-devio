import { Router } from "express";
import { ordersController } from "@/controller/orders-controller";

const ordersRoute = Router();

ordersRoute.get('/', ordersController.getAllOrders);
ordersRoute.post('/', ordersController.postOrder);
ordersRoute.get('/:status', ordersController.getOrdersByStatus);
ordersRoute.delete('/:status', ordersController.deleteOrderByStatus);

export { ordersRoute }

