console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) { 
        console.log(i); 
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ'); 
    } else if (i % 3 === 0) {
        console.log('FIZZ'); 
    } else if (i % 5 === 0) {
        console.log('BUZZ'); 
    }
}


// Exercise 3 Repeat exercise 1 and 2 with Do/While loops

// Exercise 1 Do/While loop
console.log("Exercise 3 - Part 1:\n==========\n")
let j = 1;
while (j <= 100) {
    if (j % 2 !== 0) { 
        console.log(j); 
    }
    j++;
}
 j = 1;
do {
    if (j % 2 !== 0) { 
        console.log(j); 
    }
    j++;
} while (j <= 100);

// Exercise 2 Do/While loop
console.log("Exercise 3 - Part 2:\n==========\n")
 j = 1;
while (j <= 100) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log('FIZZBUZZ'); 
    } else if (j % 3 === 0) {
        console.log('FIZZ'); 
    } else if (j % 5 === 0) {
        console.log('BUZZ'); 
    }
    j++;
}
 j = 1;
do {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log('FIZZBUZZ'); 
    } else if (j % 3 === 0) {
        console.log('FIZZ'); 
    } else if (j % 5 === 0) {
        console.log('BUZZ'); 
    }
    j++;
} while (j <= 100);

// Exercise 4 Find Value
console.log("Exercise 4:\n==========\n")
let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

let found = false; 

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log("Found value!"); 
        found = true;
        break; 
    }
}

if (!found) {
    console.log("Did not find value"); 
}

// Exercise 5 FIZZBUZZ
console.log("Exercise 5:\n==========\n")
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
 n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log('FIZZBUZZ');
    } else if (i % fizzDivisor === 0) {
        console.log('FIZZ');
    } else if (i % buzzDivisor === 0) {
        console.log('BUZZ');
    }
}

