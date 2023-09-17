export default class FileDTO {

    constructor(file) {
        this.number = file?.number ?? 0
        this.user = file?.user ?? 0
        this.status = file?.status ?? 'pending'
        this.totalPrice = file?.totalPrice ?? 0
    }
}