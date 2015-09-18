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

function resetFields() {
  $("input#Radio1").attr('checked', false);
  $("input#Radio2").attr('checked', false);
  $("input#Radio3").attr('checked', false);
  $("input#topping-number").val("");
  $("input#topping-name").val("");
  $("input#pizza-quantity").val("");
}

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var chosenPizzaSize = $("input[name=size-choice]:checked", "#pizza-order").val();
    var chosenToppingNumber = $("input#topping-number").val();
    var inputtedToppingName = $("input#topping-name").val();
    var chosenPizzaQuantity = $("input#pizza-quantity").val();

    var newPizzaOrder = new Pizza (chosenPizzaSize, chosenToppingNumber, inputtedToppingName, chosenPizzaQuantity);
    var newPizzaOrderPrice = newPizzaOrder.pizzaPrice();
    $("ul#orders").append("<li><h4><span class='order'>" + "Order Price: " + "$" + newPizzaOrderPrice + "</span></h4></li>");

    $(".order").last().click(function() {
      $("#show-order").show();

      $(".pizza-size").text(newPizzaOrder.pizzaSize);
      $(".pizza-toppings").text(newPizzaOrder.toppingName);
      $(".pizza-quantity").text(newPizzaOrder.pizzaQuantity);
      $(".pizza-price").text(newPizzaOrderPrice);
    });
    resetFields();
  });
});
