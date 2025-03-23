/*
<script>
    let numbers = [];
    while (numbers.length < 5) numbers.push(parseFloat(prompt('Enter number ' + (numbers.length + 1) + ': ')))

</script>
(hold shitty code, apparently I had to do it in pure javascript.)
*/

let numbers = [];

while (numbers.length < 5) {
    numbers.push(parseFloat(prompt('Enter Number ' + (numbers.length + 1) + ': ')));
}

console.log("Numbers:", numbers);

let searchNumber = parseFloat(prompt('Enter a Number to Search: '));

if (numbers.includes(searchNumber)) {
    console.log(`Number ${searchNumber} is found in the array.`);
} else {
    console.log(`Number ${searchNumber} is NOT found in the array.`);
}

numbers.pop();

console.log("Updated Numbers:", numbers);

numbers.sort(function (a, b) {
    return a - b;
});

console.log("Sorted Numbers:", numbers);
