//console.log('testing!');
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;
//blank comma to skip index, defaults same as obj

console.log(`You are in ${city} ${state}`);

//Challenge: destructure clg

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [hCoffee, , mediumCoffee] = item;
console.log(`A medium ${hCoffee} cost ${mediumCoffee}`);
