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
    let resultDelCarrito = await CartModel.findOne({ _id: cid });
    const resultDelProducto = await ProductModel.findOne({ _id: product.pid });
    /* hacer push del id y no del producto */
    if (!resultDelProducto || !resultDelCarrito)
      return "No existe producto o carrito";

    const resultadoEncontrado = resultDelCarrito.products.find(
      (producto) => producto.pid.toString() === product.pid
    );

    if (resultadoEncontrado !== undefined) {
      resultadoEncontrado.quantity += product.quantity;
      await resultDelCarrito.save();
    } else {
      resultDelCarrito.products.push(product);
      await resultDelCarrito.save();
    }
    //resultDelCarrito.products.push({pid,quantity} )

    return resultDelCarrito;
  };

  purchaseCarts = async (cart, userMail) => {
    let totalAmount = 0;
    for (let i = 0; i < cart.products.length; i++) {
      const resultDelProducto = await ProductModel.findOne({
        _id: cart.products[i].pid,
      });
      //Si el stock es mayor a la cantidad comprada
      if (resultDelProducto.stock >= cart.products[i].quantity) {
        resultDelProducto.stock =
          resultDelProducto.stock - cart.products[i].quantity;
        await resultDelProducto.save();
        totalAmount += resultDelProducto.price * cart.products[i].quantity;
        await this.deleteOneCarts(cart._id, resultDelProducto._id);
      } else {
        cart.products[i].quantity =
          cart.products[i].quantity - resultDelProducto.stock;
        totalAmount += resultDelProducto.price * resultDelProducto.stock;
        resultDelProducto.stock = 0;
        await resultDelProducto.save();
        await cart.save();
      }
    }
    const ticket = new Ticket();
    const newTicket = await ticket.createTickets(totalAmount, userMail);
    return newTicket;
  };

  deleteOneCarts = async (cartId, productId) => {
    const result = await CartModel.updateOne(
      { _id: cartId },
      { $pull: { products: { pid: productId.pid } } }
    );
    // console.log(result);
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
