import { Router } from "express";
import { getCarts, createCarts, getCartByID, updateCarts, deleteOneCarts, deleteCarts  } from "../controllers/carts.controller.js";

const router = Router()

router.get('/', getCarts)
router.get('/:cid', getCartByID)
router.post('/', createCarts)
router.post('/:cid/products/:pid', updateCarts)
router.delete('/:cid/products/:pid', deleteOneCarts)
router.delete('/:cid', deleteCarts)

export default router