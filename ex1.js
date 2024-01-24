const person = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};

function getPersonInfo(p) {
  const firstName = p.name.first;
  const lastName = p.name.last;
  const personAge = p.age;
  const primaryColor = p.favoriteColors[0];
  const secondaryColor = p.favoriteColors[1];

  return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
}

console.log(getPersonInfo(person));

// const person1 = {
//   name1: {
//     first1: "Alice",
//     last1: "Johnson",
//   },
//   age1: 28,
//   favoriteColors1: ["blue", "green"],
// };
// const { name1, age1, favoriteColors1 } = person1;

// function getPersonInfo(p1) {
//   const firstName = name1.first1;
//   const lastName = name1.last1;
//   const personAge = age1;
//   const primaryColor = favoriteColors1[0];
//   const secondaryColor = favoriteColors1[1];

//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// }

// console.log(getPersonInfo(person1));

// const person2 = {
//   name2: {
//     first1: "Alice",
//     last1: "Johnson",
//   },
//   age2: 28,
//   favoriteColors2: ["blue", "green"],
// };
// const { name2, age2, favoriteColors2 } = person2;

// const getPersonInfo2 = (p1) => {
//   const firstName = name2.first1;
//   const lastName = name2.last1;
//   const personAge = age2;
//   const primaryColor = favoriteColors2[0];
//   const secondaryColor = favoriteColors2[1];

//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// };

// console.log(getPersonInfo2(person2));

// const person3 = {
//   name2: {
//     first1: "Alice",
//     last1: "Johnson",
//   },
//   age2: 28,
//   favoriteColors2: ["blue", "green"],
// };

// const getPersonInfo3 = (p1) => {
//   const {
//     name2: { first1: firstName, last1: lastName },
//     age2: { personAge },
//     favoriteColors2: [primaryColor, secondaryColor],
//   } = p1;

//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// };

// console.log(getPersonInfo3(person3));

// const person4 = {
//   name2: {
//     first1: "Alice",
//     last1: "Johnson",
//   },
//   age2: 28,
//   favoriteColors2: ["blue", "green"],
// };

// const getPersonInfo4 = ({
//   name2: { first1: firstName, last1: lastName },
//   age2: { personAge },
//   favoriteColors2: [primaryColor, secondaryColor],
// }) => {
//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// };

// console.log(getPersonInfo4(person4));
