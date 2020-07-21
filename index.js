"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Nicolas", age = 24, gender = "male";
// In TypeScript, '?' after a parameter means that that parameter is optional
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};
console.log(sayHi(name, age, gender));
//# sourceMappingURL=index.js.map