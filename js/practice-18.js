// var i = 1;
// for (; i <= 100; i++) {
//  console.log(i);
// }

var fruit = ['apple', 'orange','lemon','date']

var price = [180, 140, 100, 250]

var mixed = ['apple', 180, 'orange', 140, 'lemon', 120]

// console.log(fruit[3]+'price per KG Tk.'+price[3])

console.log(price);
price[2]=120;

console.log(price);

var indexNumber = price.indexOf(120);

console.log(indexNumber);
price.push(400);
console.log(price);
var popValue=price.pop();

console.log(price);
console.log(popValue);
price.unshift(400);
console.log(price);
price.shift();
console.log(price);

console.log(5===5);
console.log(5===4);

var iPhone= 156000;
var myBudget = 170000;
if(iPhone<myBudget){
    console.log("Hurree I am able to buy iPhone");
}