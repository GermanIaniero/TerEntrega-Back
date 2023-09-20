import { productService } from "../services/index.js"

export const getProducts = async (req, res) => {
    const result = await productService.getProducts()
    res.send({ status: 'success', payload: result })
}

export const getProductByID = async (req, res) => {
    const { pid } = req.params
    const result = await productService.getProductById(pid)

    res.send({ status: 'success', payload: result })
}

export const createProducts = async (req, res) => {
    const product = req.body

    const result = await productService.saveProduct(product)
    res.send({ status: 'success', payload: result })
}

export const updateProducts = async (req, res) => {
    
}
export const deleteProducts = async (req, res) => {
    
}