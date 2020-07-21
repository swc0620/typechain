class Humane {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Humane("Lynn", 10, "female")

// 'interface' will not compile into JavaScript
interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "WC",
    age: 25,
    gender: "male"
}

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`
}

console.log(sayHi(person))
console.log(sayHi(lynn))

// ------------------------------------------------------------------------------------

// const name = "Nicolas",
// age = 24,
// gender = "male";

// In TypeScript, '?' after a parameter means that that parameter is optional
// const sayHi = (name: string, age: number, gender?: string): string => {
//     console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
//     return `Hello ${name}, you are ${age}, you are a ${gender}!`
// }

// console.log(sayHi(name, age, gender))

// in JavaScript, the code below is able to be executed with empty argument filled with undefined
// in TypeScript, the TypeScript compiler will not allow the code below to be executed
// sayHi(name, gender)

export {}