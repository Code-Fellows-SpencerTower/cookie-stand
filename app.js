'use strict';

let seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookiesSold: 6.3,
    hourlyCust: 0,
    hourlyCookiesSold: 0,
    assignHourlyCust: function () {
        this.hourlyCust = randomInRange(23, 65);
    },
    assignCookiesSoldPerHour: function () {
        this.hourlyCookiesSold = avgCookiesSold * hourlyCust;
    },
    cookiesSoldEachHour: [],
    locationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    totalCookiesSold: 0,
    assignCookiesSoldEachHour: function () {
        
    }

}

// from class demo
function randomInRange(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

// calc and store cookies purchases for each hour
function calculateCookiesSoldPerHour(location) {
    console.log("location: " + location)
    let hourlyCustomers = location.assignHourlyCust;
    console.log(hourlyCustomers);
    let cookiesSoldPerHour = location.assignCookiesSoldPerHour;
    console.log(cookiesSoldPerHour);
}

let customers = seattle.assignHourlyCust();
console.log("customers: " + customers);
calculateCookiesSoldPerHour("seattle");










/*
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