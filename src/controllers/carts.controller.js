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

export const saveCarts = async (req, res) => {
    const cart = req.body

    const result = await cartService.saveCart(cart)
    res.send({ status: 'success', payload: result })
}