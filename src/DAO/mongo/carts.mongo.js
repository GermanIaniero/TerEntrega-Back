import CartModel from "./models/cart.mongo.model.js"

export default class Cart {
    getCarts = async () => { return await CartModel.find() }
    getCartById = async (id) => { return await CartModel.findOne({ _id: id }) }
    createCart = async (cart) => { return await CartModel.create(cart) }
    updateCart = async (id, cart) => {
        return await CartModel.updateOne({ _id: id }, { $set: cart })
    }
}