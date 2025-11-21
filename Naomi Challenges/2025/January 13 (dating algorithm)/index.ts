
interface DateCandidate {
  username: string;
  proficiency?: number[];
  overallProficiency?: number;
}

function readDatingProfile(datingPool: DateCandidate[]) {
  datingPool.forEach(x => {
    if (x.proficiency!.length > 6)
    {
      x.proficiency!.sort((a, b) => b - a); 
    }
    while (x.proficiency!.length > 6)
    {
      x.proficiency!.pop(); 
    }
    x.overallProficiency = x.proficiency!.reduce((a, b) => a + b);
    delete x.proficiency; 
  }); 
  return datingPool.sort((a, b) => b.overallProficiency! - a.overallProficiency!); 
}

console.table(
  readDatingProfile([
    { username: "plamoni", proficiency: [55, 100, 100, 25, 100, 51, 80] },
    { username: "Riley", proficiency: [80, 80, 40, 47, 65, 100, 65, 37] },
    { username: "SaintPeter", proficiency: [100, 55, 80, 4, 51, 80, 100, 51] },
    { username: "Camperchan", proficiency: [51] },
  ])
);