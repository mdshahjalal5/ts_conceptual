
// type assertion
const thinkSomething:unknown = 34.43535;
//const result = (thinkSomething as number)
console.log((thinkSomething as string).length)

const myLuckyNum = (num: string | number): number | string =>{
    if(typeof num === 'string'){
        return "This is string";
    }
    return num;
}


type ami<t>  = t;

const name3:ami<string> = 'shahjalal'
console.log(name3);

type fun<T1, T2> = (p1:T1, p2:T2) => void

let ami:fun<string, number> = function(){

    return 'sha'
}

const amires = ami('3', 3)
console.log(amires);







