var cities = ["chennai", "madurai", "erode"];

async function getTemp(city) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=2bfe95c61c8f4abb84b44951240102&q=${city}&aqi=no`
  );
  const data = await res.json();
  return [data.location?.name, data.current?.temp_c];
}
Promise.all(cities.map(getTemp))
  .then((data) => Object.fromEntries(data))
  .then((data) => console.log(data));

// var cities = ["chennai", "madurai", "erode"];

// async function getTemp(city) {
//   const res = await fetch(
//     `http://api.weatherapi.com/v1/current.json?key=2bfe95c61c8f4abb84b44951240102&q=${city}&aqi=no`
//   );
//   const data = await res.json();
//   return [data.location?.name, data.current?.temp_c];
// }
// //1st cae
// // async function getdata(){
// //     const data= await Promise.all(cities.map(getTemp))
// //     const ans=Object.fromEntries(data)
// //     console.log(ans);
// // }
// // getdata()

// //2nd case
//     const data= await Promise.all(cities.map(getTemp))
//     const ans=Object.fromEntries(data)
//     console.log(ans);

// function delid(userID) {
//   fetch(`https://65bb5cf452189914b5bbda98.mockapi.io/users/${userID}`, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
// Promise.all([1, 2, 3].map(delid)).then(() => console.log("deleted"));

//CASE 2
// function delid() {
//   fetch(`https://65bb5cf452189914b5bbda98.mockapi.io/users`)
//     .then((res) => res.json())
//     .then((arr) =>
//       arr.slice(0, 3).forEach((item) => {
//         fetch(`https://65bb5cf452189914b5bbda98.mockapi.io/users/${item.id}`, {
//           method: "DELETE",
//         });
//       })
//     );
// }
// delid();

//CASE 3

async function delid() {
  const res = await fetch(`https://65bb5cf452189914b5bbda98.mockapi.io/users`);
  const data = await res.json();
  await data.slice(0, 3).forEach(async (item) => {
    const result = await fetch(
      `https://65bb5cf452189914b5bbda98.mockapi.io/users/${item.id}`,
      {
          method: "DELETE",
      }
      
    );
  });
}
delid();
