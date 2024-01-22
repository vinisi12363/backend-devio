import { db } from "@/config";


const getAllOrders = async () => {
    try {
        return await db.query('SELECT * FROM orders;');
    } catch (error) {
        throw error;
    }
 }

export const ordersRepository = {
    getAllOrders
}