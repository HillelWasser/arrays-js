// let arry = ['Django','Tuesday', 'thursday','friday','saturday','Titanic'];
// let movies =[];
//  movies.push(arry.shift());
//  movies.push(arry.pop());
//  arry.unshift('Monday');
//  arry.push('sunday');
// let moviesnew = [];
//   moviesnew = movies.push('roy');

// console.log(arry);
// console.log(movies);
// console.log(moviesnew);


//Ex1.1
function removeFnL(arry=[]) {
    arry.pop();
    arry.shift();
    return arry;
}
console.log(removeFnL([1,2,3,4,5,6,7,8,9,10]));


//Ex1.2
function addStringFnL(arry=[]) {
arry.push();
arry.unshift();
return arry;
}
console.log(addStringFnL(['orange','apple','lemon']));


//Ex1.3
function does5Excist(arry=[]) {
let trueOrFalse = arry.includes(5);
return trueOrFalse;
}

console.log(does5Excist([1,2,3,4,5,6,7]));


//Ex1.4
function mixTwoArrys(arry=[],arry2=[]) {
    let mixedArry = arry.concat(arry2);
    return mixedArry;
}
console.log(mixTwoArrys([1,2,3,4],[7,8,9]));

//Ex1.5
function doesNIsHere(arry=[],num) {
   let theAnswer = arry.includes(num);
   return theAnswer;
}
console.log(doesNIsHere([1,3,4,5,6],7));

//Ex1.6
function addItemToArry(stringArry=[],singleString) {
    let theResualt = stringArry.indexOf(singleString);
    return theResualt
}
console.log(addItemToArry(['orange','lemon','banana','watermelon'],'banana'));

//Ex1.7
function reverseMyArry(arry=[]) {
    let theAnswer = arry.reverse();
    return theAnswer;
}
console.log(reverseMyArry([1,2,3]));

//Ex1.8
function reverse(arry=[]) {
    if(arry.length >=5 && arry.length <=10) {
        let theAnswer = arry.reverse()
        return theAnswer;
    }
    else {
    return 'dont!!';
    }
}
console.log(reverse([1,2,3,4,5,6,7,8,9,10,11,12]));
console.log(reverse([1,2,3,4,5,6]))

//Ex1.9
function reverseOnlyIf(arry=[],num) {
    if(arry.includes(num)) {
       arry.shift();
       arry.reverse();
       return arry;
    }
    else {
        return arry;
    }
}
console.log(reverseOnlyIf([1,2,3,4,5,6,7],5))
console.log(reverseOnlyIf([1,2,3,4,5,6,7],33))

//Ex1.10


//Ex1.11
function giveTheFirstElements(arry=[],num) {
    if(num=undefined) {
        return arry.shift()
    }
   return arry.slice(0,num);
}
console.log(giveTheFirstElements([7,9,0,-2],3));
console.log(giveTheFirstElements([7,9,0,-2],6));
console.log(giveTheFirstElements([],3));
console.log(giveTheFirstElements([7,9,0,-2],));

//Ex1.12
function giveTheLastElements(arry=[],num) {
    let length = arry.length
    return arry.slice(-num)
}
console.log(giveTheLastElements([7,9,0,-2],));
console.log(giveTheLastElements([7,9,0,-2],1));
console.log(giveTheLastElements([7,9,0,-2],6));

//Ex1.13
function doesFnLAreEqual(arry=[]) {
    if (arry[0]===arry.at(-1)) {
        return true;
    }
    else if (arry[0] != arry.at(-1)) {
        return false;
    }
    else {
        return 'problem!!';
    }
}

console.log(doesFnLAreEqual([1,2,3,4,8]));
console.log(doesFnLAreEqual([8,2,3,4,8]));

