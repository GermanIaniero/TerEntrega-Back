import { Router } from "express";
import { getProducts, createProduct, resolveProduct, getProductByID } from "../controllers/products.controller.js";

const router = Router()

router.get('/', getProducts)
router.get('/:oid', getProductByID)
router.post('/', createProduct)
router.post('/:oid', resolveProduct)

export default router