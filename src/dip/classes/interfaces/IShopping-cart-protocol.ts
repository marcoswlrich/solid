import { ICartItem } from "./ICartItem";

interface IShoppingCartProtocol {
  items: Readonly<ICartItem[]>;
  addItem(item: ICartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDicount(): number;
  isEmpty(): boolean;
  clear(): void;
}

export { IShoppingCartProtocol };