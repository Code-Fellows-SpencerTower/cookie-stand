//'use strict';

const seattle = {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookiesSold: 6.3,
    hourlyCust: 0,
    cookiesSold: 0,
    cookiesSoldByHour: [10, 8],
    //hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    assignHourlyCust: function () {
        this.hourlyCust = randomInRange(23, 65);
        return this.hourlyCust;
    },
    // hourlyCust must be initiated first
    assignCookiesSold: function () {
        this.cookiesSold = this.avgCookiesSold * this.hourlyCust;
        return this.cookiesSold;
    },
    /*
    assignCookiesSoldByHour: function () {
        for (let i = 0; i < this.hours.length; i += 1) {
            this.cookiesSoldByHour.push(this.hours[i] + this.cookiesSold + " cookies");
        }
        return this.cookiesSoldByHour;
    }
    */

}

// from class demo
function randomInRange(min, max) {
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



const hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

const divElem = document.getElementById('seattle'); // get parent element
const ulElem = document.createElement('ul'); // make child ul element
divElem.appendChild(ulElem); // append ul to div



function populateSalesList() {
    for (let i = 0; i < hours.length; i++) {
        const listText = `${hours[i]}: ${seattle.cookiesSoldByHour[i]} cookies`;
        // make child li element
        const salesLi = document.createElement('li');
        // append li to ul
        ulElem.appendChild(salesLi).textContent = listText;
    }
}

populateSalesList();




























// 6. make function that populates empty array with hour and cookies sold in a string

/*
let hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ' , '6pm: ', '7pm: '];

let cookiesSold = 5;

let cookiesSoldByHour = [];

function assignCookiesSoldByHour(hours, cookiesSold, cookiesSoldByHour) {
    console.log("hours.length: "  + hours.length);
    for (let i = 0; i < hours.length; i += 1) {
        cookiesSoldByHour.push(hours[i] + cookiesSold);
        console.log(cookiesSoldByHour);
    }
    return cookiesSoldByHour;
}

let cookiesHours = assignCookiesSoldByHour(hours, cookiesSold, cookiesSoldByHour);
console.log(cookiesHours);
*/



























/*
// from class demo
function randomInRange(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}



let tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookiesSold: 1.2,
    hourlyCust = 0,
    assignHourlyCust: function () {
        this.hourlyCust = randomInRange(3, 24);
    }
}

let dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookiesSold: 3.7,
    hourlyCust = 0,
    assignHourlyCust: function () {
        this.hourlyCust = randomInRange(11, 38);
    }
}

let paris = {
    minCust: 20,
    maxCust: 38,
    avgCookiesSold: 2.3,
    hourlyCust = 0,
    assignHourlyCust: function () {
        this.hourlyCust = randomInRange(20, 38);
    }
}

let lima = {
    minCust: 2,
    maxCust: 16,
    avgCookiesSold: 4.6,
    hourlyCust = 0,
    assignHourlyCust: function () {
        this.hourlyCust = randomInRange(2, 16);
    }
}
*/