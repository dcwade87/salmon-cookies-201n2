var pikePlace = new CookieStand ("Pike Place", 17, 88, 5.2);
var seaTac = new CookieStand ("SeaTac", 6, 24, 1.2);
var southcenter = new CookieStand ("Southcenter", 11, 38, 1.9);
var bellevueSquare = new CookieStand ("Bellevue Square", 20, 48, 3.3);
var alki = new CookieStand ("Alki", 3, 24, 2.6);
var hoursOpen = ["10AM: ", "11AM: ", "12PM: ", "1PM: ", "2PM: ", "3PM: ", "4PM: ", "5PM: "];

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
  var cookieSection = document.createElement('table');
  printCookie.appendChild(cookieSection);
  var tabRow = document.createElement("tr");

  for (var i = 0; i < hoursOpen.length; i++) {
  var tabDat = document.createElement("td");
  tabDat.textContent = hoursOpen[i] + this.cookieArr[i];
  tabRow.appendChild(tabDat);
  }
  var tabDatTotal = document.createElement("td");
  tabDatTotal.textContent = "Daily Sales: " + this.dailySales;
  tabRow.appendChild(tabDatTotal);
  cookieSection.textContent = this.storeLocation + ":";
  cookieSection.appendChild(tabRow);
  }

pikePlace.render();
seaTac.render();
southcenter.render();
bellevueSquare.render();
alki.render(); 
