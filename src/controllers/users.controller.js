import { userService } from "../services/index.js"

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
    const user = req.body

    const result = await userService.createUsers(user)
    res.send({ status: 'success', payload: result })
}

export const login = async (req, res) => {
    const result = await userService.login()
    res.send({ status: 'success', payload: result })


    //ogin: el user.mongo.js, login  genere el token. Luego se setea la cookie en el controller

    const { email, password } = req.body

    //const user = usersDB.find(u => u.email === email && u.password === password)
    if(!user) return res.status(401).send({status: "error", error: 'Invalid pass'})

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
    const result = await userService.register()
    res.send({ status: 'success', payload: result })
}