let actualTemp =prompt("What is the temperature?");
const desiredTemp = 70;

if (actualTemp < desiredTemp) {
    console.log("Run heat!");
} else if (actualTemp > desiredTemp) {
    console.log("Run A/C");
} else {
    console.log("Standby");
}