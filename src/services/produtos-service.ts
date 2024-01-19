import { produtosRepository } from "@/repositories/produtos-repository";

const getProducts = async () => {
    try {
        return await produtosRepository.getAllProducts();
    } catch (error) {
        throw error;
    }
}

export const produtosService = {

    getProducts
}