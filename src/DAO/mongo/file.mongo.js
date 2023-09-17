import FileModel from "./models/file.mongo.model.js"

export default class File {
    getFile = async () => { return await FileModel.find() }
    getFileById = async (id) => { return await FileModel.findOne({ _id: id }) }
    createFile = async (file) => { return await FileModel.create(file) }
    updateFile = async (id, file) => {
        return await FileModel.updateOne({ _id: id }, { $set: file })
    }
}