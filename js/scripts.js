function Pizza(pizzaSize, toppingNumber, toppingName, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.toppingNumber = toppingNumber;
  this.toppingName = toppingName;
  this.pizzaQuantity = pizzaQuantity;
  this.startPrice = 5;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.pizzaSize === "small") {
    this.startPrice += (1 * this.toppingNumber);
  }
    else if (this.pizzaSize === "medium") {
    this.startPrice = 10 + (1 * this.toppingNumber);
  } else {
    this.startPrice = 15 + (1 * this.toppingNumber);
  }
    return this.startPrice * this.pizzaQuantity;
};
