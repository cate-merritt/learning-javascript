
/* QUESTION 1 
Create an array called ages that
contains the following values: 
3, 9, 23, 64, 2, 8, 28, 93.

QUESTION 1a 
Programmatically subtract the value of
the first element in the array
from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed! */

console.log("codeAlong") /*logs string to console*/
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; /*defines ages array*/
console.log("Ages", ages); /*logs array to console*/
let minusAge = ages [ages.length - 1] - ages[0]; 
/*finds difference between last and first element 
in ages array */
console.log("minusAge", minusAge); /*logs value to console*/

/* QUESTION 1b
Add a new age to your array and repeat
the step above to ensure it is dynamic. 
(works for arrays of different lengths). */

ages.push(100); /*adds new value to ages array*/
console.log("Ages after pushing a new value", ages); 
/*logs updated array*/
let minusAgePush = ages [ages.length - 1] - ages[0];
/*calculates new difference between last element
(100) and first element (3)*/

/* QUESTION 1c
Use a loop to iterate through the array
and calculate the average age. */

let sumOfAges = 0; /*creates variable, assigns value of 0*/
for(let i = 0; i < ages.length; i++) /*begins loop
through elements in ages array*/ {
sumOfAges += ages [i] /*adds value of index to sumOfAges*/
console.log("index", i, "sumOfAges", sumOfAges); 
/*logs index and new value of sumOfAges with each pass*/
} /*closes loop*/
console.log("Total Sum", sumOfAges);
/*logs total value after loop completion*/
let average = sumOfAges / ages.length
/*calculates average, stores value in variable "average"*/
console.log("Average", average);
/*logs calculation "average" to console*/

/* QUESTION 2
Create an array called names that
contains the following values:
'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

QUESTION 2a
Use a loop to iterate through the array and
calculate the average number of letters per name. */

