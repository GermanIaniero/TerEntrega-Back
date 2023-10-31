import { userService } from "../services/index.js"
import { generateToken} from "../utils/utils.js"

export const getUsers = async (req, res) => {
    const result = await userService.getUsers()
    res.send({ status: 'success', payload: result })
}

export const getUserByID = async (req, res) => {
    const { uid } = req.params
    const result = await userService.getUserById(uid)

    res.send({ status: 'success', payload: result })
}

export const createUsers = async (req, res) => {
    

    const result = await userService.createUsers(user)
    
    res.send({ status: 'success', payload: result })
    
}

export const login = async (req, res) => {
    const user = req.user
    
    
    
    
    //res.send({ status: 'success', payload: result })


    
    
    const access_token = generateToken(user)
    
    res.cookie('coderCookie', access_token, {
        maxAge: 60*60*1000,
        httpOnly: true
    }).send({message: 'Logged In!'})

}

export const logout = async (req, res) => {
    const result = await userService.logout()
    res.send({ status: 'success', payload: result })
}

export const register = async (req, res) => {
    //const result = await userService.createUsers()
    const user = req.body
    res.send({ status: 'success', payload:  user})
}