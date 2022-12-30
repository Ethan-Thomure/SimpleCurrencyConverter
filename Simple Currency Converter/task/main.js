let input = require('sync-input');
const conversions = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75};

console.log("Welcome to Currency Converter!");
for (let i in conversions) {
    console.log(`1 USD equals ${conversions[i]} ${i}`);
}
console.log("What do you want to convert?");
let convertFrom = input("From: ").toUpperCase();

if (convertFrom in conversions) {
    let convertTo = input("To: ").toUpperCase();

    if (convertTo in conversions) {
        const amount = input("Amount: ");

        if (isNaN(amount)) {
            console.log("The amount has to be a number");
        } else if (amount < 1) {
            console.log("The amount cannot be less than 1");
        } else {
            console.log(`Result: ${amount} ${convertFrom} equals ${
                (amount * conversions[convertTo] / conversions[convertFrom]).toFixed(4)} ${convertTo}`);
        }
    } else {
        console.log("Unknown currency");
    }
} else {
    console.log("Unknown currency");
}