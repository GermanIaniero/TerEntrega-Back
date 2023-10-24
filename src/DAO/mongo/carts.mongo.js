import CartModel from "./models/carts.mongo.model.js";
import ProductModel from "./models/products.mongo.model.js";
import Ticket from "./tickets.mongo.js";

export default class Cart {
  getCarts = async () => {
    return await CartModel.find();
  };
  getCartById = async (id) => {
    return await CartModel.findOne({ _id: id });
  };
  createCarts = async (cart) => {
    return await CartModel.create(cart);
  };
  updateCarts = async (cid, product) => {
    /* console.log("id", id, "product", product)
        return await CartModel.updateOne({_id:id},product);*/

    let resultDelCarrito = await CartModel.findOne({ _id: cid });
    const resultDelProducto = await ProductModel.findOne({ _id: product.pid });
    /* hacer push del id y no del producto */
    if (!resultDelProducto || !resultDelCarrito)
      return "No existe producto o carrito";

    const resultadoEncontrado = resultDelCarrito.products.find(
      (producto) => producto.pid.toString() === product.pid
    );
    console.log(
      "resulta",
      resultadoEncontrado,
      "result carrito",
      resultDelCarrito,
      "ressul del pro",
      resultDelProducto
    );
    if (resultadoEncontrado !== undefined) {
      console.log("entre if");
      resultadoEncontrado.quantity += product.quantity;
      await resultDelCarrito.save();
    } else {
      console.log("entre else");
      resultDelCarrito.products.push(product);
      await resultDelCarrito.save();
    }
    //resultDelCarrito.products.push({pid,quantity} )

    return resultDelCarrito;
  };

  purchaseCarts = async (cart) => {
    /* console.log("id", id, "product", product)
         return await CartModel.updateOne({_id:id},product);*/
    let totalamount = 0;
    let email;

    for (let i = 0; i < cart.products.length; i++) {
      const resultDelProducto = await ProductModel.findOne({
        _id: cart.products[i].pid,
      });
      //Si el stock es mayor a la cantidad comprada
      if (resultDelProducto.stock >= cart.products[i].quantity) {
        resultDelProducto.stock = resultDelProducto.stock - cart.products[i].quantity;
        await resultDelProducto.save();
        totalamount += resultDelProducto.price * cart.products[i].quantity;
        await this.deleteOneCarts(cart._id, resultadoEncontrado._id);
    

      }else{
        
        cart.products[i].quantity = cart.products[i].quantity - resultDelProducto.stock;
        totalamount += resultDelProducto.price * resultDelProducto.stock;
        console.log("cart.mongo", totalamount)

        console.log("cart.products[i].quantity", cart.products[i].quantity )
        console.log("resultDelProducto.stock (deberia ser = 0)", resultDelProducto.stock )
        console.log("totalamount (deberia ser = 0)", totalamount)
        console.log("resultDelProducto.price", resultDelProducto.price)
        console.log("resultDelProducto.quantity", resultDelProducto.quantity) 

        resultDelProducto.stock = 0
        await resultDelProducto.save();
        await cart.save();
      
    }
   
    const ticket = new Ticket()
  
    const newTicket = await ticket.createTickets(totalamount)
    
    return newTicket;
  };


  deleteOneCarts = async (cartId, productId) => {
    

    const result = await CartModel.updateOne(
      { _id: cartId },
      { $pull: { products: { pid: productId.pid } } }
    );
    console.log(result);
    return result;
  };

  deleteProductAll = async (id) => {
    const result = await CartModel.updateOne(
      { _id: id },
      { $set: { products: [] } }
    );
    return result;
  };
 }
}