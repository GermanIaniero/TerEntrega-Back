import config from '../config/config.js'
import mongoose from 'mongoose'

export let User
export let Store
export let Order
export let Product
export let Cart

console.log(`Persistence with ${config.PERSISTENCE}`)

switch (config.PERSISTENCE) {
    case 'MONGO':
        console.log(config.DBURL)
        console.log(config.DBNAME)
        
        mongoose.connect(config.DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            DBNAME: config.DBNAME
        })

        const { default: UserMongo } = await import('./mongo/users.mongo.js')
        const { default: StoreMongo } = await import('./mongo/stores.mongo.js')
        const { default: OrderMongo } = await import('./mongo/orders.mongo.js')
        const { default: ProductMongo } = await import('./mongo/products.mongo.js')
        const { default: CartMongo } = await import('./mongo/carts.mongo.js')

        User = UserMongo
        Store = StoreMongo
        Order = OrderMongo
        Product = ProductMongo
        Cart = CartMongo

        break;

    case 'FILE':
        const { default: UserFile } = await import('./file/users.file.js')
        const { default: StoreFile } = await import('./file/stores.file.js')
        const { default: OrderFile } = await import('./file/orders.file.js')
        const { default: ProductFile } = await import('./file/products.file.js')
        const { default: CartFile } = await import('./file/carts.file.js')

        User = UserFile
        Store = StoreFile
        Order = OrderFile
        Product = ProductFile
        Cart = CartFile

        break;

    default:
        break;
}