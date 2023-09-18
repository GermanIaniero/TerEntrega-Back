import { Router } from "express";
import { getCarts, createCart, resolveCart, getCartByID } from "../controllers/carts.controller.js";

const router = Router()

router.get('/', getCarts)
router.get('/:oid', getCartByID)
router.post('/', createCart)
router.post('/:oid', resolveCart)

export default router