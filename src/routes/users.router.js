import { Router } from "express";
import { getUsers, createUsers, getUserByID } from "../controllers/users.controller.js";

const router = Router()

router.get('/', getUsers)
router.get('/:uid', getUserByID)
router.post('/', createUsers)

export default router