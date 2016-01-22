var hoursOpen = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var sectionEl = document.getElementsByName("cookieList");

var pikePlace = {
  minCust: 17,
  maxCust: 88,
  cookieSales: 5.2,
  cookieArr: [],
}
pikePlace.randomCustomer = function (minCust, maxCust) {
  return Math.random() * (minCust - maxCust) + maxCust;
}
for (customer in hoursOpen){
  pikePlace.cookieArr.push(pikePlace.randomCustomer(pikePlace.minCust, pikePlace.maxCust));
}

var seaTac = {
  minCust: 6,
  maxCust: 24,
  cookieSales: 1.2,
  cookieArr: [],
}
seaTac.randomCustomer = function (minCust, maxCust) {
  return Math.random() * (minCust - maxCust) + maxCust;
}
for (customer in hoursOpen) {
  seaTac.cookieArr.push(seaTac.randomCustomer(seaTac.minCust, seaTac.maxCust));
}

var southcenter = {
  minCust: 11,
  maxCust: 38,
  cookieSales: 1.9,
  cookieArr: [],
}
southcenter.randomCustomer = function (minCust, maxCust) {
  return Math.random() * ( minCust - maxCust) + maxCust;
}
for (customer in hoursOpen) {
  southcenter.cookieArr.push(southcenter.randomCustomer(southcenter.minCust, southcenter.maxCust));
}

var bellevueSquare = {
  minCust: 20,
  maxCust: 48,
  cookieSales: 3.3,
  cookieArr: [],
}
bellevueSquare.randomCustomer = function (minCust, maxCust) {
  return Math.random() * (minCust - maxCust) + maxCust;
}
for (customer in hoursOpen) {
  bellevueSquare.cookieArr.push(bellevueSquare.randomCustomer(bellevueSquare.minCust, bellevueSquare.maxCust));
}

var alki = {
  minCust: 3,
  maxCust: 24,
  cookieSales: 2.6,
  cookieArr: [],
}
alki.randomCustomer = function (minCust, maxCust) {
  return Math.random() * (minCust - maxCust) + maxCust;
}
for (customer in hoursOpen) {
  alki.cookieArr.push(alki.randomCustomer(alki.minCust, alki.maxCust));
}
