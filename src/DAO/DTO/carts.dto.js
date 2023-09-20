export default class CartDTO {

    constructor(cart) {
        this.number = cart?.number ?? 0
        this.user = cart?.user ?? 0
        this.status = cart?.status ?? 'pending'
        this.totalPrice = cart?.totalPrice ?? 0
    }
}