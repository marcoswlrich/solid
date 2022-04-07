import { IOrderStatus } from './interfaces/IOrderStatus';
import { ShoppingCart } from './ShoppingCart.';
import { Messaging } from '../services/Messaging';
import { Persistency } from '../services/Persistency';

class Order {
  private _orderStatus: IOrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
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
  }
}

export { Order };
