// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(7)     //From Backwards
// myArr.pop()

// myArr.unshift(9)  //From front
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()      //newArr type : string

// console.log(myArr);
// console.log( newArr);            


// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)     // not include last ixd.  &  not remove element from original array.
console.log(myn1);

console.log("C ", myArr);

console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)     // include last ixd.  &  remove that element from original array.
console.log(myn2);

console.log("C ", myArr);

