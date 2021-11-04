'use strict';

// 1. render method to create and append a row for each location
// 1. create row
// 2. append row
// 3. populate row
// 4. 1st cell in row - location name
// if i = 0 then populate with location name
// else, populate with random
// 5. populate rest of cells based on 
//Stand.prototype.render = function () {}

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

        const customers = randomCust(this.minCust, this.maxCust);

        const estSales = Math.ceil(customers * this.avgSale);

        this.hourlySales.push(estSales);
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


//from class demo
function randomCust(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}


// Stand.prototype.render = function()

// get sales div
const salesDivElem = document.getElementById('sales');
// make table
const salesTableElem = document.createElement('table');
// append table to sales div
salesDivElem.appendChild(salesTableElem);


// make header row
const headerRowElem = document.createElement('tr');
salesTableElem.appendChild(headerRowElem);

// add blank cell to header row
const blankHeaderCell = document.createElement('td');
headerRowElem.appendChild(blankHeaderCell);

// i set to -2 to start with empty cell in header row
for (let i = 0; i < hours.length; i += 1) {
    const headerElem = document.createElement('th');
    headerRowElem.appendChild(headerElem).textContent = hours[i];
}

// add location row to table X
// add data to location row

for (let i = 0; i < standLocations.length; i += 1) {

    const standRowElem = document.createElement('tr');
    //const standLoc = standLocations[i].location;
    salesTableElem.appendChild(standRowElem);

    // get stand object
    const standObject = standLocations[i];
    // get stand location param
    const standLocationParam = standObject.location;
    console.log(standLocationParam); // test

    const standHeader = document.createElement('th');
    standRowElem.appendChild(standHeader)
    // add location param to header elem
    standHeader.textContent = standLocationParam;

    // add sales data to each row
    for (let j = 0; j < hours.length; j += 1) {


        const salesDataElem = document.createElement('td');

        // get sales for that hour
        const salesDataForHour = standObject.hourlySales[j];

        //console.log(standName.hourlySales.length);

        //console.log('hourSales: ' + salesDataForHour);
        // append data
        standRowElem.appendChild(salesDataElem);
        salesDataElem.textContent = salesDataForHour;

    }

}

// make table footer row

function footerRow() {
    // Add up hourly total

    // Append to table row

    const tableFooter = document.createElement('tr');
    salesTableElem.appendChild(tableFooter);

    // need one cell for location

    const thCell = document.createElement('th');
    tableFooter.appendChild(thCell);
    thCell.textContent = 'Totals';


    // need cell for every hour (loop) for as many hours

    for (let i = 0; i < hours.length; i += 1) {
        const tdCell = document.createElement('td');
        tableFooter.appendChild(tdCell);
        tdCell.textContent = '?';
    }

    // need one cell for alltotal
    const lastTotalCell = document.createElement('td');
    tableFooter.appendChild(lastTotalCell);
    lastTotalCell.textContent = 'TBD';

}

footerRow();



/*
// test adding a sales number for each time slot for one location
for (let i = 0; i < hours.length; i += 1) {
    // make sales data element
    let salesDataElem = document.createElement('td');
    let salesFigure = seattle.hourlySales;
    locationRowElem.appendChild(salesDataElem).textContent = salesFigure;
}
*/




// ********* ESTIMATE TOTAL ***********
/*
for(let i = 0; i < hours.length; i += 1) {

    const timeSlot = hours[i];

    // total for each time slot
    let salesTotal = 0;

    for(let j = 0; j < standLocations.length; j += 1) {

        const currentStand = standLocations[j];

        let salesCurrentStand = currentStand.hourlySales[timeSlot];

        // tallys total sales for each timeslot
        salesTotal += salesCurrentStand;
        console.log('salesTotal: ' + salesTotal);
    }

    // breaks out of inner loop and pushes salesTotal to hourlyTotalSales
    hourlyTotalSales.push(salesTotal);
}

console.log('hourlTotalSales: ' + hourlyTotalSales);

// do same as above for location totals
const locationTotalSales = [];
*/