//Ex1.14
function arryEdged(arry=[]) {
    if(arry[0]===arry.at(-1)) {
        return arry.length-2;
    }
    else if(arry.length===undefined) {
        return  false;
    }
    else {
        return false;
    }
}
console.log(arryEdged([1,2,4,1]));
    console.log(arryEdged([1,2,4,2]));
    console.log(arryEdged([1,2,4,1,4,55,777,6,2,1,2,4,1]));
    console.log(arryEdged([]));


 //Ex2
let weirdArray = ['Inception','Spiderman','Tuesday'];
let wierderArray = ['Green','Saturday','Friday','Wednesday'];
console.log(weirdArray);
 console.log(wierderArray);

//Ex2.1 
const oppsit = wierderArray.reverse();
console.log (oppsit);

//Ex2.2
const togther = weirdArray.concat(wierderArray);
console.log(togther);

//Ex2.3
const movies = togther.splice(0,2);
console.log(movies);

//Ex2.4
togther.unshift('Monday');
console.log(togther);

//Ex2.5
togther.splice(3,0,'Thursday');
console.log(togther);

//Ex2.6
const colors = togther.splice(-1,1)
console.log(togther);
console.log(colors);

//Ex2.7
togther.push('Sunday');
console.log(togther);

//Ex2.8
let togtherlength = togther.length;
let Weekend = togther.splice(length-2,2);
console.log(Weekend);

//Ex3.1
const practiceFile = [273.15];
function letsPush() {
    practiceFile.push(42);
    console.log(practiceFile);
    practiceFile.push('hello');
    console.log(practiceFile);
    practiceFile.push(-4.6,'87');
    console.log(practiceFile);
}
letsPush();

//Ex2
const cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']
function changes() {
     cargoHold[5]='space tether';
     let theLastElement = cargoHold.pop();
     console.log(theLastElement);
     let theFirstElement = cargoHold.shift();
     console.log(theFirstElement);
     cargoHold.unshift(1138);
     cargoHold.push('20 meters');
}
 changes();
console.log(cargoHold);
console.log(cargoHold.length);

//Ex3
function ex3(){
    console.log(cargoHold);
    cargoHold.splice(3,0,'Keys');
    console.log(cargoHold);
    let index = cargoHold.indexOf('instruction manual');
    cargoHold.splice(index,1);
    console.log(cargoHold);
    cargoHold.splice(2,3,'cat','fob','string cheese');
    console.log(cargoHold);
}
ex3();

//Ex4
const holdCabinet1 =  ['duct tape', 'gum', 3.14, false, 6.022e23];
const holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Ex4.1

let longString = holdCabinet1.concat(holdCabinet2);
console.log (longString);
console.log (holdCabinet1);

//Ex4.2
let cut2Elements1 = holdCabinet1.slice(0,2);
let cut2Elements2 = holdCabinet2.slice(0,2);
let cutsTogther = cut2Elements1.concat(cut2Elements2);
console.log(cutsTogther);
console.log(holdCabinet1);
console.log(holdCabinet2);

//Ex4.3
holdCabinet1.reverse();
console.log(holdCabinet1);
holdCabinet2.sort;
console.log(holdCabinet2);

//Ex5.1
let str = 'In space, no one can hear you code'
let array;
 console.log( array = str.split());
 console.log( array = str.split('e'));
 console.log( array = str.split(' '));
 console.log( array = str.split(''));

 //Ex5.2
 const array3 = ['B', 'n', 'n', 5];
 console.log(array3.join());
 console.log(array3.join('a'));
 console.log(array3.join(' '));
 console.log(array3.join(''));

 //Ex6.1
 element1 = ['hydrogen', 'H', 1.008];
element2 = ['helium', 'He', 4.003];
element26 = ['iron', 'Fe', 55.85];



//Ex4
const numbers1 = [1,2,3,4,5];
const numbers2 = numbers1;
numbers1.push(6);
console.log(numbers1);
console.log(numbers2);

//Ex4.1
const numbers11 = [1,2,3,4,5,];
const numbers11copy = numbers11.slice(0);
console.log(numbers11copy);
const numbers22 = numbers11copy;
numbers22.push(100);
console.log(numbers22);