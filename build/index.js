"use strict";
class UserProfile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `Hello my name is ${this.name} and i am ${this.age}`;
    }
}
const userExample = new UserProfile("Tom", 25);
console.log(userExample.getInfo());
