//SOUMODEEP DAS      7439598438
//DAY2 ASSIGNMENTTS
//--------assigment02--------------//

function printNumberSign(number) {
    if (number > 0) {
       console.log("The number is positive.");
    } else if (number < 0) {
       console.log("The number is negative.");
    } else {
       console.log("The number is zero.");
    }
}
printNumberSign(-5); 

//--------assigment 02--------------//
function calculateFactorial(n) {
    if (n < 0) {
      return "Please provide a positive integer.";
    }
  
    let factorial = 1;
  
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  // Example usage:
   let result = calculateFactorial(5);
 console.log(result); // Output: 120



//--------assigment03--------------//

function findlarge(number1,number2){
 
    return number1>number2?number1:number2;
 }
 let x=findlarge(6,7);
 console.log(x);

//--------assigment04-------------//

 function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
   }
console.log( isPalindrome('909'));



//--------assigment05--------------//
function printPrimesUpToN(n) {
    if (n <= 1) {
      console.log("There are no prime numbers less than or equal to 1.");
      return;
    }
  
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  printPrimesUpToN(20);  



//--------assigment06--------------//
  function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return 'Cannot divide by zero';
        }
      default:
        return 'Invalid operator';
    }
  }
  
  // Example usage:
  let result2 = calculate(5, 3, '+');
  console.log(result2); // Output: 8
//--------assigment07--------------//

  function countVowels(inputString) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let char of inputString.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  let vowelCount = countVowels('Hello World');
  console.log(vowelCount); // Output: 3


//------------------//--------assigment08--------------//--------------------//
  function isPerfectNumber(number) {
    if (number <= 0) {
      return false; // Negative numbers and zero are not perfect numbers
    }
  
    let sumOfDivisors = 0;
    
    for (let i = 1; i <= Math.floor(number / 2); i++) {
      if (number % i === 0) {
        sumOfDivisors += i;
      }
    }
  
    return sumOfDivisors === number;
  }
  
  // Example usage:
  let res = isPerfectNumber(28);
  console.log(res); // Output: true

  //--------assigment 09--------------//
  function fibonacciSeries(limit) {
    let num1 = 0, num2 = 1, nextTerm;
  
    console.log("Fibonacci Series:");
  
    while (num1 <= limit) {
      console.log(num1);
      nextTerm = num1 + num2;
      num1 = num2;
      num2 = nextTerm;
    }
  }
  
  // Example usage:
  fibonacciSeries(50);

  //--------assigment10--------------//

  function multiplicationTable(number) {
    if (number <= 0) {
      console.log("Please provide a positive integer.");
      return;
    }
  
    console.log('Multiplication Table for ${number}:');
  
    for (let i = 1; i <= 10; i++) {
      console.log( "->"+(number * i));
    }
  }
  
  // Example usage:
  multiplicationTable(7);
  