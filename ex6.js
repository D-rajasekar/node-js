const books = [
    { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
    { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
    { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
    { title: "Sapiens", rating: 4.9, genre: "History" },
    { title: "Clean Code", rating: 4.7, genre: "Technology" }
  ];

//   const ans=books.filter((n)=>n.rating>=4.7);
//   const nam=ans.map((n)=>n.title);
//   console.log(nam);


const ans=books.filter((n)=>n.rating>=4.9).map((n)=>n.title).every((n)=>n.title);
console.log(ans);

  