import { ICartItem } from './interfaces/ICartItem';

class Product implements ICartItem {
  constructor(public name: string, public price: number) {}
}

export { Product };
