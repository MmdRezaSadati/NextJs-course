let Status = "success";

enum ApiStatus {
  Loading = "LOADING",
  Success = "success",
  Error = "ERROR",
}

if (Status === ApiStatus.Success) {
  ///
}

function calculatePrice(
  number1: string | number,
  number2: string | number
): string | number {
  if (typeof number1 === "string" && typeof number2 === "string") {
    return number1 + number2;
  }
  if (typeof number2 === "number" && typeof number1 === "number") {
    return number1 * number2;
  }
}

const multipliedPrice = calculatePrice(10, 50); /// 500
const combinedPrice = calculatePrice("10", "50"); /// 1050

class Person {
  name: string;
  age: number;
  private role: string;
  constructor(name: string, age: number, role?: string) {
    this.name = name;
    this.age = age;
    this.role = role || "user";
  }
  sayHello(): string {
    return `hey! my name is ${this.name} and I have ${this.age} years old`;
  }
}

const person1 = new Person("ali", 20, "admin");
const person2 = new Person("zahra", 24);
console.log(person1.sayHello());
console.log(person1);
