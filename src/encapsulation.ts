class MyBank{
    id: number;
    private amount: number;
    name: string;

    constructor(id: number, amount: number, name: string){
        this.amount = 100000;
        this.id = id;
        this.name = name;
    }
}

const bank = new MyBank(101, 333, "Fahim Ahammed");

// ? bank.amount = 0; //!n!  [ts] Property 'amount' is private and only accessible within class 'MyBank'.
console.log(bank);