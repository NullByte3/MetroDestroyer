/*
There is no prompt("") for pure JS. Need to use a browser.
In this case, I'll just use prompt, even though it's meant to be for JS.
*/
let numbers = [];
let input;

while (true) {
    input = prompt("Enter a number (or 'done' to finish):");

    if (input == "done") {
        break;
    }
    numbers.push(parseFloat(input));

}

let evenNumbers = [];

for (let number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}
console.log("Even Numbers: " + evenNumbers.join(", "));

console.log("Program complete.");