let names =['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] 
/*this creates the array*/
let totalChars = 0;
/*this creates the variable */
for(let i = 0; i < names.length; i++) /* initilizes the for loop */ {

totalChars += names [i].length /*this adds the length (number of characters) 
for each name */
console.log("index:",i,"name:", names, "totalChars:", 
totalChars); /*prints values to console */
} /*this marks the end of the for loop */
let averageName = totalChars / names.length /*calculates the average */
console.log("Average of Names:", averageName); /*prints to console */

/* QUESTION 2b
Use a loop to iterate through the array again
and concatenate all the names together, 
separated by spaces. */

let concatNames = " "; /*initializes variable*/
for(let i = 0; i < names.length; i++) /*for loop*/ {
// console.log("Test")
concatNames = concatNames.concat(names [i] + " "); /* concatenation */
console.log(i, "Names concatenated", concatNames); /*prints to cosnole */
} /*ends for loop */

/* QUESTION 3
How do you access the last element
of any array? */

console.log("Last element of ages array:", /*prints to console */
ages [ages.length -1]); /* collects the length of array ages, minus 1
from the length to find the last element in array */


/* QUESTION 4
How do you access the first element
of any array? */
console.log("First element of ages array:", ages [0]);
/* This prints the first element in the array, ages along with a 
text string label */

/* QUESTION 5
Create a new array called nameLengths.
Write a loop to iterate over the previously
created names array and add the length
of each name to the nameLengths array. */

let nameLengths = []; /* initializes the array */
for (let i = 0; i < names.length; i++) { /* for loop */ 
  nameLengths.push(names [i].length); /* finds length of names */
  console.log ("Name lengths array:", nameLengths); /* prints to console */
}

/* QUESTION 6
Write a loop to iterate over the 
nameLengths array and calculate the
sum of all the elements in the array. */

let charsTotal = 0; /*variable initilaization */
for (let i = 0; i < nameLengths.length; i++) /* for loop repeating each element */ {
charsTotal += nameLengths[i] /* adds length of name */
console.log("charsTotal:", charsTotal); /* prints to console */
}

/* QUESTION 7
Write a function that takes two parameters, 
word and n, as arguments and returns the word
 concatenated to itself n number of times. */

function concatWords(word, n) /*declares function with two paramaters */ {
    console.log("Word Par:", word, "n Par:", n); /* prints to console */
    let concat = word.repeat(n); /* repeats to concate word */
    console.log(concat); /* logs concatenated string to console */
}
concatWords("Hello", 3); /* calls the function with two arguments */

/* QUESTION 8
Write a function that takes two parameters, 
firstName and lastName, and returns a full name.
The full name should be the first and the
last name separated by a space. */

function fullName(firstName, lastName) /* declares function with 
two paramaters */ {
let fullName = firstName + " " + lastName; /* declares variable */
console.log(fullName); /* prints to console */
}
fullName("Cate, Merritt"); /*calls function with arguments */

/* QUESTION 9
Write a function that takes an array of numbers
and returns true if the sum of all the numbers 
in the array is greater than 100.  */

let numbers1 = [100,200,300,400] /* initializes array */
let numbers2 = [1,2,3,4] /* initializes array */

function sumNumbersArray(array) /*initializes function with one 
paramater */ {
 let total = 0; /* creates variable */

 for (let i = 0; i < array.length; i++) /* for loop */ {
   total += array [i]
   console.log("Total:", total); /* logs to console */
}
    if (total > 100) /* checks if total is greater  than 100 */ {
    console.log("Total:", total, true); /* logs to console */
    return true
} else {
    console.log("Total:", total,false); /* if total is not greater than
    100, return false  */
    return false /* logs to console */
}
} 
sumNumbersArray(numbers2); /* function call */

/* QUESTION 10
Write a function that takes an array 
of numbers and returns the average of
all the elements in the array.  */

function calculateNumbersAverage(array) /* function declaration */ {
 let total = 0; /* create variable */

 for (let i = 0; i < array.length; i++) /* for loop repeats through
 each element in array */ {
    total += array[i];
    console.log("calculate Function, total:", "total");
    } /* ends loop */
    let average = total / array.length; /* calculates average with division */
    console.log("Average of numbers:", average); /* logs to console */
    return average; /* returns variable average */
}
calculateNumbersAverage(numbers1); /* function call, one argument */

/* QUESTION 11
Write a function that takes two arrays of numbers 
and returns true if the average of 
the elements in the first array is greater
than the average of the elements in the second array.  */

let numbers3 = [100,100,100];
let numbers4 = [100,100,99]; /* array initialization */

function twoAverages(array1,array2) /* declares function */ {
    console.log("Parameters:", array1, array2); /* prints to console */
    let total1 = 0; 
    let total2 = 0; /* initialization of variables */
  for (const number of array1) /* for loop begin for array1 */{
    total1 += number
    console.log("Current number loop1:", number, "Total:", total1);
  } /* end for loop array1 */
  for (const number of array2) /* begin for loop array2 */ {
    total2 += number;
    console.log("Current number loop2:", number, "Total:", total2); 
    /* logs to console */
  } /* end for loop array2 */
  let average1 = total1 / array1.length;
  let average2 = total2 / array2.length; /* calculates averages */

  console.log("Averages", average1, average2); /* prints averages and text */

  if (average1 > average2) /* checking conditionals */ {
    console.log(true);
    return true
  } else if (average1 < average2) {
  console.log(false);
  return false
} else {
    console.log("Numbers are equal"); /* prints to console */
  }
}
twoAverages(numbers3, numbers4); /* function call with two arguments */

/* QUESTION 12
Write a function called willBuyDrink
that takes a boolean isHotOutside, 
and a number moneyInPocket, and returns true 
if it is hot outside and if moneyInPocket
is greater than 10.50.  */

function willBuyDrink(isHotOutside, moneyInPocket) 
/* function creation */ {
console.log("Parameters", isHotOutside, moneyInPocket);
 /* prints function's paramaters to console */
  let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
  console.log("Buy a drink?", buyDrink); 
  /* conditionals, prints to console */
  ;return buyDrink;
}

willBuyDrink(true, 11) /* function call, two arguments*/
