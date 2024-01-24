// Top 3 Students
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 88 },
    { name: 'David', score: 79 },
    { name: 'Eva', score: 95 }
];


// This should output: "Eva, Bob, Charlie"

const ans=students.sort((a,b)=>a.score-b.score).reverse().slice(0,3).map((n)=>n.name).join(", ")
console.log(ans);