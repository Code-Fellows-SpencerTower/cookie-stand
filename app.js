'use strict';




const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function Stand(location, minCust, maxCust, avgSale) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    this.hourlySales = [];
    this.dailyTotal = 0;
    this.hourlyTotal = 0;
    this.allLocHourlyTotal = 0;

    this.genHourlySales();
    this.genDailyTotal();
}


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
    }

    this.dailyTotal = total;
}


const seattle = new Stand('Seattle', 23, 65, 6.3);
const tokyo = new Stand('Tokyo', 3, 24, 1.2);
const dubai = new Stand('Dubai', 11, 38, 3.7);
const paris = new Stand('Paris', 20, 38, 2.3);
const lima = new Stand('Lima', 2, 16, 4.6);

const standLocations = [seattle, tokyo, dubai, paris, lima];

const hourlyTotalSales = [];


//from class demo
function randomCust(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}



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
    totalHeaderElem.textContent = 'Daily Location Total';

}

Stand.prototype.render = function () {

    // create row
    const standRowElem = document.createElement('tr');
    // append row
    salesTableElem.appendChild(standRowElem);

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
    // final cell add total
    const thTotal = document.createElement('th');
    standRowElem.appendChild(thTotal);
    thTotal.textContent = this.dailyTotal;
}



function footerRow() {
    // Add up hourly total

    // Append to table row
    const tableFooter = document.createElement('tr');
    salesTableElem.appendChild(tableFooter);

    // need one cell for location

    const thCell = document.createElement('th');
    tableFooter.appendChild(thCell);
    thCell.textContent = 'Totals';
   
        for (let i = 0; i < hours.length; i += 1) {
            const tdCell = document.createElement('td');
            tableFooter.appendChild(tdCell);

            // call function

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
paris.render();
dubai.render();
lima.render();
footerRow();


function genHourlyTotal() {
for(let i = 0; i < hours.length; i += 1) {

    // total for each time slot
    let salesTotal = 0;

    for(let j = 0; j < standLocations.length; j += 1) {

        const currentStand = standLocations[j];
        let sale = currentStand.hourlySales[i];
        salesTotal += sale;

    }

    // breaks out of inner loop and pushes salesTotal to hourlyTotalSales
    hourlyTotalSales.push(salesTotal);

}

console.log('hourlTotalSales: ' + hourlyTotalSales);

}

const tdFooterElem = document.createElement('td');
salesTableElem.appendChild(tdFooterElem);

