let a = 2
let b = 10
let c = 5

let discriminate = b ** 2 - 4 * a * c;

let x1 = (-b + (Math.sqrt(discriminate))) / (2 * a);
let x2 = (-b - (Math.sqrt(discriminate))) / (2 * a);


console.log(`When solving for X using the quadratic formula with a=2, b=10, and c=5 as variables, the solutions are ${x1} and ${x2}.`);

