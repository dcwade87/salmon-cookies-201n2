<<<<<<< HEAD
var pikePlace = new CookieStand ("Pike Place", 17, 88, 5.2);
var seaTac = new CookieStand ("SeaTac", 6, 24, 1.2);
var southcenter = new CookieStand ("Southcenter", 11, 38, 1.9);
var bellevueSquare = new CookieStand ("Bellevue Square");
var alki = new CookieStand ("Alki", 3, 24, 2.6);
var hoursOpen = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

function CookieStand(storeLocation, minCust, maxCust, cookieSales) {
  this.storeLocation = storeLocation;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookieSales = cookieSales;
  this.cookieArr = [];
  this.dailySales = 0;
};

CookieStand.prototype.randomCustomer = function() {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
};

CookieStand.prototype.hourlySales = function () {
  for (var i = 0; i< hoursOpen.length; i++) {
    var random = Math.floor(this.randomCustomer() * this.cookieSales);
    this.cookieArr.push(random);
    this.dailySales += random;
  }
};
=======
var pikePlace = {
  minCust: 17,
  maxCust: 88,
  cookieSales: 5.2
}

pikePlace.randomCustomer = function(17, 188) {
  return Math.random() * (188 - 17) + 17;





// Not the prefered way to create an Object
// var turtle = Object();
// console.log(turtle);

// Empty object literal
var banana = {};
console.log(banana);

// Basic object literal with properties and one method (method commented out as an example only)
var turtle = {
  color: 'Blue',
  legs: 4,
  ninja: true,
  hunger: 4,
  // eat: function(isHungry) {
  //   if (isHungry > 5) {
  //     console.log('Get me some of dat pizza!');
  //   } else if (isHungry <= 5) {
  //     console.log('I\'m full Brah');
  //   }
  // }
};
console.log(turtle);



// This will not work; we have to assign/reassign a new method to the object property
// function turtle.eat() {
//   // do some code
// }

turtle.eat = function(isHungry) {
  if (isHungry > 5) {
    console.log('Get me some of dat pizza!');
  } else if (isHungry <= 5) {
    console.log('I\'m full Brah');
  }
}; // Declare your methods outside the object to keep them clear and concise

turtle.getColor = function() {
  return this.color;
};

turtle.randomHunger = function(min, max) {
  return Math.random() * (max - min) + min;
};  // e.g.  turtle.hunger = turtle.randomHunger(0, 50);




// Quick review of when to use semi-colons
// function beans() {
//   // Do some code
// }
//
// var beans = function() {
//   // Do some code
// };



// This is a basic create html and render to page example
// var sectionEl = document.getElementById('myList');
// sectionEl.textContent = 'Hello World!';
//
// var ulEl = document.createElement('ul');
// var liEl = document.createElement('li');
// liEl.textContent = 'I like grapes.';
//
// ulEl.appendChild(liEl);
// // target.appendChild(content)   (common syntax example for a method such as appendChild)
//
// sectionEl.appendChild(ulEl);


// This is a more advanced for loop inside for loop for nested lists
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var weeks = [1, 2, 3, 4];
var sectionEl = document.getElementById('myList');
var ulEl = document.createElement('ul');

for(month in months) {
  var liEl = document.createElement('li');
  liEl.textContent = months[month];
  var nestedUlEl = document.createElement('ul');

  for(week in weeks) {
    var nestedLiEl = document.createElement('li');
    nestedLiEl.textContent = weeks[week];
    nestedUlEl.appendChild(nestedLiEl);
  }

  liEl.appendChild(nestedUlEl);
  ulEl.appendChild(liEl);
}
>>>>>>> 1a49dbc0d29f7bb9d53f566a4b162b398006b763
