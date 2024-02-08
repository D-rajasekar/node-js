var f1=Promise.resolve("bhavani");
var f2=Promise.resolve("neha")
var f3=Promise.resolve("mano")

Promise.all([f1,f2,f3]).then((data)=>console.log(data));
//all will be printed
// if two fails 1st rejected will be printed

Promise.race([f1,f2,f3]).then((data)=>console.log(data));//promise.race prints the 1st executed CDN 
// it is rejected if 1st one fails
// promise creation syntex with 10 sec for all and race 1 fail or two fail

Promise.allSettled()
// it prints it never ask it pass or fail so it runs as it is.