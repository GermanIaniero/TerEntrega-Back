import { Router } from "express";
import { getCarts, createCarts, getCartByID, updateCarts, deleteCarts  } from "../controllers/carts.controller.js";

const router = Router()

router.get('/', getCarts)
router.get('/:cid', getCartByID)
router.post('/', createCarts)
router.post('/:cid/products/:pid', updateCarts)
router.delete('/:cid', deleteCarts)

export default router