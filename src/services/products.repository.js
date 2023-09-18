import ProductDTO from "../DAO/DTO/products.dto.js";

export default class ProductRepository {

    constructor(dao) {
        this.dao = dao
    }

    getProducts = async () => { return await this.dao.getProducts() }
    getProductById = async(pid) => { return await this.dao.getProductById(pid) }
    createProduct = async(product) => { 
        const productToInsert = new ProductDTO(store)
        return await this.dao.createProduct(productToInsert)
    }
    resolveProduct = async (pid, resolve) => {
        const product = this.getProductById(pid)
        product.status = resolve
        
        return await this.dao.updateProduct(pid, product)
    }
}