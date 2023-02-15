
// Problem  One
function mindGame (number){
    var multiple = number*3;
    var plus = multiple+10;
    var divide = plus/2;
    var result = divide-5;
    console.log(result);

}
mindGame(15);

//Problem  Two

function evenOdd(strings){
    if(strings.length%2==0){
        console.log("even")
    }else{
        console.log("ODD")
    }

}
evenOdd("mir saheb");

// Problem three

function isLGSeven(value){
  if(value-7 < 7){
    console.log(value-7);
}else{
    console.log(value*2);
}  
}
isLGSeven(20);

//Problem Four

let age=[20, 30, -17, 35, 22, -40, 55, -34, -47, 18];

function findingBadData(age){
    const badData = [];
    for(let i =0; i<age.length; i++){
        const data= age[i];
        if(data< 0){
            badData.push(data);
        }
    }
    return badData;
}
var removeBadData =findingBadData(age);
console.log(removeBadData.length);


//Problem Five
function gemsToDiamond(gems1st, gems2nd, gems3rd){
let allGems = (gems1st*21)+(gems2nd*32)+(gems3rd*43);

if(allGems<2000){
    console.log(allGems);
}else{
    console.log(allGems-2000);
}
}
gemsToDiamond(21,22,23);