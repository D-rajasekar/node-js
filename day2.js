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

