import { Router } from "express";
import { getProducts, createProducts, getProductByID, updateProducts, deleteProducts } from "../controllers/products.controller.js";

const router = Router()

router.get('/', getProducts)
router.get('/:pid', getProductByID)
router.post('/', createProducts)
router.put('/:pid', updateProducts)
router.delete('/:pid', deleteProducts)

export default router