const heroObj:{
    heroName: string;
    readonly age: number;
    profession: string;
    isMarried?: boolean;
} = {
    heroName: "Khan",
    age: 32,
    profession: "Actor",
    isMarried: false
}

let {heroName} = heroObj;

heroName = ''
console.log(heroName);