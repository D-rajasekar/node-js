//1
const products = [
  {
    name: "Product 1",
    stores: [
      { storeId: "S1", inventory: 10 },
      { storeId: "S2", inventory: 0 },
    ],
  },
  {
    name: "Product 2",
    stores: [
      { storeId: "S1", inventory: 5 },
      { storeId: "S2", inventory: 7 },
    ],
  },
  // more products...
];
//Expected output:['Product 2']
// var str = products
//   .map((n) => n)
//   .map((item) => {
//     for (const it of item) {
//       console.log(it.inventory > 0 ? n.name : "no");
//     }
//   });

// var hasInventory = str.map((s) => s.inventory > 0);
// console.log(hasInventory);
// console.log(str);

// console.log(products.filter(product=>product.some(store=>store.inventory>0)).map(n=>n.name));

const availableInAllStores = products.filter((product) =>
    product.stores.every(store => store.inventory > 0)
).map(product => product.name);

console.log(availableInAllStores);


//2
const books = [
  { title: 'Book A', author: 'Author 1', year:1999 },
  { title: 'Book B', author: 'Author 2', year:2005 },
  { title: 'Book C', author: 'Author 3', year: 2001 }
  // more books...
 ];

//    Expected Output:
// ['Book B by Author 2', 'Book C by Author 3']

console.log(books.filter((n)=>n.year>2000).map((item)=>`${item.title} by ${item.author}`))

//3
const event1Attendees = ['Alice', 'Bob', 'Charlie'];
const event2Attendees = ['Bob', 'Dave', 'Eve'];
const event3Attendees = ['Charlie', 'Eve', 'Frank'];
// Expected Output:
// ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank']

const event=[...event1Attendees,...event2Attendees,...event3Attendees]
function removedup (data){
return data.filter((value,index)=>data.indexOf(value)==index);
}
console.log(removedup(event));
//  var combinelist= new set(...event);//...spread convert this to array
//  console.log(event);
// console.log([...new Set(combinelist)].toSorted());

