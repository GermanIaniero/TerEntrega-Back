import UserModel from "./models/users.mongo.model.js";

export default class User {
    getUsers = async () => { return await UserModel.find() }
    getUserById = async(id) => { return await UserModel.findOne({_id: id}) }
    createUsers = async(user) => { return await UserModel.create(user)}
    getUserByEmail = async(email) => { return await UserModel.findOne({email: email}) }
    deleteUserById = async (uid) => { return await UserModel.findByIdAndDelete(uid) }
}