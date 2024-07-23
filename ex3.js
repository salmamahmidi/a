let number;

do {
    number = prompt("Please enter a number greater than 10:");
    number = parseInt(number);
} while (isNaN(number) || number <= 10);

console.log("Thank you!");
