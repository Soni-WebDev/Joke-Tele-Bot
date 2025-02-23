


console.log("What will be the tomorrow situation?");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (1-6): ", (value) => {
    aaarPaar(parseInt(value));
    rl.close();
});

function aaarPaar(value) {
    let output;
    switch (value) {
        case 1:
            output = "allNormal";
            break;
        case 2:
            output = "goWithAnyMember";
            break;
        case 3:
            output = "goAlone";
            break;
        case 4:
            output = "goNdComeToday";
            break;
        case 5:
            output = "goNdStay1Week";
            break;
        case 6:
            output = "leftHomeNdEverythingBehind";
            break;
        default:
            output = "room locked permanently";
    }
    console.log(output);
}

