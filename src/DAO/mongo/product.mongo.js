import ProductModel from "./models/product.mongo.model.js"

export default class Product {
    getProducts = async () => { return await ProductModel.find() }
    getProductById = async (id) => { return await ProductModel.findOne({ _id: id }) }
    createProduct = async (product) => { return await ProductModel.create(product) }
    updateProduct = async (id, product) => {
        return await ProductModel.updateOne({ _id: id }, { $set: file })
    }
}