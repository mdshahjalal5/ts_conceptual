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

const myFavHero:HeroTypeA | HeroTypeB = {
    name: "khan",
    age: 30,
    salary: 34454,
    //position: "Actor"
}

// ? 5/28/2023, 5:33:29 AM 5/28/2023, 5:33:33 AM 5/28/2023, 5:33:33 AM 5/28/2023, 5:33:33 AM 

interface a {
    a:number;
}

interface b {
    b:string, 
}