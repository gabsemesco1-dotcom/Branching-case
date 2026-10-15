
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your score: ", function(score) {
    rl.question("Enter attendance percentage: ", function(attendance) {
        score = Number(score);
        attendance = Number(attendance);

        if (score >= 60 && attendance >= 75) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }

        rl.close();
    });
});
