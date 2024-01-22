import { Router } from "express";
import { therasPrinterController } from "@/controller/thermal-printer-controller";

const thermalPrinterRoute = Router();

thermalPrinterRoute.get("/:numeropedido", therasPrinterController.printAOrder);

export { thermalPrinterRoute };