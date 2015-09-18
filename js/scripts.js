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

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var chosenPizzaSize = $("input[name=size-choice]:checked", "#pizza-order").val();
    var chosenToppingNumber = $("input#topping-number").val();
    var inputtedToppingName = $("input#topping-name").val();
    var chosenPizzaQuantity = $("input#pizza-quantity").val();

    var newPizzaOrder = new Pizza (chosenPizzaSize, chosenToppingNumber, inputtedToppingName, chosenPizzaQuantity);
    var newPizzaOrderPrice = newPizzaOrder.pizzaPrice();
    $("ul#orders").append("<li><span class='place'>" + "Your Price: " + "$" + newPizzaOrderPrice + ".00" + "</span></li>");
  });
});
