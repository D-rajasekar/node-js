// setTimeout(()=>{
//     console.log("10");
//     setTimeout(()=>{
//         console.log("9");
//         setTimeout(()=>{
//             console.log("8");
//             setTimeout(()=>{
//                 console.log("7");
//                 setTimeout(()=>{
//                     console.log("6");
//                     setTimeout(()=>{
//                         console.log("5");
//                         setTimeout(()=>{
//                             console.log("4");
//                             setTimeout(()=>{
//                                 console.log("3");
//                                 setTimeout(()=>{
//                                     console.log("2");
//                                     setTimeout(()=>{
//                                         console.log("1");
//                                         setTimeout(()=>{
//                                             console.log("Happy New Year");
//                                         },1000);
//                                     },1000);
//                                 },1000);
//                             },1000);
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);


let count =3;
let msg=(count)=>
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(count>0){
            console.log(count);
        }
        resolve(count);
    },1000);
});
msg(count)
.then((x)=>msg(--x))
.then((x)=>msg(--x))
.then((x)=>msg(--x))
.finally((x)=>console.log("Happy new year"));