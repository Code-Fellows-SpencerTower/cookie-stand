'use strict';

// FORM
/*
function submitBtnClick(event) {
    console.log(event.target);
    alert('submitBtnClick Worked!');
}
// find button
const submitBtn = document.getElementById('submit-btn');

// set event type and function
submitBtn.addEventListener('click', buttonClick);
*/


// TABLE

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

// calculate sale for each hour
Stand.prototype.genHourlySales = function () {

    for (let i = 0; i < hours.length; i += 1) {
        // get random number of customers
        const customers = randomCust(this.minCust, this.maxCust);
        // calculate sale for hour based on customers and average sale
        const estSales = Math.ceil(customers * this.avgSale);
        this.hourlySales.push(estSales);
    }

}

// calculate daily total for each location
Stand.prototype.genDailyTotal = function () {
    let total = 0;
    for (let i = 0; i < this.hourlySales.length; i += 1) {
        // grab sale, add to total
        total += this.hourlySales[i];
    }
    this.dailyTotal = total;
}

// render sales table
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



const seattle = new Stand('Seattle', 23, 65, 6.3);
const tokyo = new Stand('Tokyo', 3, 24, 1.2);
const dubai = new Stand('Dubai', 11, 38, 3.7);
const paris = new Stand('Paris', 20, 38, 2.3);
const lima = new Stand('Lima', 2, 16, 4.6);

const standLocations = [seattle, tokyo, dubai, paris, lima];
const hourlyTotalSales = [];

// calculate random number of customers
function randomCust(min, max) {
    //from class demo
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

// grab sales div
const salesDivElem = document.getElementById('sales');
// create sales table
const salesTableElem = document.createElement('table');
// append table
salesDivElem.appendChild(salesTableElem);

// add header row
function genHeaderRow() {
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

    // append 'Daily Location Total' header to end of row
    const totalHeaderElem = document.createElement('th');
    headerRowElem.appendChild(totalHeaderElem);
    totalHeaderElem.textContent = 'Daily Location Total';

}

// add footer row with sales totals per hour
function genFooterRow() {
    // Add up hourly total

    // create total row
    const totalRowElem = document.createElement('tr');
    // Append total row to table
    salesTableElem.appendChild(totalRowElem);

    // create 'Total' cell at beginning of row
    const thCell = document.createElement('th');
    // append cell to total row
    totalRowElem.appendChild(thCell);
    // set cell content to 'Totals'
    thCell.textContent = 'Totals';

    // iterate through hours, add up total sales of all stores for each hour
    for (let i = 0; i < hours.length; i += 1) {
        // create sales data cell
        const tdCell = document.createElement('td');
        // append sales data cell to row
        totalRowElem.appendChild(tdCell);
        // calculate hourly totals, populate hourlyTotals array
        genHourlyTotalSales();

        // get total sales for current hour
        let sales = hourlyTotalSales[i];
        // set cell content to total sales
        tdCell.textContent = sales;
    }

    // get grand total
    const grandTotal = genGrandTotal();
    // create grand total cell
    const grandTotalCell = document.createElement('td');
    // append grand total cell
    totalRowElem.appendChild(grandTotalCell);
    // add grand total data to cell
    grandTotalCell.textContent = grandTotal;
}

// calculate total sales of all locations per hour
function genHourlyTotalSales() {
    for (let i = 0; i < hours.length; i += 1) {

        // total for each time slot
        let salesTotal = 0;

        for (let j = 0; j < standLocations.length; j += 1) {

            const currentStand = standLocations[j];
            let sale = currentStand.hourlySales[i];
            salesTotal += sale;
        }
        // push total sales for current hour to array
        hourlyTotalSales.push(salesTotal);
    }
}

// generate grand total
function genGrandTotal() {
    // calculate all daily location totals
    let grandTotal = 0;
    for (let i = 0; i < standLocations.length; i += 1) {
        // get stand object
        let currentStand = standLocations[i];
        // get daily total from stand object
        let standDailytotal = currentStand.dailyTotal;
        // calculate grand total
        grandTotal += standDailytotal;
    }
    return grandTotal;
}

genHeaderRow();
seattle.render();
tokyo.render();
paris.render();
dubai.render();
lima.render();
genFooterRow();



