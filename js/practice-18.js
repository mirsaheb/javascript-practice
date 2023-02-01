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

var fruits = ['apple', 'banana', 'orange','lemon']

fruits[3]='water melon'

console.log(fruits);

console.log(fruits.indexOf('orange')) ;

    var friendsName = ['Tom', 'Jane', 'pitter', 'Jhon'];
    var grade = ['A', 'B','C','D','F']
    var point = [80,60,50,40,39]
    var marks = [85, 66, 95, 56];

        if(marks[0]>=point[0]){
            console.log(friendsName[0]+' pease '+grade[0])
            }else if(marks[0]>=point[1]){
            console.log(friendsName[0]+' pease '+grade[1])  
            }else if(marks[0]>=point[2]){
            console.log(friendsName[0]+' pease '+grade[2])  
            }else if(marks[0]>=point[3]){
            console.log(friendsName[0]+' pease '+grade[3])  
            }else if(marks[0]<=point[4]){
            console.log(friendsName[0]+' pease '+grade[4])  
        }



        if(marks[1]>=point[0]){
            console.log(friendsName[1]+' pease '+grade[0])
            }else if(marks[1]>=point[1]){
            console.log(friendsName[1]+' pease '+grade[1])  
            }else if(marks[1]>=point[2]){
            console.log(friendsName[1]+' pease '+grade[2])  
            }else if(marks[1]>=point[3]){
            console.log(friendsName[1]+' pease '+grade[3])  
            }else if(marks[1]<=point[4]){
            console.log(friendsName[1]+' pease '+grade[4])  
        }

        if(marks[2]>=point[0]){
            console.log(friendsName[2]+' pease '+grade[0])
            }else if(marks[2]>=point[1]){
            console.log(friendsName[2]+' pease '+grade[1])  
            }else if(marks[2]>=point[2]){
           console.log(friendsName[2]+' pease '+grade[2])  
            }else if(marks[2]>=point[3]){
           console.log(friendsName[2]+' pease '+grade[3])  
            }else if(marks[2]<=point[4]){
           console.log(friendsName[2]+' pease '+grade[4])  
        }

        if(marks[3]>=point[0]){
            console.log(friendsName[3]+' pease '+grade[0])
            }else if(marks[3]>=point[1]){
            console.log(friendsName[3]+' pease '+grade[1])  
            }else if(marks[3]>=point[2]){
            console.log(friendsName[3]+' pease '+grade[2])  
            }else if(marks[3]>=point[3]){
            console.log(friendsName[3]+' pease '+grade[3])  
            }else if(marks[3]<=point[4]){
            console.log(friendsName[3]+' pease '+grade[4])  
        }

// Find The highest Value in Array Index 
             (function () {
                const arr = [13,79,45];
              
                function findMaxArrValue(arr) {
                  if (arr.length) {
                    let max = -Infinity;
              
                    for (let num of arr) {
                      max = num > max ? num : max;
                    }
                    return max;
                  }
                  return 0; // or any value what you need
                }
              
                console.log(findMaxArrValue(arr)); // => 88
              })();
              
             