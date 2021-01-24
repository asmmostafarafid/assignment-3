"use strict";

//   kilometer to meter
function kilometerToMeter(kilometer) {
  return meter = kilometer * 1000;
}

var result = kilometerToMeter(20);
console.log(result); //bugestCalculator 

function budgetCalculator(clock, phone, laptop) {
  if (clock < 0) {
    return 'Buying a clock';
  }

  if (phone < 0) {
    return 'Buing a phone';
  }

  if (laptop < 0) {
    return 'Buying a laptop';
  }

  var oneClock = 50; //clock

  var onePhone = 100; //phone 

  var oneLaptop = 500; //laptop

  var totalClock = oneClock * clock;
  var totalPhone = onePhone * phone;
  var totalLaptop = oneLaptop * laptop;
  var totalshopping = totalClock + totalPhone + totalLaptop;
  return totalshopping;
}

var shopping = budgetCalculator(2, 2, 2);
console.log(shopping);