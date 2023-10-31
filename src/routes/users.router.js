import { Router } from "express";
import passport from "passport";
import { getUsers, createUsers, getUserByID, login, logout, register } from "../controllers/users.controller.js";

const router = Router()

router.get('/', getUsers)
router.get('/:uid', getUserByID)
router.post('/login', passport.authenticate("login"), login)
router.post('/logout', logout)
router.post('/register', passport.authenticate("register"), register)
export default router