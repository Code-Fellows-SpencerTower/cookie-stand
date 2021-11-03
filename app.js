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



function Stand(location, minCust, maxCust, avgSale) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;

    this.hourlySales = [];

    this.genHourlySales();

}

// generate cookies sold per hour // extend to fill .hourlySales[]
Stand.prototype.genHourlySales = function () {
    // from class 08 demo
    for (let i = 0; i < hours.length; i += 1) {

        const customerRange = this.maxCust - this.minCust;

        const randomCustCount = Math.ceil(Math.random() * customerRange);

        const adjustedCustCount = randomCustCount + this.minCust;

        const estimatedSales = Math.ceil(adjustedCustCount * this.avgSale);

        this.hourlySales.push(estimatedSales);


    }

    console.log(this.hourlySales);


}

const seattle = new Stand('Seattle', 23, 65, 6.3);
const tokyo = new Stand('Tokyo', 3, 24, 1.2);
const dubai = new Stand('Dubai', 11, 38, 3.7);
const paris = new Stand('Paris', 20, 38, 2.3);
const lima = new Stand('Lima', 2, 16, 4.6);

const standLocations = [seattle, tokyo, dubai, paris, lima];

console.log('seattle: ' + seattle.hourlySales);
console.log('lima: ' + lima.hourlySales);

// iterate through each hour
// iterate through each location for each hour

const hourlyTotalSales = [];

// from class 08 demo
// calculate total sales for each time slot and put in hourlyTotalSales array
for(let i = 0; i < hours.length; i += 1) {

    const timeSlot = hours[i];

    // total for each time slot
    const salesTotal = 0;

    for(let j = 0; i < standLocations.length; i += 1) {

        const currentStand = standLocations[j];

        const salesCurrentStand = currentStand.hourlySales[i];

        // tallys total sales for each timeslot
        salesTotal += salesCurrentStand;
    } 

    // breaks out of inner loop and pushes salesTotal to hourlyTotalSales
    hourlyTotalSales.push(salesTotal);
}

// do same as above for location totals
const locationTotals = [];












/*
// from class demo
function randomCust(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}
*/







/*
// test object constructor
const seattle = new Stand('Seattle', 23, 65, 6.3);
console.log(seattle.hourlySales)


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
    let salesFigure = seattle.hourlySales;
    locationRowElem.appendChild(salesDataElem).textContent = salesFigure;
}


*/


