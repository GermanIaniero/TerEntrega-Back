import ProductManager from "./product.manager.js"

export default class Product extends FileManager {
    constructor(filename = './db.product.json') {
        super(filename)
    }

    getProduct = async (query = {}) => { return await this.get(query) }
    getProductById = async (id) => { return await this.getById(id) }
    saveProduct = async (product) => { return await this.add(product) }
    updateProduct = async (id, product) => {
        product.id = id
        return await this.update(product)
    }
}