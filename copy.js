//...->Spread operator(ES6/ES2015)
let t1 = [100, 200];
let t2 = [...t1]; //copy by value
let t3 = [50, ...t1, 40, 60];

console.log(t1, t2);
console.log(t1 == t2);
console.log(t3);

let t4 = t1.concat([40]);
console.log(t4);

let t5 = t1.concat();
console.log(t5);

//Types of function
var y = console.log("hi");

console.log(y);
let u = [10, 20, 30, 40, 50];
var r = u.indexOf(80);
const fun = (u, r) => {
  if (r != -1) {
    return true;
  } else {
    return false;
  }
};
var f = fun(u, r);
if (f == true) {
  console.log(r);
} else {
  console.log("not present");
}

fun(t6, r);
