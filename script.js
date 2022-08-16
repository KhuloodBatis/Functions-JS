'use strict';
//?1 function 
// const bookings = [];

// const createBooking = function(flightNum,numPassengers = 1,price = 199){
//    // ES5
// //    numPassengers = numPassengers || 1;
// //    price = price || 199;
//     const booking ={
//         flightNum ,
//         numPassengers,
//         price,
//     }

//     console.log(booking);
//     bookings.push(booking)
// }

// createBooking('LH123');
// createBooking('LH123' , 2, 800);
// createBooking('LH123',2);
// createBooking('LH123',5);

//?2 function 

// const flight = 'LH234';

// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 24739479284
// }

// const checkIn = function(flighNum, passenger){
//   flighNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if(passenger.passport === 24739479284){
//     alert('Checked in')
//   }else{
//     alert('wrong passport')
//   }
// }

// checkIn(flight,jonas)
// console.log(flight);
// console.log(jonas);

// //?is
// const flighNum = flight;
// const passenger = jonas;

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random()*10000000000)
// }

// newPassport(jonas);
// checkIn(flight , jonas)

//?3 function 
//! important 

// const oneWord = function(str){
//     return str.replace(/ /g,'').toLowerCase();

// };

// const upperFirstWord = function (str){
//     const [first,...others] = str.split(' ');
//     return [first.toUpperCase(),...others].join(' ');
// }

// const transformer = function (str,fn){
//     console.log(`Original string: ${str}`);

//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!',upperFirstWord );
// transformer('JavaScript is the best!', oneWord);

// const high5 = function(){
//     console.log('🤚');
// }

// document.body.addEventListener('click',high5);
// ['kool','noor','admn'].forEach(high5);

//?



// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
// const greeterHey = greet('Hey');

// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('kool');

// //? conver to arrow function 
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('hii')('joody');

//?The call and apply Methods

const lufthansa = {
airline: 'Lufthansa',
iataCode: 'LH',
booking: [],
book(flightNum , name){
    console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({
      flight: `${this.iataCode}
      ${flightNum}`, 
      name})
},

}

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'Jona Smith');
console.log(lufthansa);

const  eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: [],
}
 const book = lufthansa.book;
//! Does NOT work
//  book(23, 'Sarah Williams')
//? call method 
book.call(eurowings,23, 'Sarah Williams');

console.log(eurowings);

book.call(lufthansa,236,'Sarah Williams');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    booking:[]
}

book.call(swiss,583,'Mary Cooper');
console.log(swiss);
//?Apply Method

const flighData = [583, 'George Cooper'];
book.apply(swiss,flighData);
console.log(swiss);

book.call(swiss,...flighData)
//? Bind method
// book.call(eurowings,23, 'Sarah Williams');
// console.log(eurowings);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23,'Steven Williams');

const bookFW23 = book.bind(eurowings, 23)

bookFW23('Jonas Schmedtmann');
bookFW23('Martha Cooper');

//?With Event Listeners 

lufthansa.planes = 300 ;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane()

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application 

const addTax = (rate,value) => value+value*rate;
console.log(addTax(0.1,200));

const addVAT =  addTax.bind(null, 0.23);
// addTax = value => value+value*rate;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate){
    return function(value){
        return value + value * rate ;
    }
}

const addVAT2 = addTaxRate(0.23)
console.log(addVAT2(100));
console.log(addVAT2(23));