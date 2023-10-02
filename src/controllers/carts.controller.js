import { cartService } from "../services/index.js"

export const getCarts = async (req, res) => {
    const result = await cartService.getCarts()
    res.send({ status: 'success', payload: result })
}

export const getCartByID = async (req, res) => {
    const { cid } = req.params
    const result = await cartService.getCartById(cid)

    res.send({ status: 'success', payload: result })
}

export const createCarts = async (req, res) => {
    const cart = req.body

    const result = await cartService.createCarts(cart)
    res.send({ status: 'success', payload: result })
}
export const updateCarts = async (req, res) => {
        const pid = req.params.pid
        const cid = req.params.cid 
        const quantity = parseInt(req.body.quantity)
        const carts2 = {pid, quantity}
        const result = await cartService.updateCarts(cid, carts2)
        res.send({ status: 'success', payload: result })
    }
export const deleteCarts = async (req, res) => {
    const pid = req.params.pid
    const cid = req.params.cid 
    const quantity = parseInt(req.body.quantity)
    const carts2 = {pid, quantity}
    const result = await cartService.deleteCarts(cid, carts2)
    res.send({ status: 'success', payload: result })
}