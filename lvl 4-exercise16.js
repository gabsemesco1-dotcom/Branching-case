
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter parking hours: ", function(hours) {
    hours = Number(hours);

    let fee;

    if (hours <= 0) {
        fee = 0;
    } else if (hours <= 1) {
        fee = 5000;
    } else {
        fee = 5000 + (hours - 1) * 3000;
    }

    if (fee > 20000) {
        fee = 20000;
    }

    console.log("Parking fee: Rp" + fee);

    rl.close();
});
