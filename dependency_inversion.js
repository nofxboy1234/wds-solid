class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amountInCents / 100} with Stripe`
    );
  }
}

class PayPal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of $${amountInDollars} with Paypal`);
  }
}

const store = new Store(new StripePaymentProcessor('John'));
store.purchaseBike(2);
store.purchaseHelmet(2);
