//function declaration
// function greet(){
//     console.log('hello there');
// }

// //function expression
// const speak = function(){
//     console.log('good day');
// };

// // greet();
// // greet();
// // greet();

// speak();
// speak();
// speak();

//arguments & parameters
// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

// speak('mario', 'morning');
// speak();

//returning
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log(area);

//arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// const calcArea = radius => 3.14 * radius**2;


// const area = calcArea(5);
// console.log(area);

//practice arrow functions
// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10,15,30], 0.2));

//functions
// const greet = () => 'hello'

// let resultOne = greet();
// console.log(resultOne);

// //methods
// const name = 'russ';

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

//callbacks & foreach

// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     //do something
//     console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'russ', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// }

// people.forEach(logPerson);

// people.forEach((person, index) => {
//     console.log(index, person);
// })

// const ul = document.querySelector('.people');

// let people = ['mario', 'luigi', 'ryu', 'russ', 'chun-li'];

// let html = ``

// people.forEach(person =>{
//     //create html template
//     html += `<li style="color: purple">${person}</li>`
// });

// console.log(html);
// ul.innerHTML = html;