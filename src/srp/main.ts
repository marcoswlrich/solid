import { ShoppingCart } from "./classes/ShoppingCart.";
import { Order } from "./classes/Order";
import { Messaging } from "./services/Messaging";
import { Persistency } from "./services/Persistency";
import {Product} from "./classes/Product";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);