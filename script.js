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

// const lufthansa = {
// airline: 'Lufthansa',
// iataCode: 'LH',
// booking: [],
// book(flightNum , name){
//     console.log(
//         `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking.push({
//       flight: `${this.iataCode}
//       ${flightNum}`, 
//       name})
// },

// }

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'Jona Smith');
// console.log(lufthansa);

// const  eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     booking: [],
// }
//  const book = lufthansa.book;
// //! Does NOT work
// //  book(23, 'Sarah Williams')
// //? call method 
// book.call(eurowings,23, 'Sarah Williams');

// console.log(eurowings);

// book.call(lufthansa,236,'Sarah Williams');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     booking:[]
// }

// book.call(swiss,583,'Mary Cooper');
// console.log(swiss);
// //?Apply Method

// const flighData = [583, 'George Cooper'];
// book.apply(swiss,flighData);
// console.log(swiss);

// book.call(swiss,...flighData)
// //? Bind method
// // book.call(eurowings,23, 'Sarah Williams');
// // console.log(eurowings);

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23,'Steven Williams');

// const bookFW23 = book.bind(eurowings, 23)

// bookFW23('Jonas Schmedtmann');
// bookFW23('Martha Cooper');

// //?With Event Listeners 

// lufthansa.planes = 300 ;
// lufthansa.buyPlane = function(){
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// };
// // lufthansa.buyPlane()

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application 

// const addTax = (rate,value) => value+value*rate;
// console.log(addTax(0.1,200));

// const addVAT =  addTax.bind(null, 0.23);
// // addTax = value => value+value*rate;
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function(rate){
//     return function(value){
//         return value + value * rate ;
//     }
// }

// const addVAT2 = addTaxRate(0.23)
// console.log(addVAT2(100));
// console.log(addVAT2(23));

//? ====|Chaleng|====

// The Complete JavaScript Course 20
// A Closer Look at Functions
// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉
// GOOD LUCK 😀

const poll = {
question: "What is your favourite programming language?",
options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
// This generates [0, 0, 0, 0]. More in the next section!
answers: new Array(4).fill(0),
registerNewAnswer(){
    //?GEt answer
    const answer = Number( prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
    console.log(answer);
    //?REGISTER answer
    typeof answer ==='number' && answer < this.answers.length && this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
},
displayResults(type = 'array'){
if (type === 'array'){
    console.log(this.answers);
}else if ( type === 'string'){
    //poll result are 13,2,4,1 
    console.log(`Poll result are ${this.answers.join(', ')}`);
}
}
};
// poll.registerNewAnswer();

document.querySelector('.poll')
.addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.displayResults.call({answers:[5,2,3]},'string')