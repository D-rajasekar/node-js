const books = [
    { title: 'Book A', author: 'Author 1', year:1999 },
    { title: 'Book B', author: 'Author 2', year:2005 },
    { title: 'Book C', author: 'Author 3', year: 2001 }
    // more books...
   ];

//    Expected Output:
// ['Book B by Author 2', 'Book C by Author 3']

console.log(books.filter((n)=>n.year>2000).map((item)=>`${item.title} by ${item.author}`))