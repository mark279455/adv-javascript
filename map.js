/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5];
let results=[];
for(let num of nums){
    results.push(num *2);
}

console.log("using loop: results = "+results);

// Using map()
const multiplyByTwo = function (num) {
    return num*2;
}
res2 = nums.map(multiplyByTwo);
console.log("using map: res2 = "+res2);

// Simplified w/ map()
console.log("simplified using map: res3 = "+nums.map(num => num*2));


// Simplfied w/ map() + arrow function


// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];
  const studentsWithIds = students.map(student => [student.name, student.id]);
  console.log("studentsWithIds = "+studentsWithIds);