import CartDTO from "../DAO/DTO/carts.dto.js";

export default class CartRepository {

    constructor(dao) {
        this.dao = dao
    }

    getCarts = async () => { return await this.dao.getCarts() }
    getCartById = async(cid) => { return await this.dao.getCartById(cid) }
    createCarts = async(cart) => { 
        const cartToInsert = new CartDTO(cart)
        return await this.dao.createCart(cartToInsert)
    }
    updateCarts = async (cid, cartUpdate) => {
        const cart = this.getCartById(cid)
        if (!cart) {
            throw new Error("no existe el carrito");
          }
        
        
        return await this.dao.updateCart(cid, productUpdate)
    }
    deleteCarts = async (cid) => {
        const cart = this.getCartById(cid)
        if (!cart) {
            throw new Error("no existe el carrito");
          }
        
        return await this.dao.deleteCarts(cid, cart)

    }
}