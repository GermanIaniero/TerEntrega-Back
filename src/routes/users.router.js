import { Router } from "express";
import { getUsers, createUsers, getUserByID, login, logout, register } from "../controllers/users.controller.js";

const router = Router()

router.get('/', getUsers)
router.get('/:uid', getUserByID)
router.post('/', createUsers)
router.post('/login', login)
router.post('/logout', logout)
router.post('/register', register)
export default router