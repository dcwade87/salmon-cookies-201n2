var pikePlace = new CookieStand ("Pike Place", 17, 88, 5.2);
var seaTac = new CookieStand ("SeaTac", 6, 24, 1.2);
var southcenter = new CookieStand ("Southcenter", 11, 38, 1.9);
var bellevueSquare = new CookieStand ("Bellevue Square", 20, 48, 3.3);
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

CookieStand.prototype.render = function() {
    this.hourlySales();
    var printCookie = document.getElementById('cookieList');
    var cookieSection = document.createElement('section');
    printCookie.appendChild(cookieSection);
    var ulEl = document.createElement("ul");

    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[i] + ": " + this.cookieArr[i];
      ulEl.appendChild(liEl);
    }
    var liElTotal = document.createElement("li");
    liElTotal.textContent = "Daily Sales: " + this.dailySales;
    ulEl.appendChild(liElTotal);
    cookieSection.textContent = this.storeLocation;
    cookieSection.appendChild(ulEl);
  }

pikePlace.render();
seaTac.render();
southcenter.render();
bellevueSquare.render();
alki.render();
