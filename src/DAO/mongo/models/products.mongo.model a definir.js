import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const ProductsModel = mongoose.model ('products', new mongoose.Schema({
    id: Number,
    title:String,   
    description:String,
    price: Number,
    thumbnail:Array,
    code:Number,
    stock:Number,
    status:{type: Boolean, required:true, default:true},
    category:String,
})

//ProductsModel.plugin(mongoosePaginate)

//const productModel = mongoose.model(productCollection, productSchema)

)

export default CartsModel