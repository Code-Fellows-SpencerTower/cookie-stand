'use strict';

// ******** FORM ********

const submitBtn = document.getElementById('submit-btn').addEventListener('click', getFormInput);

// get location from form
function getFormInput() {

    const locationInput = document.getElementById('locationInput').value;
    const minCustInput = parseInt(document.getElementById('minCustInput').value);
    const maxCustInput = parseInt(document.getElementById('maxCustInput').value);
    const avgSaleInput = parseInt(document.getElementById('avgSaleInput').value);
    addInputToTable(locationInput, minCustInput, maxCustInput, avgSaleInput);
}

function addInputToTable(location, minCust, maxCust, avgSale) {
    
    const newStandLocation = new Stand(location, minCust, maxCust, avgSale);
    standLocations.push(newStandLocation);

    // grab footer row
    const totalRow = document.getElementById('total-row');
    // remove footer row
    totalRow.remove();
    // append new store row
    newStandLocation.render();
    // regenerate footer row with new totals
    genFooterRow();
}


// ******** TABLE ********

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
        const estSales = Math.ceil(customers * this.avgSale);
        this.hourlySales.push(estSales);
    }

}

// calculate daily total for each location
Stand.prototype.genDailyTotal = function () {

    let total = 0;
    for (let i = 0; i < this.hourlySales.length; i += 1) {
        total += this.hourlySales[i];
    }
    this.dailyTotal = total;
}

// render sales table
Stand.prototype.render = function () {

    const standRowElem = document.createElement('tr');
    salesTableElem.appendChild(standRowElem);

    const locationElem = document.createElement('td');
    standRowElem.appendChild(locationElem)
    locationElem.textContent = this.location;

    // append sales data to each row
    for (let i = 0; i < hours.length; i += 1) {

        const salesDataElem = document.createElement('td');
        const salesDataForHour = this.hourlySales[i];

        standRowElem.appendChild(salesDataElem);
        salesDataElem.textContent = salesDataForHour;

    }
    // final cell in row
    const dailyTotalElem = document.createElement('td');
    standRowElem.appendChild(dailyTotalElem);
    dailyTotalElem.textContent = this.dailyTotal;
}

// calculate random number of customers
function randomCust(min, max) {
    //from class demo
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

const seattle = new Stand('Seattle', 23, 65, 6.3);
const tokyo = new Stand('Tokyo', 3, 24, 1.2);
const dubai = new Stand('Dubai', 11, 38, 3.7);
const paris = new Stand('Paris', 20, 38, 2.3);
const lima = new Stand('Lima', 2, 16, 4.6);

const standLocations = [seattle, tokyo, dubai, paris, lima];
let hourlyTotalSales = [];

// grab sales div
const salesDivElem = document.getElementById('sales-table');
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
    genDailyLocationTotalHeader(headerRowElem);
}

// create and append 'Daily Location Total' header
function genDailyLocationTotalHeader(headerRowElem) {

    const totalHeaderElem = document.createElement('th');
    headerRowElem.appendChild(totalHeaderElem);
    totalHeaderElem.textContent = 'Daily Location Total';
}

// add footer row with sales totals per hour
function genFooterRow() {

    const totalRowElem = document.createElement('tr');
    totalRowElem.setAttribute('id', 'total-row');
    salesTableElem.appendChild(totalRowElem);

    // create 'Total' cell at beginning of row
    const tdCell = document.createElement('td');
    totalRowElem.appendChild(tdCell);
    tdCell.textContent = 'Totals';
    
    // calculate hourly totals for all stores
    genHourlyTotalSales();
    // iterate through hours, add up total sales of all stores for each hour
    for (let i = 0; i < hours.length; i += 1) {
        // create sales data cell
        const tdCell = document.createElement('td');
        // append sales data cell to row
        totalRowElem.appendChild(tdCell);
        // get total sales for current hour
        let sales = hourlyTotalSales[i];
        // set cell content to total sales
        tdCell.textContent = sales;
    }

    // get grand total
    const grandTotal = genGrandTotal();
    const grandTotalCell = document.createElement('td');
    totalRowElem.appendChild(grandTotalCell);
    grandTotalCell.textContent = grandTotal;
}

// calculate hourly totals for footer row
function genHourlyTotalSales() {
    
    hourlyTotalSales = [];
    for (let i = 0; i < hours.length; i += 1) {
        // total for each time slot
        let salesTotal = 0;

        for (let j = 0; j < standLocations.length; j += 1) {
            const currentStand = standLocations[j];
            let sale = currentStand.hourlySales[i];      
            salesTotal += sale;
        }
        hourlyTotalSales.push(salesTotal);
    }
}

function genGrandTotal() {

    let grandTotal = 0;
    for (let i = 0; i < standLocations.length; i += 1) {
        let currentStand = standLocations[i];
        let standDailytotal = currentStand.dailyTotal;
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