function Pizza(pizzaSize, toppingNumber, toppingName, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.toppingNumber = toppingNumber;
  this.toppingName = toppingName;
  this.pizzaQuantity = pizzaQuantity;
  this.startPrice = 5;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.pizzaSize = "small") {
    this.startPrice = this.startPrice + (1 * this.toppingNumber);
  }
  return this.startPrice * this.pizzaQuantity;
};
