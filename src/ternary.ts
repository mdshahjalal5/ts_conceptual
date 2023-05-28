const isHeroAvailable:boolean = true;

// if(isHeroAvailable){
//     console.log("book now");
// }
// else{
//     console.log("you can not book");
// }

const checkAvailablity = isHeroAvailable ? "book now" : "you can not book";
// condition ? true_value : false_value
//console.log(checkAvailablity);

// nullish operator ( ?? )
// check null and undefined
/**
 * null = No input
 * undefined = No input
 * hello = hello
 * 4 = 4
 * true = true
 * false = false
 * "" = ""
 */

// ! n! if inputSomething is null | undefined then checkInput value is "no input" 
const inputSomething:unknown =null;
const checkInput = inputSomething ?? "No input";
console.log(checkInput);


// !n! if inputSomething2 is not null | undefined then checkInput value will be the inputSomething value
const inputSomething2: unknown = 'its not null or undefined';
const checkInput2 = inputSomething2 ?? "No input";
console.log(checkInput2);
