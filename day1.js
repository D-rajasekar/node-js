//TASK:1
const main = [
  {
    contact: {
      email: "abc@getUserEmail.com",
    },
  },
];

// function getUserEmail(user) {
//   if (user && user.contact && user.contact.email) {
//     return user.contact.email;
//   } else {
//     return "Email not provided";
//   }
// }

const getUserEmail = (user) => {
  for (var tan of user) {
    console.log(tan?.contact?.email || "email not provided");
  }
};
getUserEmail(main);

//TASK:2
const company = {
  departments: [
    {
      name: "Engineering",
      manager: { name: "Manoj" },
    },
    {
      name: "Sales",
      manager: { name: "RDX" },
    },
    {
      name: "Marketing",
      manager: { name: "ESA" },
    },
  ],
};

function getDepartmentManager(company, departmentName) {
  const department = company?.departments?.find(
    (dept) => dept.name === departmentName
  )?.manager?.name;
  return department || "Manager not found";
}
console.log(getDepartmentManager(company, "Engineering"));

//TASK:3
const stock = [
  { inventory: { count: 1 }, name: "Prod 1" },
  { inventory: { count: 9 }, name: "Prod 2" },
  { inventory: { count: 8 }, name: "Prod 3" },
  { inventory: { count: 3 }, name: "Prod 4" },
  { inventory: { count: 0 }, name: "Prod 5" },
];

function isProductInStock(stock) {
  for (var prod of stock) {
    console.log(
      prod?.inventory?.count ? "Product Available" : "Product not in stock"
    );
  }
}

isProductInStock(stock);

//TASK4:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// function getMatrixElement(matrix, row, col) {
//  if (matrix && matrix[row] && matrix[row][col] !==
// undefined) {
//  return matrix[row][col];
//  }
//  return 'Element not found';
// }

const getMatrixElement = (matrix, row, col) => {
  let element = matrix?.[row]?.[col] || "Element Not Found";
  return element;
};
console.log(getMatrixElement(matrix, 1, 2));
