import CartModel from "./models/carts.mongo.model.js"

export default class Cart {
   
    getCarts = async () => { return await CartModel.find() }
    getCartById = async (id) => { return await CartModel.findOne({ _id: id }) }
    createCarts = async (cart) => { return await CartModel.create(cart) }
    updateCarts = async (id, cart) => {
        console.log("mongo", cart)
        return await CartModel.updateOne({ _id: id }, { $set: cart })
    }
    deleteCarts= async (id) => {
            return await CartModel.deleteOne({ _id: id })
    }
    
    
}