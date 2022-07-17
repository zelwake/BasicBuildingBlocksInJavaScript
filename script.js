for (let i = 0; i < 10; i++) {
    console.log(i);
};

for (let i = 1; i <= 10; i++) {
    console.log(i);
};

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    };
};

let printNumbersTill = (n) => {
    for (let i = 0; i <= n; i++) {
        console.log(i);
    };
};

printNumbersTill(15);

let getGreetingTo = (name) => {
    return `Hello ${name}`;
};

console.log(getGreetingTo("Míša"))
getGreetingTo("Michal")

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};

printValues([1, 6, 8, 3, 11, 68, 0, 3]);

let myNumbers = [6, 5, 4, 3, 2, 1, 0];

myNumbers.forEach((number) => {
    console.log(number);
});