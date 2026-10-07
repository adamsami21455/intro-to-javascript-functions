//exercise 1
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// exercise 2
function isAdult(age) {
    if (age >= 18) {
        return 'adult'
    }
    else {
        return 'minor'
    }
}
console.log('exercise 2 result: ', isAdult(21))

//exercise 3 
function isCharAVowel(char) {
    if (char === 'a', 'e', 'i', 'o', 'u') {
        return true
    }

    else {
        return false
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));

//exercise 4 generateemail ()
function generateEmail(name, domain) {
    return name + '@' + domain
}
console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'));

//exercise 5 greetuser()
function greetUser(name, timeOfDay) {
    return 'Good ' + timeOfDay + ", " + name + "!"
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

//exercise 6 maxOfThree()
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num3) {
        return num1
    }
    else if (num2 > num1 && num3) {
        return num2
    }
    else {
        return num3
    }

}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

//exercise 7: calculateTip()

function calculateTip(billAmount, tipPercentage) {
return billAmount*(tipPercentage/100)

}
console.log('Exercise 7 Result:', calculateTip(50, 20));

//exercise 8: convertTemperature()
function convertTemperature(temp,string) {
    if (string === "F") {
        return (temp - 32) * 5/9
    }
    else if (string === "C") 
        return (temp*1.8 + 32)
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

//Exercise 9: basicCalculator()
function basicCalculator(num1,num2,string) {
    if (string === 'add') {
        return num1 + num2
    }
    else if (string === 'subtract') {
         return num1 - num2
    }
     else if (string === 'multiply') {
         return num1 / num2
    }
     else if (string === 'divide') {
         return num1 - num2
    }

}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));