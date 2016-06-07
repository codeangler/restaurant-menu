// Define a constructor for the following object. Add parameters to the constructor for the given properties and add them as instance variables.
function FoodItem(name, calories, vegan, glutenFree, citrusFree){
  this.name = name;
  this.calories = calories;
  this.vegan = vegan;
  this.glutenFree = glutenFree;
  this.citrusFree = citrusFree;
}

FoodItem.prototype.stringify = function() {
  return ("Products:" + this.name + " , Calories: " + this.calories + " , Vegan: " + this.vegan + " , Gluten Free: " + this.glutenFree + " , Citrus Free: " + this.citrusFree);
};
//  ############################ ^^ FoodItem Contuctor  ^^.stringify  

function Drink(name, description, price, foodArray) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.ingredients = foodArray;
}

Drink.prototype.stringify = function() {
  return ("Name:" + this.name + " , Description: " + this.description + " , Price: " + this.price + " , Ingredients: " + this.ingredients);
};
//  ############################ ^^ Drink Contuctor  ^^.stringify  


function Plate (name, description, price, foodArray) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.ingredients = foodArray;
}

Plate.prototype.stringify = function() {
  return ("Name:" + this.name + " , Description: " + this.description + " , Price: " + this.price + " , Ingredients: " + this.ingredients);
};
//  ############################ ^^ Plate Contuctor  ^^.stringify  

function Order(arrPlates) {
  this.plates = arrPlates;
}

Order.prototype.stringify = function() {
  var myArray = [];
  for (var i; i < this.plates.length; i++){
    myArray.push(this.plates[i].stringify());
  }
  return "Order: \n" + myArray.join("\n");
};
//  ############################ ^^ Order Contuctor  ^^.stringify  

function Menu(arrPlates) {
  this.menu = arrPlates;
}

Menu.prototype.stringify = function() {
  return ("Menu:" + this.menu);
};
//  ############################ ^^ Menu Contuctor  ^^.stringify  

function Restaurant(name, description, menu) {
  this.name = name;
  this.description = description;
  this.menu = menu;
}

Restaurant.prototype.stringify = function() {
  return ("Name:" + this.name + " , Description: " + this.description + " , Menu: " + this.menu.stringify());
};
//  ############################ ^^ Restaurant Contuctor  ^^.stringify 


function Customer(dietaryPrefence) {
  var customer = this;
  customer.dietaryPrefence = dietaryPrefence;
}

Customer.prototype.stringify = function() {
  return ("Customer:" + customer.dietaryPrefence);
};
//  ############################ ^^ Customer Contuctor  ^^.stringify 




//  #######################  food items  ####################
var celery = new FoodItem ("Celery", 0, true, true, true);
console.log(celery.stringify());
var honey = new FoodItem ("Brocolli", 0, false, true, true);
console.log(honey.stringify());
var buffalo = new FoodItem ("Buffalo", 0, false, false, true);
console.log(buffalo.stringify());