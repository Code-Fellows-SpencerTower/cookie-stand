'use strict';

// 1. render method to create and append a row for each location
// 1. create row
// 2. append row
// 3. populate row
// 4. 1st cell in row - location name
        // if i = 0 then populate with location name
        // else, populate with random
// 5. populate rest of cells based on 

// store hours
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(hours.length)


function Stand(location, minCust, maxCust, avgCookieSale) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.cookiesSold();

}

// generate cookies sold per hour
Stand.prototype.cookiesSold = function () {
    this.cookiesSold = this.avgCookieSale * randomNumInRange(this.minCust, this.maxCust)
    return Math.ceil(this.cookiesSold); // rounds up
}

// from class demo
function randomNumInRange(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

// test object constructor
const seattle = new Stand('Seattle', 23, 65, 6.3);
console.log(seattle.cookiesSold)


// 

// get sales div
const salesDivElem = document.getElementById('sales');
// make table
const salesTableElem = document.createElement('table');
// append table to sales div
salesDivElem.appendChild(salesTableElem);


// make header row
const headerRowElem = document.createElement('tr');
salesTableElem.appendChild(headerRowElem);




Stand.prototype.render = function () {

}

// 
// i set to -2 to start with empty cell in header row
for (let i = -2; i < hours.length; i += 1) {
    const timeSlotElem = document.createElement('th');
    headerRowElem.appendChild(timeSlotElem).textContent = hours[i];
}


// add location row to table X
// add data to location row
const locationRowElem = document.createElement('tr');
salesTableElem.appendChild(locationRowElem).textContent = 'Seattle';

const salesRowElem = document.createElement('td');
locationRowElem.appendChild(salesRowElem);

// test adding a sales number for each time slot for one location
for (let i = 0; i < hours.length; i += 1) {
    // make sales data element
    let salesDataElem = document.createElement('td');
    let salesFigure = seattle.cookiesSold;
    locationRowElem.appendChild(salesDataElem).textContent = salesFigure;
}



