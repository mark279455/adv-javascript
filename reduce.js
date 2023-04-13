  
// Summing an array of numbers:
const nums = [0,1,2,3,4,5];
let sum = nums.reduce((acc, curr) => acc+curr, 0);
console.log("sum = "+sum);

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
// Totaling a specific object property
let total = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log("total= "+total);

  
  // Grouping by a property, and totaling it too
  let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if(!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {});

  console.log("experienceByProfession = ", experienceByProfession);