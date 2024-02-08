
var f1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("bhavani");
    }, 5000);
});
var f2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("neha");
    }, 2000);
});

var f3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("mano");
    }, 3000);
});
Promise.all([f1,f2,f3]).then((ans)=>console.log(ans)).catch((msg)=>console.log("Rejected  "+msg));
//Promise.race([f1,f2,f3]).then((ans)=>console.log(ans)).catch((msg)=>console.log("Rejected  "+msg));
//Promise.allSettled([f1,f2,f3]).then((ans)=>console.log(ans)).catch((msg)=>console.log("Rejected  "+msg));