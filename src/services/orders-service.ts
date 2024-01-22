import { ordersRepository } from "@/repositories/orders-repository";
import { Order } from "@/models/Order";

const getOrders = async () => {
    try {
        return await ordersRepository.getAllOrders();
    } catch (error) {
        throw error;
    }
}
const postOrder = async (order: Order) => {
    
    try {
        return await ordersRepository.createOrder(order);
    } catch (error) {
        throw error;
    }
}
const getOrdersByStatus = async (status: string) => {
    try {
        return await ordersRepository.getOrdersByStatus(status);
    } catch (error) {
        throw error;
    
    }
}

const deleteOrderByStatus = async (status: string) => {
    try {
        return await ordersRepository.deleteOrderByStatus(status);
    } catch (error) {
        throw error;
    
    }
}
export const ordersService = {

    getOrders,
    postOrder,
    getOrdersByStatus,
    deleteOrderByStatus
}