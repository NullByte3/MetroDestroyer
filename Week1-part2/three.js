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

// JS code is saying that write is depreacted, however, as long as it works, it is fine.
if (evenNumbers.length > 0) {
    document.write("Even Numbers: " + evenNumbers.join(", "));
} else {
    document.write("Even Numbers: None");
}

console.log("Program complete.");