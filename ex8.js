// Ex 8: Employess Promotion (more than 80 eligible)
const employees = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

// This should output:
// [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]
//var status;
// const ans = employes.filter((n) => n.grade >= 80);
// var ans1 = ans.map(({arr}) => {{id:arr.id,status:"promoted"}
// return obj;
// });

// console.log(ans);

console.log(
  employees
    .filter((employee) => employee.grade >= 80)
    .map(({ id }) => ({
      id,
      status: "promoted",
    }))
);
