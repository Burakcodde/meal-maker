const menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },

  get todaysSpecial() {
    if (
      typeof this._meal === "string" &&
      typeof this._price === "number" &&
      this._meal &&
      this._price
    ) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.meal = "Hamburger";
menu.price = 20;
console.log(menu.todaysSpecial);
