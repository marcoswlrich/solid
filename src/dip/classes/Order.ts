import { IOrderStatus } from './interfaces/IOrderStatus';
import { Messaging } from '../services/Messaging';
import { Persistency } from '../services/Persistency';
import { CustomerOrder } from './interfaces/ICustomer-protocol';
import { IShoppingCartProtocol } from './interfaces/IShopping-cart-protocol';

class Order {
  private _orderStatus: IOrderStatus = 'open';

  constructor(
    private readonly cart: IShoppingCartProtocol,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): IOrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.total()} foi recebido.`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log('O cliente é:', this.customer.getName(), this.customer.getIDN(),);
  }
}

export { Order };
