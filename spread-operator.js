let arr1=[1,2,3];
let arr2=arr1;
arr2.push(4);
console.log("arr1 = "+arr1);
console.log("arr2 = "+arr2);

let arr3=[4,5,6];
let arr4=[...arr3]
arr4.push(7);
console.log("arr3 = "+arr3);
console.log("arr4 = "+arr4);

let obj1 = {a:1, b:2, c:3};
let obj2 = {...obj1, d:4};
let obj3 = {...obj1, b:782};

console.log("obj1 = ", obj1);
console.log("obj2 = ", obj2);
console.log("obj3 = ", obj3);

let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log("arr5 = ", arr5);