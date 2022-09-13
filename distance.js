let x1 = 1
let x2 = 7
let y1 = 3
let y2 = 6

let xForm = ((x2 - x1) ** 2);
let yForm = ((y2 - y1) ** 2);

let formSum = (xForm + yForm);

console.log(`The distance between points (${x1},${x2}) and (${y1},${y2}) is ${Math.sqrt(formSum)}.`);

