// console.log("Hello😍");
// // const movieUrl=(domain, genre,year)=>{
// //     return "hhtp://"+domain+"?genre="+genre+ "&year="+year;
// // };
// // console.log(movieUrl("imdb.com","thriller",2020));

// const movieUrl = (domain, genre, year) =>
//   `http://${domain}?genre=${genre}&year=${year}`;

// console.log(movieUrl("imdb.com", "thriller", 2020));

// const { man, power, skill } = {
//   Man: "tony",
//   Powwer: "🎶",
//   skill: "playboy",
// };
// console.log(skill);

//((n)=>console.log(n*2))(10);
const person1={
  name:{
    first:"alice",
    last:"johnson",
  },
  age:28,
  favaritecolors:["blue","green"],
  place:{
    city:"chennai",
    
  },
};
console.log(person1.age);
console.log(person1.fullName);
console.log(person1.place);
//Defensive code
if(person1.place && person1.place.city){
  console.log(person1.place.city);
}
//? Optional chaining
console.log(person1?.place?.city);
