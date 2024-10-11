// abstract 
abstract class Car{
    abstract start(): void;
    abstract stop(): void;
}

class MyCar extends Car{
    constructor(public name: string){
        super();
    }
    start(): void {
        console.log("Car Starting... ");
    }
    stop(): void {
        console.log("Car stoped...");
    }
}

const car1 = new MyCar('bmw');
car1.start();
console.log(car1);
