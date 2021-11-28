// 1.1 Factorial
// Have the function factorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
// Examples
// Input: 4 Output: 24
// Input: 8
// Output: 40320

function factorial(num) {
    if(num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(8));


// 1.2 Questions Marks
// Have the function questionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return true, otherwise it should return false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.
// Please do not use regular expressions for your solution. 

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
// Examples
// Input: "aa6?9"Output: false
// Input: "acc?7??sss?3rr1??????5"
// Output: true

function questionsMarks(str) {
    const inputs = str.split('');
    const stringNumbers = ['0','1','2','3','4','5','6','7','8','9'];
    const filtered = inputs.filter(i => {
        if (i === '?') return i;
        if (stringNumbers.includes(i)) return parseInt(i, 10);
    }).join('');

    let previousIndex = 0;
    while(filtered.indexOf('???', previousIndex) !== -1){
        const startingIndex = filtered.indexOf('???', previousIndex);
        if(parseInt(filtered[startingIndex - 1]) + parseInt(filtered[startingIndex + 3]) === 10) return true;
        previousIndex+=3;
    }
    return false;
}

console.log(questionsMarks('acc?7??sss?3rr1??????5'));

// 1.3 Prime numbers
// Implement the function getPrimeNumbersTo(number) where number is a positive integer value. The function should return all prime numbers which exist between 0 and the given number as a comma separated string. Additionally define a function isPrimeNumber(number) which checks if the given number is a prime number. It returns true if it is one or false if not.
// A prime number is a number which only can be divided without rest by itself and 1.
// Example
// getPrimeNumbersTo
// Input: 6
// Output: "2,3,5"
// Input: 25
// Output: "2,3,5,7,11,13,17,19,23"
// isPrimeNumber
// Input: 6
// Output: false
// Input: 23
// Output: true

function getPrimeNumbersTo(number) {
    let result = [];
    for (let i = 1; i < number; i++){
        if(i === 1  || i === number) continue;
        if(isPrimeNumber(i)) result = [...result, i];
    }
    return result.length > 0 ? result.join(',') : 'NA';
}

function isPrimeNumber(number) {
    for (let i = 1; i < number; i++){
        if(i === 1  || i === number) continue;
        if(number % i === 0) return false;
    }
    return true;
}

console.log(getPrimeNumbersTo(25));

// 1.4 Tree Constructor
// Have the function constructTree(strArr) take the array of strings stored in strArr, which will contain pairs of integers in the following format: (i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1. For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:



// which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string false. All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.
// Examples
// Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]Output: “true”
// Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
// Output: “false”


function TreeConstructor(strArr) { 
    var arr = [ ], counts= {};
    for (i=0;i < strArr.length;i++){
        const str = strArr[i].replace(/\(/g, "").replace(/\)/g, "");
        const values = str.split(',')
        arr.push(values[0]);
        arr.push(values[1]);
    }

    arr.forEach((x) => { 
        counts[x] = (counts[x] || 0 ) + 1 
    });

    for(j in counts){   
        if (counts[j] > 3){
            return false;
        }
    }
    return true;
}

console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));

// OOP
// This section is about object oriented programming. You are allowed to use the internet.
// 2.1 Shop
// You should create a rather rudimentary web shop. For the first step you get the following description from the customer:
// Each product has a name and an article number. Furthermore it has one or more (graduated prices) prices and up to 5 pictures (urls). There are normal and digital products. 
// The normal products are sent by post and have only a certain stock. Digital products are not sent but provided digitally - they are therefore available without limit. When buying them, either a download link is generated or an e-mail is sent. Which of the two must be defined when creating the product.
// Products can be added to the shopping cart as often as desired and can also be removed again. The individual contained products (name, article number, quantity, price for quantity) and the current total price can be displayed. In addition, the entire shopping cart can be purchased. 
// There are also categories. Categories always have a name and several products can be assigned to them. They also can be nested. It must be possible to display their hierarchy. Furthermore the products of a certain category can be displayed with name, article number, prices and pictures.
// All users have a name, an address and can buy products. They also can subscribe to certain product events: A customer can be informed by mail when the price of a certain product has been updated, and sellers can be informed when a certain product has been sold and/or when the stock of a product is empty. A seller also can create products.

// Your tasks:
// Convert the structure explained above in an object-oriented way into pseudo code or a programming language of your choice. Create corresponding interfaces and classes with the necessary member variables and function heads. Functions should not be implemented.
// Now implement the following functions. You can use pseudo code here as well.
// Shopping cart: 
// Add/remove products
// Display all products with name, article number, quantity and price
// Purchase of products

class Product {
    constructor(name, articleNumber, prices, pictures){
        this.name = name;
        this.articleNumber = articleNumber;
        this.prices = prices;
        this.pictures = pictures;
    }
}

class NormalProduct extends Product {
    constructor(name, articleNumber, prices, pictures, stock){
        super(name, articleNumber, prices, pictures);
        this.type = 'normal';
        this.stock = stock;
    }
}

class DigitalProduct extends Product {
    constructor(name, articleNumber, prices, pictures, downloadLink){
        super(name, articleNumber, prices, pictures);
        this.type = 'digital';
        this.downloadLink = downloadLink;
    }
}

class ShoppingCart {
    constructor() {
        this.products = {};
    }

    addProduct(product) {
        this.products[product.name] = product;
        this.products[product.name]['quantity'] = (this.products[product.name]['quantity'] || 0) + 1
    }

    removeProduct(product) {
        delete this.products[product.name];
    }

    displayCart() {
        return this.products.map(([key, value]) => {
            `${key} - ${this.products[key][articleNumber]} - ${this.products[key][quantity]} - ${this.products[key][quantity] * this.products[key][prices[0]]}}`
        })
    }
}

class User {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Customer extends User {
    constructor(name, address, email) {
        super(name, address);
    }

    updatePriceToCustomer () {

    }
}

class Seller extends User {
    constructor(name, address, email) {
        super(name, address);
    }

    informStockToSeller () {

    }

    createProduct () {
        
    }
}