var DrivingTest= new Promise((resolve,reject)=>{
    let age=20;
    if(age>=18){

        setTimeout(()=>{
            resolve("you are eligible");//fullfilled case 3
        },5000)
        //resolve("you are eligible");//fullfilled case 1
    }
    else{
        reject(" try after some years");//rejected case 2
    }
});
 console.log(DrivingTest);
console.log("Driving test started");

//DrivingTest.then(msg=>console.log("your result is",msg));// case:4 fullfilled message will be printed
DrivingTest
.then((msg)=>"Your results is "+msg)// case 4.1 then-> always return a promises the output becomes the input.
.then((x)=>x+"  super")
.then((x)=>console.log("finally ",x))

// case 5 .then will not work it will skip
// handelling error
 .catch(msg =>console.log(" oh no:" + msg))
 .finally(x=>console.log("clean up"))// case 6 rejected or resolved finally will be called
 // case 7
//  DrivingTest
// .then((msg)=>"Your results is "+msg)
//.then((x)=>promise.reject("failllll"))
// .then((x)=>x+"  super")// this line will be skipped and move to catch
// .then((x)=>console.log("finally ",x))// skipped
//.catch(msg =>console.log(" oh no:" + msg))


