var pikePlace = new CookieStand ("Pike Place:", 17, 88, 5.2);
var seaTac = new CookieStand ("SeaTac:", 6, 24, 1.2);
var southcenter = new CookieStand ("Southcenter:", 11, 38, 1.9);
var bellevueSquare = new CookieStand ("Bellevue Square:", 20, 48, 3.3);
var alki = new CookieStand ("Alki:", 3, 24, 2.6);
var hoursOpen = ["10AM: ", "11AM: ", "12PM: ", "1PM: ", "2PM: ", "3PM: ", "4PM: ", "5PM: "];

function CookieStand(storeLocation, minCust, maxCust, cookieSales) {
  this.storeLocation = storeLocation;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookieSales = cookieSales;
  this.hourlyArr = [];
  this.dailySales = 0;
};

CookieStand.prototype.randomCustomer = function() {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
};

CookieStand.prototype.hourlySales = function () {
  for (var i = 0; i< hoursOpen.length; i++) {
  var random = Math.floor(this.randomCustomer() * this.cookieSales);
  this.hourlyArr.push(random);
  this.dailySales += random;
  }
};

var cookieTable = document.getElementById('cookieList');
var createRowEl = document.createElement('tr');
  cookieTable.appendChild(createRowEl);
function createTable(){
var storeNames = document.createElement('th');
  storeNames.textContent = 'Store Name:';
  createRowEl.appendChild(storeNames);

for (var i = 0; i < hoursOpen.length; i++) {
  var storeHours = document.createElement('th');
  storeHours.textContent = hoursOpen[i];
  createRowEl.appendChild(storeHours);
};
var storeTotal = document.createElement('th');
  storeTotal.textContent = 'Total Sales:';
  createRowEl.appendChild(storeTotal);
};
  createTable();

CookieStand.prototype.render = function() {
  this.hourlySales();
  var shopName = document.createElement('tr')
  shopName.textContent = this.storeLocation;
  cookieTable.appendChild(shopName);

  for (var i = 0; i < hoursOpen.length; i++) {
  var dataEl = document.createElement('td');
  dataEl.textContent = this.hourlyArr[i];
  shopName.appendChild(dataEl);
};
  var cookieTotal = document.createElement('td');
  cookieTotal.textContent = this.dailySales;
  shopName.appendChild(cookieTotal);
};

  userData.addEventListener("submit", function() {
    event.preventDefault();
    var storeLocation = document.getElementById('location').value + ":";
    var minCust = parseInt(document.getElementById('min').value);
    var maxCust = parseInt(document.getElementById('max').value);
    var cookieSales = parseInt(document.getElementById('average').value);
    var newStore = new CookieStand(storeLocation, minCust, maxCust, cookieSales);
    newStore.hourlySales();
    newStore.render(); + ":";
    document.getElementById('userData').reset();
  });


pikePlace.render();
seaTac.render();
southcenter.render();
bellevueSquare.render();
alki.render();
