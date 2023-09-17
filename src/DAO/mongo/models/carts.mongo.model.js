import mongoose from 'mongoose';

const CartsModel = mongoose.model ('carts', new mongoose.Schema({
  products: [{ pid: {type: Schema.Types.ObjectId, ref: 'products'}, quantity: Number}] 

})

)

export default CartsModel