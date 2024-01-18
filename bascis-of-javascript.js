console.log("Hello😍");
// const movieUrl=(domain, genre,year)=>{
//     return "hhtp://"+domain+"?genre="+genre+ "&year="+year;
// };
// console.log(movieUrl("imdb.com","thriller",2020));

const movieUrl = (domain, genre, year) =>
  `http://${domain}?genre=${genre}&year=${year}`;

console.log(movieUrl("imdb.com", "thriller", 2020));

const { man, power, skill } = {
  Man: "tony",
  Powwer: "🎶",
  skill: "playboy",
};

console.log(skill);
