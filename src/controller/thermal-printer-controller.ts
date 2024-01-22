import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ordersService } from '@/services/orders-service';
const escpos = require('escpos');
const { ThermalPrinter, PrinterTypes, CharacterSet, BreakLine } = require('node-thermal-printer');
import { characterSet } from 'node-thermal-printer';


let printer = new ThermalPrinter({
    type: PrinterTypes.STAR,                                  // Printer type: 'star' or 'epson'
    interface: 'tcp://xxx.xxx.xxx.xxx',                       // Printer interface
    characterSet: characterSet.ISO8859_2_LATIN2,                  // Printer character set
    removeSpecialCharacters: false,                           // Removes special characters - default: false
    lineCharacter: "=",                                       // Set character for lines - default: "-"
    breakLine: BreakLine.WORD,                                // Break line after WORD or CHARACTERS. Disabled with NONE - default: WORD
    options:{                                                 // Additional options
      timeout: 5000                                           // Connection timeout (ms) [applicable only for network printers] - default: 3000
    }
  });
  
const printAOrder = async (req: Request, res: Response) => {
  const { numeropedido } = req.params;

  try {
    const result = await ordersService.getOrderById(Number(numeropedido));
    console.log("RESULT", result);

    if (result.rows.length === 0) {
      return res.status(httpStatus.BAD_REQUEST).send("Pedido não encontrado");
    } else {
        printer.alignCenter();
        printer.newLine();
        printer.bold(true);
        printer.println('PEDIDO #' + result.rows[0].numeropedido);
        printer.println('CLIENTE: ' + result.rows[0].nomecliente);
        printer.println('STATUS: ' + result.rows[0].status);
        printer.newLine();
        printer.bold(false);
        printer.alignLeft();
        printer.tableCustom([
            { text: 'PRODUTO: '+ result.rows[0].products[0].nome, align: 'LEFT', width: 0.5 },
            { text: 'QTD: '+ result.rows[0].products[0].quantidade, align: 'CENTER', width: 0.25 },
            { text: 'VALOR:'+result.rows[0].valor, align: 'RIGHT', width: 0.25 },
        ]);
        printer.drawLine();  
        printer.drawLine();  
        printer.newLine();
        printer.cut();  
        printer.execute();
        const data = await printer.getText();

        console.log("DATA",data);


     return res.status(200).json({ message: 'Impressão concluída com sucesso.' ,data: data });
    }

    
  } catch (error) {
    console.error(error);
    res.status(httpStatus.BAD_REQUEST).json({ error: 'Erro ao imprimir o pedido.' });
  }
}

export const therasPrinterController = {
  printAOrder
}
