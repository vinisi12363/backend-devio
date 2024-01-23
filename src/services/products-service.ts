import { productsRepository } from "@/repositories/products-repository";

const getProducts = async () => {
    try {
        return await productsRepository.getAllProducts();
    } catch (error) {
        throw error;
    }
}

export const productsService = {

    getProducts
}