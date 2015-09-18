describe('Pizza', function () {
  it("create a new Pizza order given user's specifications", function() {
    var testPizza = new Pizza("small", 2, "cheese and mushroom", 2);
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.toppingNumber).to.equal(2);
    expect(testPizza.toppingName).to.equal("cheese and mushroom");
    expect(testPizza.pizzaQuantity).to.equal(2);
  });
  it("calculate the pizza order cost for a small pizza", function () {
    var testPizza = new Pizza("small", 2, "cheese and mushroom", 2);
    expect(testPizza.pizzaPrice()).to.equal(5);
  });
});
