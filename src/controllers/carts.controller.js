import { cartService } from "../services/index.js";
import CartModel from "../DAO/mongo/carts.mongo.js"

export const getCarts = async (req, res) => {
  const result = await cartService.getCarts();
  res.send({ status: "success", payload: result });
};

export const getCartByID = async (req, res) => {
  const { cid } = req.params;
  const result = await cartService.getCartById(cid);

  res.send({ status: "success", payload: result });
};

export const createCarts = async (req, res) => {
  const cart = req.body;

  const result = await cartService.createCarts(cart);
  res.send({ status: "success", payload: result });
};

export const updateCarts = async (req, res) => {
  try {
    const pid = req.params.pid;
    const cid = req.params.cid;
    const quantity = parseInt(req.body.quantity);
    const carts2 = { pid, quantity };
    const result = await cartService.updateCarts(cid, carts2);
    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", payload: error.message });
  }
};

export const purchaseCarts = async (cart, userMail) => {
  let totalAmount = 0;
  for (let i = 0; i < cart.products.length; i++) {
  const resultDelProducto = await ProductModel.findOne({
      _id: cart.products[i].pid,
  });
  //Si el stock es mayor a la cantidad comprada
  if (resultDelProducto.stock >= cart.products[i].quantity) {
      resultDelProducto.stock = resultDelProducto.stock - cart.products[i].quantity;
      await resultDelProducto.save();
      totalAmount += resultDelProducto.price * cart.products[i].quantity;
      const productToDelete = { pid: resultDelProducto._id }
      await this.deleteOneCarts(cart._id, productToDelete);
  }
  // 
  /**
   * Lo que pasa es que el deleteOneCarts funciona bien y elimina completamente
   * un objeto del carrito. Pero, el [i] se mantiene en un valor mayo al total de productos,
   * por lo que se comporta inesperadamente.
   * 
   * La solución es buscar cada producto dentro del arreglo, en vez de acceder a él mediante
   * [i]. Podemos utilizar 'this.updateCarts' que se dedica a modificar la cantidad del producto.
   * 
   */
  // } else {
  //   cart.products[i].quantity = cart.products[i].quantity - resultDelProducto.stock;
  //   totalAmount += resultDelProducto.price * resultDelProducto.stock;
  //   resultDelProducto.stock = 0;
  //   await resultDelProducto.save();
  //   await cart.save();
  // }
  }
  const ticket = new Ticket();
  const newTicket = await ticket.createTickets(totalAmount, userMail);
  return newTicket;
};

export const deleteOneCarts = async (cartId, productId) => {
  /*const pid = req.params.pid;
  const cid = req.params.cid;
  const quantity = parseInt(req.body.quantity);
  const carts2 = { pid, quantity };
  const result = await cartService.deleteOneCarts(cid, carts2);
  res.send({ status: "success", payload: result });*/
  const result = await CartModel.updateCarts(
    { _id: cartId },
    { $pull: { products: { pid: productId.pid } } },
    { new: true }
    );
    console.log('result from deleteOneCars', result)
    return result;
};
export const deleteCarts = async (req, res) => {
  const pid = req.params.pid;
  const cid = req.params.cid;
  const quantity = parseInt(req.body.quantity);
  const carts2 = { pid, quantity };
  const result = await cartService.deleteCarts(cid, carts2);
  res.send({ status: "success", payload: result });
};
