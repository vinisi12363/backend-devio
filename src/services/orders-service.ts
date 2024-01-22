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

const deleteOrderById = async (id: number) => {
    try {
        return await ordersRepository.deleteOrderById(id);
    } catch (error) {
        throw error;
    
    }
}

const updateOrderById = async (id: number , status:string) => {
    try {
        return await ordersRepository.updateOrderById(id, status);
    } catch (error) {
        throw error;
    
    }

}
export const ordersService = {

    getOrders,
    postOrder,
    getOrdersByStatus,
    deleteOrderById,
    updateOrderById
}