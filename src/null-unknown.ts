// null
const myText = (text: string | null):void => {

    // ? before checking the type you can't use any operation 
    
//   ?console.log(text.slice(0, 3)); // ![ts] 'text' is possibly 'null'.

  if (text === null) {
    console.log("I have no text");
  } else {
    console.log(text);
  }
}

//myText(null);
//myText("This is not a null value");



// unknown type
// ?n! if unknown first ensure the type 
const guessSomething = (myGuess: unknown) => {
    
    // ! n! before checking the type you can't use any operation
  // const  chk = myGuess+5 //? [ts] 'myGuess' is of type 'unknown'.
  if (typeof myGuess === "number") {
    return myGuess + 5;
  }

  console.log(myGuess);
}
// ? n! for checking the type we can use type guard function 
// !n! example of type guard function
function isString(value: unknown): value is string {
  return typeof value === "string";
}

guessSomething(23);
guessSomething("hello");
guessSomething(null);
guessSomething(undefined);
guessSomething(true);