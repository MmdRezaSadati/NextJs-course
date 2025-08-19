/// generics type

const getFirstElement = <T>(arr: T[]): T => {
  return arr[0];
};

const firstString = getFirstElement(["next", "react", "ts"]);
const firstNumber = getFirstElement([1, 2, 3]);
const firstBoolean = getFirstElement([true, false]);

interface ApiResponse<T> {
  status: string;
  data: T;
}
interface UserResponse {
  name: string;
  id: number;
}

const stringResponse: ApiResponse<string> = {
  status: "error",
  data: "",
};

const userResponse: ApiResponse<UserResponse[]> = {
  status: "success",
  data: [
    { name: "Ali", id: 1 },
    { name: "Ahmad", id: 2 },
  ],
};

/// type Assertion | type Narrowing
// const myInput = document.getElementById("my-input") as HTMLInputElement;
// console.log(myInput);

class Cat {
  mew() {
    console.log("cat mewed!!");
  }
}

class Dog {
  bark() {
    console.log("dog barked!");
  }
}

const makeNoise = (animal: Cat | Dog) => {
  if (animal instanceof Cat) {
    animal.mew();
  } else {
    animal.bark();
  }
};
const cat = new Cat();
const dog = new Dog();
makeNoise(cat);
makeNoise(dog);

interface Admin {
  role: string;
  caption:string
}
interface User {
  name: string;
  id:number
}
type Person = User | Admin;
const greet = (person: Person) => {
  if ("role" in person) {
    console.log("Hello Admin!");
  
  } else {
    console.log("Hello User!");
    
  }
};
