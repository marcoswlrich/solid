import { ShoppingCart } from "./classes/ShoppingCart.";
import { Order } from "./classes/Order";
import { Messaging } from "./services/Messaging";
import { Persistency } from "./services/Persistency";
import {Product} from "./classes/Product";
import { NoDiscount } from "./classes/Discount";
import { EnterpriseCustomer } from "./classes/Customer";

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount;
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const enterpriseCustomer = new EnterpriseCustomer('Empresa',
'68.090.089/0001-56')
const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount);
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);