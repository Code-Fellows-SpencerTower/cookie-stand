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
    this.dailyTotal = 0;
    this.hourlyTotal = 0;

    this.genHourlySales();
    this.genDailyTotal();

}

// generate cookies sold per hour // extend to fill .hourlySales[]
Stand.prototype.genHourlySales = function () {

    for (let i = 0; i < hours.length; i += 1) {

        const customers = randomCust(this.minCust, this.maxCust);
        const estSales = Math.ceil(customers * this.avgSale);
        this.hourlySales.push(estSales);
    }

}

Stand.prototype.genDailyTotal = function () {
    let total = 0;
    for (let i = 0; i < this.hourlySales.length; i += 1) {

        // grab sale, add to total
        total += this.hourlySales[i];
        // add to total
        // ?????????????
        console.log('RUNNING TOTAL: ' + total);

    }
    this.dailyTotal = total;
}

/*
// add up daily sales // append to dailyTotal
Stand.prototype.genDailyTotal = function () {

    for (let i = 0; i < this.hourlySales.length; i +=1 ) {

        // grab sale
        const sale = this.hourlySales[i];
        // add to total
        runningTotal += sale;
    }

    this.hourlyTotal = runningTotal; 
}
*/



const seattle = new Stand('Seattle', 23, 65, 6.3);
const tokyo = new Stand('Tokyo', 3, 24, 1.2);
const dubai = new Stand('Dubai', 11, 38, 3.7);
const paris = new Stand('Paris', 20, 38, 2.3);
const lima = new Stand('Lima', 2, 16, 4.6);

const standLocations = [seattle, tokyo, dubai, paris, lima];

//seattle.genDailyTotal();
console.log('SEATTLE DAILY TOTAL: ' + seattle.dailyTotal);




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
// grab div
const salesDivElem = document.getElementById('sales');
// create table
const salesTableElem = document.createElement('table');
// append table
salesDivElem.appendChild(salesTableElem);

function headerRow() {

    // create header row
    const headerRowElem = document.createElement('tr');
    // append header row
    salesTableElem.appendChild(headerRowElem);

    // append blank cell
    const blankHeaderCell = document.createElement('td');
    headerRowElem.appendChild(blankHeaderCell);

    // append hour headers
    for (let i = 0; i < hours.length; i += 1) {
        // create header elem
        const headerElem = document.createElement('th');
        // append header elem
        headerRowElem.appendChild(headerElem).textContent = hours[i];
    }

    // append 'Totals' header to end of row
    const totalHeaderElem = document.createElement('th');
    headerRowElem.appendChild(totalHeaderElem);
    totalHeaderElem.textContent = 'Totals';

}

Stand.prototype.render = function () {

    // create row
    const standRowElem = document.createElement('tr');
    // append row
    salesTableElem.appendChild(standRowElem);

    /*
    // get stand object
    const standObject = this.location;
    // get stand location param
    const standLocationParam = standObject.location;
    console.log(standLocationParam); // test
    */

    // create header
    const standHeader = document.createElement('th');
    // append header
    standRowElem.appendChild(standHeader)
    // append location to header elem
    standHeader.textContent = this.location;

    // append sales data to each row
    for (let i = 0; i < hours.length; i += 1) {

        // create data cell
        const salesDataElem = document.createElement('td');

        // grab sales data for current hour
        const salesDataForHour = this.hourlySales[i];

        // append data cell
        standRowElem.appendChild(salesDataElem);
        // fill data cell
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

    // need one cell for daily total
    const lastTotalCell = document.createElement('td');
    tableFooter.appendChild(lastTotalCell);
    lastTotalCell.textContent = 'TBD';

}

headerRow();
seattle.render();
tokyo.render();
dubai.render();

footerRow();





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