'use strict';

// 1. refactor object literal into single object constructor X
// 2. make sure object constructor works X
// 3. make prototype function for random number of cookies per hour X
// 4. append table to html outside of render() method X
// 5. replace lists with table - make function outside of render()
// 6. append table to html
// 7. make render() prototype method for table

// 'this.' outside of object references the DOM
// arrow function?


function Stand(location, minCust, maxCust, avgCookieSale) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;

}

// generate cookies sold per hour
Stand.prototype.cookiesSold = function () {
    this.cookiesSold = this.avgCookieSale * randomCust(this.minCust, this.maxCust)
    return Math.ceil(this.cookiesSold); // round up
}



// test
const seattle = new Stand('Seattle', 23, 65, 6.3);
console.log(seattle);
const seattleSales = seattle.cookiesSold();
console.log(seattleSales);






// from class demo
function randomCust(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



// get sales div
const salesDivElem = document.getElementById('sales');
// make table
const salesTableElem = document.createElement('table');
// append table to sales div
salesDivElem.appendChild(salesTableElem).textContent = 'This worked!'; // append ul to div

// 7. populate table with rows and columns in render() function
// 1. add header row for 
// 2. add column

// make header row
const headerRowElem = document.createElement('tr');
// append header row to sales table
salesTableElem.appendChild(headerRowElem).textContent = 'Header Row';


for (let i = 0; i <= hours.length; i += 1) {
    // make header with th
    const timeSlotElem = document.createElement('th');
    headerRowElem.appendChild(timeSlotElem).textContent = hours[i];
}

// make 



/*
function populateSalesList() {
    for (let i = 0; i < hours.length; i++) {
        const listText = `${hours[i]}: ${seattleShop.cookiesSoldByHour[i]} cookies`;
        // make child li element
        const salesLi = document.createElement('li');
        // append li to ul
        ulElem.appendChild(salesLi).textContent = listText;
    }
}
populateSalesList();
*/



// calculate and store average sales per hour for the shop
// get total sales

//for (i = 0; i < hours.length; i += 1) {
//    cookiesShop.
//}