import { db } from "../config/connectdb";

const getAllProducts = async () => {
    try {
        return await db.query('SELECT * FROM produtos;');
    } catch (error) {
        throw error;
    }
}

export const productsRepository = {
    getAllProducts
}