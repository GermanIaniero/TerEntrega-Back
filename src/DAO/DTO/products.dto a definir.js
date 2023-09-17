export default class ProductsDTO {

    constructor(product) {
        this.number = product?.number ?? 0
        this.user = product?.user ?? 0
        this.status = product?.status ?? 'pending'
        this.totalPrice = product?.totalPrice ?? 0
    }
}