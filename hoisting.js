// //  var price =200;

// //  function getPrice(){
// //      //TDZ-Temporal Dead Zone
// //      console.log(price);// undefined
// //      var price =400;
// //      console.log(price);//
// //  }
// //  getPrice();
// //  //  1st it will be price/200 lexical scope
// //  //2nd it will be run inside then it will be price/undefined
// //  // it only accesced local variable 1st so it prints undefined 1st

// const nums =[8,6,4];

// const output =nums.map((x)=>x*2);
// console.log(output);
// //MAP only copy does not mutate 

// //MAP
// const avengers=[
//     "hulk",
//     "Iron man",
//     "Black widow",
//     "Captain america",
//     "Spider man"
// ]
// const ans=avengers.map((n)=>n.length);
// console.log(ans);

// //OR
// // // function getLength(name){
// //     return name.length
// // }


// //OR
// // var getLength=function(name){
// //     return name.length
// // }

///FILTER:
// const avengers=[
//     "hulk",
//     "Iron man",
//     "Black widow",
//     "Captain america",
//     "Spider man"
// ];

// const ans=avengers.filter((n)=>n.length>10);
// //Predicate functions are which returns boolean
// console.log(ans);

// //OR
// const getlongername=name1=>name1.length>=10;
// console.log(avengers.filter(getlongername));


