abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

class NoDiscount extends Discount {}

export {Discount, FiftyPercentDiscount, TenPercentDiscount, NoDiscount };