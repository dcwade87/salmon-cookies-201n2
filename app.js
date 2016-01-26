var cookieObjects = [];
var storeLocation = ["Pike Place", "SeaTac", "Southcenter", "Bellevue Square", "Alki"];
var minimums = [17, 6, 11, 20, 3];
var maximums = [88, 24, 38, 48, 24];
var cookieAverage = [5.2, 1.2, 1.9, 3.3, 2.6];
var hoursOpen = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];


function CookieStand(storeLocation, minCust, maxCust, cookieSales) {
  this.storeLocation = storeLocation;
  this.minimum = minCust;
  this.maximum = maxCust;
  this.cookieSales = cookieSales;
  this.cookieArr = []
  cookieObjects.push(this);
}

for (var i = 0; i < storeLocation.length; i++) {
  new CookieStand (storeLocation[i], minimums[i], maximums[i], cookieAverage[i]);
}

CookieStand.prototype.randomCustomer = function (minCust, maxCust) {
  return Math.random() * (minCust - maxCust) + maxCust;
}



// var pikePlace = {
//   minCust: 17,
//   maxCust: 88,
//   cookieSales: 5.2,
//   cookieArr: [],
// }
// pikePlace.randomCustomer = function (minCust, maxCust) {
//   return Math.random() * (minCust - maxCust) + maxCust;
// }
// for (customer in hoursOpen){
//   pikePlace.cookieArr.push(pikePlace.randomCustomer(pikePlace.minCust, pikePlace.maxCust));
// }
//
// var seaTac = {
//   minCust: 6,
//   maxCust: 24,
//   cookieSales: 1.2,
//   cookieArr: [],
// }
// seaTac.randomCustomer = function (minCust, maxCust) {
//   return Math.random() * (minCust - maxCust) + maxCust;
// }
// for (customer in hoursOpen) {
//   seaTac.cookieArr.push(seaTac.randomCustomer(seaTac.minCust, seaTac.maxCust));
// }
//
// var southcenter = {
//   minCust: 11,
//   maxCust: 38,
//   cookieSales: 1.9,
//   cookieArr: [],
// }
// southcenter.randomCustomer = function (minCust, maxCust) {
//   return Math.random() * ( minCust - maxCust) + maxCust;
// }
// for (customer in hoursOpen) {
//   southcenter.cookieArr.push(southcenter.randomCustomer(southcenter.minCust, southcenter.maxCust));
// }
//
// var bellevueSquare = {
//   minCust: 20,
//   maxCust: 48,
//   cookieSales: 3.3,
//   cookieArr: [],
// }
// bellevueSquare.randomCustomer = function (minCust, maxCust) {
//   return Math.random() * (minCust - maxCust) + maxCust;
// }
// for (customer in hoursOpen) {
//   bellevueSquare.cookieArr.push(bellevueSquare.randomCustomer(bellevueSquare.minCust, bellevueSquare.maxCust));
// }
//
// var alki = {
//   minCust: 3,
//   maxCust: 24,
//   cookieSales: 2.6,
//   cookieArr: [],
// }
// alki.randomCustomer = function (minCust, maxCust) {
//   return Math.random() * (minCust - maxCust) + maxCust;
// }
// for (customer in hoursOpen) {
//   alki.cookieArr.push(alki.randomCustomer(alki.minCust, alki.maxCust));
// }
