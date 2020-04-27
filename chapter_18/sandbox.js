//Spread & Rest
// rest parameter
// const double = (...nums) => {
//     console.log(nums);
//     return nums.map(num => num * 2)
// }

// const results = double(1,3,5,7,9,2,4,6,8);
// console.log(results);

// spread syntax (arrays)
// const people = ['russ', 'ryu', 'crystal'];
// console.log(...people);
// const members = ['mario', 'chun-li', ...people];
// console.log(members);

// spread syntax (objects)
// const person = { name: 'russ', age: 38, job: 'software dev' };
// const personClone = {...person, location: 'manchester'};

// console.log(personClone);

//Sets
// const namesArray = ['ryu', 'chun-li', 'ryu', 'russ'];
// console.log(namesArray);

//const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'russ']);
// const namesSet = new Set(namesArray);

// console.log(namesSet);

// const uniqueNames = [...namesSet];
// const uniqueNames = [... new Set(namesArray)];
// console.log(uniqueNames);

// const ages = new Set();
// ages.add(20);
// ages.add(25).add(30);
// ages.add(25);
// ages.delete(25);

// console.log(ages, ages.size);
// console.log(ages.has(30), ages.has(25));

// ages.clear();
// console.log(ages);

// const people = new Set([
//     {name: 'russ', age: 38},
//     {name: 'ryu', age: 29},
//     {name: 'chun-li', age: 32}
// ]);

// people.forEach(person => {
//     console.log(person.name, person.age);
// });

const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const people = {};

people.age = 30;
people['gender'] = 'male';
people['gender'] = 'female';

people[symbolOne] = 'ryu';
people[symbolTwo] = 'russ';
console.log(people)