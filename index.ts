class UserProfile {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getInfo(): string{
        return `Hello my name is ${this.name} and i am ${this.age}`;
    }
}

const userExample = new UserProfile("Tom", 25);
console.log(userExample.getInfo());