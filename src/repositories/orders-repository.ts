import { db } from "@/config";
import { Order } from "../models/Order";

const getAllOrders = async () => {
    try {
        return await db.query('SELECT * FROM orders;');
    } catch (error) {
        throw error;
    }
 }
 const getOrdersByStatus = async (status: string) => {
    try {
        return await db.query('SELECT * FROM orders WHERE status = $1;', [status]);
    } catch (error) {
        throw error;
    }
 }

 const deleteOrderByStatus = async (status: string) => {
    try {
        return await db.query('DELETE FROM orders WHERE status = $1;', [status]);
    } catch (error) {
        throw error;
    }
 }
 const createOrder = async (order: Order) => {
    
    try {
        return await db.query(`
            INSERT INTO orders (
                total,
                products,
                metodoPagamento,
                troco,
                observacao,
                nomeCliente,
                status
            )
            VALUES ($1, $2::jsonb[], $3, $4, $5, $6, $7) RETURNING id;
         `, [
            order.total,
            order.products,
            order.metodoPagamento,
            order.troco,
            order.observacao,
            order.nomeCliente,
            order.status
        ]);
    } catch (error) {
        throw error;
    }
};



export const ordersRepository = {
    getAllOrders, createOrder, getOrdersByStatus, deleteOrderByStatus
}
