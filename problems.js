// Given three array, with elements at the same index related to each other. Give the number of duplicate values.

const firstArray = [
  "hello",
  "hello",
  "hi",
  "howiseverything",
  "kin",
  "kin",
  "kin",
]
const secondArray = [1, 1, 2, 1, 1, 2, 1]
const thirdArray = [1, 1, 2, 1, 1, 2, 1]

const testFunction = (a, b, c) => {
  let newArray = []
  for (let i = 0; i < a.length; i++) {
    const newObj = {
      name: a[i],
      kin: b[i],
      kon: c[i],
    }
    newArray.push(newObj)
  }

  let filterArray = []
  newArray.forEach((item) => {
    if (
      !filterArray.find(
        (obj) =>
          obj.name === item.name && obj.kin === item.kin && obj.kon === item.kon
      )
    ) {
      filterArray.push(item)
    }
  })

  return newArray.length - filterArray.length
}

console.log(testFunction(firstArray, secondArray, thirdArray))

// FizzBuzz:
// Write a function that takes a number as input and returns "Fizz"
// if the number is divisible by 3, "Buzz" if it's divisible by 5, and "FizzBuzz" if it's divisible by both 3 and 5.
// If the number is not divisible by either 3 or 5, return the number itself.

const FizzBuzz = (number) => {
  let answer
  let switchNumber =
    number % 3 === 0 ? (number % 5 === 0 ? 53 : 3) : number % 5 === 0 ? 5 : 35

  switch (switchNumber) {
    case 53:
      answer = "FizzBuzz"
      console.log(number)
      break
    case 3:
      answer = "Fizz"
      break
    case 5:
      answer = "Buzz"
      break
    case 35:
      answer = number
  }
  return answer
}

console.log(FizzBuzz(7))

// Reverse a string
const ReverseString = (word) => {
  let wordArray = word.split("")
  let reverseWord = ""
  for (let i = wordArray.length - 1; i >= 0; i--) {
    reverseWord += wordArray[i]
  }
  return reverseWord
}

console.log(ReverseString("RandomString"))

// Palindrome Check:
// Write a function that takes a string as input and
//returns true if it's a palindrome (reads the same forward and backward), and
//false otherwise.
//Ignore spaces, punctuation, and capitalization when determining if a string is a palindrome.

//ReplaceSpace -> join the letters
//.trim()  //for space around the text // for string
//.replace(/ /g,'') //with regex  -> g stands for global  // for string
//.replaceAll(" ",'')   // for string
//.reduce((first, second) => second === ' '? first: first+second, "")            // for array

const Checkpalindrome = (word) => {
  let filterdString = word.trim().toLowerCase().replaceAll(" ", "").split("")

  return filterdString.join("") === filterdString.reverse().join("")
}

console.log(Checkpalindrome("NamanN"))

// Factorial:
// Write a function that calculates the factorial of a given number.
//The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

const FactorialCalculator = (factor) => {
  let factorialValue = 1
  for (let item = 1; item <= Math.abs(factor); item++) {
    factorialValue *= item
  }
  return factorialValue
}

console.log(FactorialCalculator(3))

// alternative

const FactorialCalculator2 = (factor) => {
  if (factor === 0) return 1

  return factor * FactorialCalculator2(factor - 1)
}

console.log(FactorialCalculator2(3))

// Fibonacci Sequence:
//Write a function that generates the Fibonacci sequence up to a specified number of terms.
//The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.

const fibonacciNumber = (num, firstArray) => {
  let fibArray = []

  for (let i = 0; i < num; i++) {
    if (fibArray.length === 0) {
      fibArray.push(0)
      fibArray.push(1)
    } else {
      fibArray.push(fibArray[i - 1] + fibArray[i])
    }
  }

  return fibArray
}

console.log(fibonacciNumber(10))

//Array Sorting:
//Write a function that sorts an array of numbers in ascending order
//using any sorting algorithm of your choice.
//Do not use JavaScript's built-in sorting methods (e.g., sort()).
const sortAsc = (numArray) => {
  let newArray = new Array(...numArray)
  // while(newArray != numArray){
  //   newArray.forEach
  // }
}
