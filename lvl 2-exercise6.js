
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your score: ", function(score) {
    score = Number(score);

    if (score >= 80 && score <= 100) {
        console.log("Grade A");
    } else if (score >= 70) {
        console.log("Grade B");
    } else if (score >= 60) {
        console.log("Grade C");
    } else if (score >= 50) {
        console.log("Grade D");
    } else {
        console.log("Grade E");
    }

    rl.close();
});