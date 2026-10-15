
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your password: ", function(password) {

    if (password.length < 8) {
        console.log("Too short");
    } else if (password.length <= 11) {
        console.log("Moderate");
    } else {
        console.log("Strong");
    }

    rl.close();
});