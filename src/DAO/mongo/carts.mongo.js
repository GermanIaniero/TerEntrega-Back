import CartModel from "./models/carts.mongo.model.js"
import ProductModel from "./models/products.mongo.model.js"

export default class Cart {
   
    getCarts = async () => { return await CartModel.find() }
    getCartById = async (id) => { return await CartModel.findOne({ _id: id }) }
    createCarts = async (cart) => { return await CartModel.create(cart) }
    updateCarts = async (cid,product) => {
       /* console.log("id", id, "product", product)
        return await CartModel.updateOne({_id:id},product);*/
  

    let resultDelCarrito = await CartModel.findOne({_id:cid});
    const resultDelProducto = await ProductModel.findOne({_id:product.pid});
    /* hacer push del id y no del producto */
    if (!resultDelProducto || !resultDelCarrito) return ("No existe producto o carrito");
    
    
    const resultadoEncontrado = resultDelCarrito.products.find((producto) => producto.pid.toString() === product.pid)
    console.log("resulta", resultadoEncontrado, "result carrito", resultDelCarrito, "ressul del pro", resultDelProducto)
    if (resultadoEncontrado !== undefined) {
        console.log("entre if")
        resultadoEncontrado.quantity += product.quantity
        await resultDelCarrito.save()
    }else{
        console.log("entre else")
        resultDelCarrito.products.push(product)
        await resultDelCarrito.save()
    }
    //resultDelCarrito.products.push({pid,quantity} )
    
    return(resultDelCarrito)

    }


    deleteOneCarts = async (cartId,productId)=>{
        let pid = await ProductModel.find({_id: productId.pid})._id

        const result = await CartModel.updateOne(
            { _id: cartId},
            { $pull: { products: { pid : pid } } },
          );
          console.log(result)
          return result
    }
 
    deleteProductAll = async (id)=>{
        const result = await CartModel.updateOne(
            { _id: id},
            { $set: { products: []} },
        );
        return result
    }
}