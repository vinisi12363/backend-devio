import { Request, Response } from "express";
import httpStatus from "http-status";
import { ordersService } from "@/services/orders-service";

async function getAllOrders(req: Request, res: Response) {
  try {
    const result = await ordersService.getOrders();
    
    return res.status(httpStatus.OK).send(result.rows);
  } catch (error) {
    console.log("ERRO", error);
    return res.status(httpStatus.BAD_REQUEST);
  }
}

async function postOrder(req: Request, res: Response) {
  try {
    const result = await ordersService.postOrder(req.body);
    
    return res.status(httpStatus.OK).send(result.rows);
  } catch (error) {
    console.log("ERRO", error);
    return res.status(httpStatus.BAD_REQUEST);
  }
}

const deleteOrderById = async (req: Request, res: Response) => {

  try {
    const result = await ordersService.deleteOrderById(Number(req.params.numeropedido));
   
    return res.status(httpStatus.OK).send(result.rows);
  } catch (error) {
    console.log("ERRO", error);
    return res.status(httpStatus.BAD_REQUEST);
  }
};
const updateOrderById = async (req: Request, res: Response) => {
  const {numeropedido , status} = req.params;
  try {
    const result = await ordersService.updateOrderById(Number(numeropedido), status);
    
    return res.status(httpStatus.OK).send(result.rows);
  } catch (error) {
    console.log("ERRO", error);
    return res.status(httpStatus.BAD_REQUEST);
  }
}
export const ordersController = {
  getAllOrders,
  postOrder,
  deleteOrderById,
  updateOrderById
  
};
