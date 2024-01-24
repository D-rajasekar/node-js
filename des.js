const person = {
    name: {
      first: "Alice",
      last: "Johnson",
    },
    age: 28,
    favoriteColors: ["blue", "green"],
  };
  
   getPersonInfo=({name:{ first:firstName,last:lastName},
    age:personAge,
    favoriteColors:[primaryColor,secondaryColor]}) =>
  `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
  
  console.log(getPersonInfo(person));

//arr



