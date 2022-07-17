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
        console.log(i );
    };
};

printNumbersTill(15);

let getGreetingTo = (name) => {
    return `Hello ${name}`;
};

console.log(getGreetingTo("Míša"))