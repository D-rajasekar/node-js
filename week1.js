const transactions = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];
//EXPECTED OUTPUT:
//["Transaction T2: $6500 on 2023-02-20"]

console.log(
  transactions
    .filter(
      (transaction) =>
        transaction.amount > 5000 &&
        transaction.category == "Business" &&
        transaction.date.slice(0, 4) == "2023"
    )
    .map(
      (transaction) =>
        `Transaction ${transaction.id}:"$ ${transaction.amount} on ${transaction.date}`
    )
);

//TASK:2
const departments = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];

//[{ "Engineering": 170000 }, { "Marketing": 125000 }]

// console.log(departments.map(department=>{departments.employees.reduce((acc,crr)=>acc+crr.salary,0))
console.log(
  departments.map((department) => {
    const totalSalary = department.employees.reduce(
      (acc, employee) => acc + employee.salary,
      0
    );
    return `[{${department.name} : ${totalSalary}}]`;
  })
);

//TASK3:
const weatherData = [
    { date: '2023-03-01', temperature: 16 },
    { date: '2023-03-02', temperature: 20 },
    { date: '2023-03-03', temperature: 18 },
    // more data...
    ];

    //{ "2023-03-02": 20, "2023-03-03": 18, "2023-03-01": 16 }

    // console.log(weatherData.sort((a,b)=>b.temperature-a.temperature).map((n)=>`${n.date}:${n.temperature}`));
    var temp=weatherData.sort((a,b)=>b.temperature-a.temperature)
    var obj={}
for (const item of temp) {
    obj[item.date]=item.temperature
}
console.log(obj);

 //TASK4:
 const products = [
    { category: 'Electronics', price: 199.99, reviews: 120, rating: 4.5 },
    { category: 'Electronics', price: 89.99, reviews: 80, rating: 3.9 },
    { category: 'Home', price: 49.99, reviews: 30, rating: 4.2 },
    // more products...
    ];
//199.99 // Assuming only one product meets the criteria
const sum =products.filter((elec)=>elec.category=="Electronics"&&elec.rating>=4.0&&elec.reviews>=50);
const avg=sum.reduce((acc,curr)=>acc+curr.price,0)/sum.length;
console.log(avg);

// TASK 5:

const users = [
    { userId: 'U1', name: 'Alice' },
    { userId: 'U2', name: 'Bob' },
    // more users...
    ];
    const orders = [
    { userId: 'U1', orderDetails: 'Order 1 Details' },
    { userId: 'U2', orderDetails: 'Order 2 Details' },
    // more orders...
    ];
//[
// { name: 'Alice', orderDetails: 'Order 1 Details' },
// { name: 'Bob', orderDetails: 'Order 2 Details' }
// ]

const merge= users.map((item,i)=>
Object.assign({},item,orders[i])).map((n)=>({name:n.name, orderDetails:n.orderDetails}))
console.log(merge);

    