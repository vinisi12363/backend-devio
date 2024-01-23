import { Product} from "./Product";


export type Order = {
    total: number;
    products: Product[];
    metodoPagamento: "dinheiro" | "cartão" | "pix"| null ;
    troco: number;
    observacao: string | null;
    nomeCliente: string;
    numeroPedido:number;
    status: "preparando" | "pronto" | "entregue" | "cancelado" | null;
 }