import CartDTO from "../DAO/DTO/carts.dto.js";

export default class CartRepository {

    constructor(dao) {
        this.dao = dao
    }

    getCarts = async () => { return await this.dao.getCarts() }
    getCartById = async(cid) => { return await this.dao.getCartById(cid) }
    createCart = async(cart) => { 
        const cartToInsert = new CartDTO(cart)
        return await this.dao.createCart(cartToInsert)
    }
    resolveCart = async (cid, resolve) => {
        const cart = this.getCartById(pid)
        cart.status = resolve
        
        return await this.dao.updateCart(cid, order)
    }
}