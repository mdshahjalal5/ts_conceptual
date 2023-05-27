//? spread operator

const heroArr1:string[] = ['khan', 'jalil', 'siam'];
const heroArr2:string[] = ['alom', 'faruk', 'razzak'];

const [hero1, hero2, xyz] = heroArr1;
/**
 * hero1 = khan
 * hero2 = jalil
 * hero3 = siam
 */
console.log(hero1, hero2, xyz);



heroArr1.push(...heroArr2); // 'alom', 'faruk', 'razzak'
console.log(heroArr1);

// ?n! rest parameter

//  ? function parameter takes multiple arguments and converts them into a array 

const heroScore = (...score:number[]):number =>{
  // ? n! here score is an array // ! score = [ 1, 4, 5, 3 ]
  
  console.log(score);

  let sum: number = 0;
  score.map((n) => {
    sum = sum + n;
  });
  return sum;
}
console.log(heroScore(1, 4, 5, 3))

const heroString = (...strings: string[]):void => { 
    //strings = ['programming', 'hero', 'apollo', 'web']
    strings.map(str => console.log(str));
}

//heroString('programming', 'hero', 'apollo', 'web');