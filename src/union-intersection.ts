// ? 


type HeroTypeA = {
    name: string;
    age?: number;
}

interface another {
    another:string;
}

type HeroTypeB = HeroTypeA & another & {
    salary: number;
    position?: string;
}

const HeroData:HeroTypeB = {
    name: "jalil",
    age: 23,
    salary: 3534,
    position: "Deeveloper", 
    another: "Deeveloper",  
}

//union -> |
// intersection -> &
// ?q! n!
// ?n! myfavHero should be HeroTypeA or HeroTypeB but below it's  type is not HeroTypeA or HeroTypeB still editor not showing error 
const myFavHero:HeroTypeA | HeroTypeB = {
    name: "khan",
    // age: 30, //? union let no problem if one is missing 
    salary: 34454,// ?
    //position: "Actor"
}

// ? 5/28/2023, 5:33:29 AM 5/28/2023, 5:33:33 AM 5/28/2023, 5:33:33 AM 5/28/2023, 5:33:33 AM 

interface a {
    a:number;
}

interface b {
    b:string, 
}

interface c {
    c:boolean; 
}

type d = a & b &{
    name:string;
}  | c;

const DD:d = {
    a:1,
    b:'b', 
    name:'same', 
    c:true
}