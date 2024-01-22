import { Request, Response } from "express";
import httpStatus from 'http-status';
import { productsService } from "@/services/products-service";

 async function getAllProducts(req: Request, res: Response) {
    try {
      const result = await productsService.getProducts();
      console.log("RESULT", result);
      return res.status(httpStatus.OK).send(result.rows);
    } catch (error) {
      console.log("ERRO", error);
      return res.status(httpStatus.BAD_REQUEST);
    }
  }

  export const productsController = {
    getAllProducts

  }
