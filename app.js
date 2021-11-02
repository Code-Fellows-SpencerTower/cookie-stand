'use strict';

const seattleShop = {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookiesSold: 6.3,
    hourlyCust: 0,
    cookiesSold: 0,
    cookiesSoldPerHour: [10, 8],
    
    // hourlyCust must be initiated first
    assignCookiesSold: function () {
        this.cookiesSold = this.avgCookiesSold * randomCust(this.minCust, this.maxCust)
        return Math.ceil(this.cookiesSold); // round up
    },
}

// from class demo
function randomCust(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}



// 1. make sure object properties work X
// 2. make sure object methods work X
// 3. make function to calculate cookies sold each hour X
// 4. make array with location hours X
// 5. make empty array for hours + cookies sold X
// 6. make function that populates empty array with hour and cookies sold in a string
// 7. add 'seattle' as id to div X
// 8. grab parent element from html X
// 9. add ul to parent element X
// 10. add li to ul X
// 11. add hour + cookies sold to each hour



const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const divElem = document.getElementById('seattle'); // get parent element
const ulElem = document.createElement('ul'); // make child ul element
divElem.appendChild(ulElem); // append ul to div



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




// calculate and store average sales per hour for the shop
// get total sales

for (i = 0; i < hours.length; i += 1) {
    cookiesShop.
}