/// generics type
var getFirstElement = function (arr) {
    return arr[0];
};
var firstString = getFirstElement(["next", "react", "ts"]);
var firstNumber = getFirstElement([1, 2, 3]);
var firstBoolean = getFirstElement([true, false]);
var stringResponse = {
    status: "error",
    data: "",
};
var userResponse = {
    status: "success",
    data: [
        { name: "Ali", id: 1 },
        { name: "Ahmad", id: 2 },
    ],
};
/// type Assertion | type Narrowing
// const myInput = document.getElementById("my-input") as HTMLInputElement;
// console.log(myInput);
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.mew = function () {
        console.log("cat mewed!!");
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("dog barked!");
    };
    return Dog;
}());
var makeNoise = function (animal) {
    if (animal instanceof Cat) {
        animal.mew();
    }
    else {
        animal.bark();
    }
};
var cat = new Cat();
var dog = new Dog();
makeNoise(cat);
makeNoise(dog);
