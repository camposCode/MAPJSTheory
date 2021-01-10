/* 

---map() creates a new array with the result of calling a callback on every element in the array.  

---The difference with forEach is that it generates a new array using the result, using the return value of that callback.   

---Examples:  

let numbers = [1, 2, 3, 4, 5];
let doubles = numbers.map(function(num) {
    return num * 2;
});

console.log(doubles);
//Output: [2, 4, 6, 8, 10]


let prices = [45, 9.99, 33, 50];let newPrices = prices.map(prices => "$" + prices);

console.log(newPrices);

---Example: Multiply every value by two:  

let numbers = [6, 42, 4, 81, 56, 33];

let doubles = numbers.map(num =>{
    return num * 2;
});
console.log(doubles);

-------map() with arrays-----

---The array map method processes each element of the main array and creates a new array. I doesnt change the original array.     

---Syntax: array.map(function(value, index, arr), this);
    -value: specifies the array to be processed. Each element of this array will be processed in the map function. 

    -Index: specifies the index value currently being processed.  

    -arr: used to access the array being processed.  

    ---this: optional. specifies the value to pass to this variable.    

---Example: create an array with the values 1, 4, 5, 8, 10. Use map to multiply by 5. Print values in terminal.          

let arr = [1, 4, 5, 8, 10]; 
let newArr = arr.map(num => {
    return num * 5;
});
console.log(newArr);
//Output: [5, 20, 25, 40, 50]
*/

let numbers = [1, 2, 3, 4, 5];
let doubles = numbers.map(function(num){
    return num * 2;
})
console.log(doubles);













