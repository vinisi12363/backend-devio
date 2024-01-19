import { Request, Response } from "express";
import httpStatus from 'http-status';
import { produtosService } from "@/services/produtos-service";

 async function getAllProducts(req: Request, res: Response) {
    try {
      const result = await produtosService.getProducts();
      console.log("RESULT", result);
      return res.status(httpStatus.OK).send(result);
    } catch (error) {
      console.log("ERRO", error);
      return res.status(httpStatus.BAD_REQUEST);
    }
  }

  export const produtosController = {
    getAllProducts

  }
