
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", function(a) {
    rl.question("Enter the second number: ", function(b) {
        a = Number(a);
        b = Number(b);

        if (a > b) {
            console.log("The first number is larger");
        } else if (b > a) {
            console.log("The second number is larger");
        } else {
            console.log("Both numbers are equal");
        }

        rl.close();
    });
});
