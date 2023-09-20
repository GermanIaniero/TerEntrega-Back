import mongoose from 'mongoose';

const ProductModel = mongoose.model ('products', new mongoose.Schema({
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

)

export default ProductModel