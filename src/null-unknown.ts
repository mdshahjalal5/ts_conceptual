// null
const myText = (text: string | null):void => {
    console.log(text.slice(0, 3));
    
    if(text === null){
        console.log("I have no text");
    }
    else{
        console.log(text);
    }
}

//myText(null);
//myText("This is not a null value");


// unknown type
// ?n! if unknown first ensure the type 
const guessSomething = (myGuess: unknown) => {
    
  // const  chk = myGuess+5 //? [ts] 'myGuess' is of type 'unknown'.
  if (typeof myGuess === "number") {
    return myGuess + 5;
  }

  console.log(myGuess);
}

guessSomething(23);
guessSomething("hello");
guessSomething(null);
guessSomething(undefined);
guessSomething(true);