console.log('Destructuring!');

const person = {
	name: 'Andrew',
	age: 26,
	location: {
		city: 'Philadelphia',
		temp: 97
	}
};
// Original
// console.log(`${person.name} is ${person.age}.`);

//  Idea
//  const name = person.name;
//  const age = person.age;
//  console.log(`${name} is ${age}.`);

// const { name, age } = person;
// console.log(`${name} is ${age}.`);

//Why it is useful: below

/* if (person.location.city && person.location.temp) {
 	console.log(` It's ${person.location.temp} in ${person.location.city}.`);
 } */

//vs

/* const { city, temp } = person.location;
 //Or const { location: { temp, city } } = person;
 if (city && temp) {
 	console.log(` It's ${temp} in ${city}.`);
 } */

//Renaming
/*const { location: { temp, city: place } } = person;
if (place && temp) {
	console.log(` It's ${temp} in ${place}.`);
} */

//Default value
/*const { location: { temp = 45, city } } = person;
if (city && temp) {
	console.log(` It's ${temp} in ${city}.`);
} */

//Challenge: destructuring: make clg work

const book = {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin'
	}
};

const { publisher: { name: publisherName = 'Self-Published' } } = book;

console.log(publisherName);
