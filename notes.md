# Basics of javascript
## Five pillars:
    - 1.Readability
    - 2.Maintainable
    - 3.Extensibility
    - 4.Testability
    - 5.Performance


- funtions
    - arraow functions
    -Anobyns functions
- truthy falesy
## shortcuts
- `ctrl+shift+p` - Opening search
- `alt+arrow`- Move Line
- `!<tab>`- HTML Boiler Plate
- `ctrl+/`- Commeting
- `ctrl D`- select multiple curser and make changes
---
### link - Mark down cheat cheat(Webiste)

# Es6+ Feautures
## template literal 
- interpolation (substitution)(`${welcome}`)
- It supports multi-lining
## Array Destructuring
- Unpacking
`const [t1,t2,t3 =80]=[100,200];`
    - default value will be taken only if value is not assingned.
#### Holes
   - `const [,t1,t2,t3 =80]=[100,200,null];`
    console.log(t1,t2,t3);

## Object Destruteing
```js
const nums=[100,50,20,30];
const [t1,t2]=nums;
console.log(t1,t2);//100,50
```
### Rest operator
```js
const[z1,...z2]=nums;
console.log("z1:",z1, "z2:",z2);
```
## Unstructuring
```js
const { man, power, skill } = {
  Man: "tony",
  Powwer: "🎶",
  skill: "playboy",
};

console.log(skill);
```
# Task:
## parameters :
 - Function parameters are the names listed in the function's definition
## Arguments :
- Function arguments are the real values passed to the function.
- Parameters are initialized to the values of the arguments supplied.
## Currying:
- It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence. 
    - Higher order function:a function that takes one or more functions as arguments, or returns a function as its result
### What is advantage:
    - It helps us to create a higher-order function
    - It is very useful in building modular and reusable code
    - It makes the code more readable.
## Example:
```js
function calculateVolume(length, breadth, height) {
    return length * breadth * height;
}
console.log(calculateVolume(4, 5, 6));
```
## After Currying
```js
function calculateVolume(length) {
	return function (breadth) {
		return function (height) {
			return length * breadth * height;
		}
	}
}
console.log(calculateVolume(4)(5)(6));
```
## IIFE
```js
(function (n){
    console.log(n*2);
})(10);
    - name clash/Namespace free 
    - Anonymous function
    - Used by libraries authors
    - Functions -> IIFE webpack tool is used

//arrow function
((n)=>console.log(n*2))(10);
```
## Obejects:
- Object.Keys()&Object.Values
- Object.Values();//[100,300,250]
- Object.Keys();//[John,Petty,Tony]

## For in:
    - Array& Object
## For of:
    -Array

## Learning new Things in Array
    - will the method what data type will return
    -mutate the original array
 - Includes return boolean
 ```
 [1,2,3,4,5].join(-)
 '1-2-3-4-5'
 ```
### Slice():
- can take which part we want from an array
    - every(e=>====🤷‍♀️) it is inbuld a function
    its result is also a boolean.
```
-  AND acts one false means all the array false
    - OR acts as one true all the array is true

- unshift - add elements to front
    - push add elements to last
- some- example <= 90 may be 92 is printed or greater then 90 is printed
    - but in case of INCLUDES if 90 only present it prints or show true.
```
## Immutable:
- where code cannot be changed and we can take whenever we want which increase code maintainability and extendability.

### Immuatability:
    - used for DX

# Hosting:
- console.log(a);
- var a=10;
- console.log(a);
- //var,function-Hoisted
- //let,const-Not Hoisted
## 2 Phases
    - 1st Phase-Compilation
    - 2nd Phase-Execution
- 2 Guy- JS Engine and execution context
- 1 Guy js  - 2 Context Guy
    - //1st Phase
    - console.log(a)//skipped
    - var a=10;//Dp you know a No.Just note it down.
    - console.log(a)//Skipped
    - 2nd Phase 
    - console.log(a);//do you know a.YES tell me the value .UNDEFINED
    - var a =10;//JS guy Context - Do you know a? Put the value 10
    - Console.log(a);//YES.It is 10.
```js
     var price =200;

 function getPrice(){
     //TDZ-Temporal Dead Zone
     console.log(price);// undefined
     var price =400;
     console.log(price);//
 }
 getPrice();
 //  1st it will be price/200 lexical scope
 //2nd it will be run inside then it will be price/undefined
 // it only accesced local variable 1st so it prints undefined 1st
```
## for in LET and CONST the error will be not intialized
### MAP:
    - 1.It always returns copy of array
    - 2.sourceArray.length===outputArray.length->will be same
    - 3.transforms datatype

```js
//MAP
const avengers=[
    "hulk",
    "Iron man",
    "Black widow",
    "Captain america",
    "Spider man"
]
const ans=avengers.map((n)=>n.length);
console.log(ans);

//OR
// // function getLength(name){
//     return name.length
// }


//OR
// var getLength=function(name){
//     return name.length
// }
```

## FILTER:
    - same datatypes
    - not same length
    - always returns a copy
    - may be the output will be less than iequlas to the orginal array

```js
const avengers=[
    "hulk",
    "Iron man",
    "Black widow",
    "Captain america",
    "Spider man"
];

const ans=avengers.filter((n)=>n.length>10);
//Predicate functions are which returns boolean
console.log(ans);

//OR
const getlongername=name1=>name1.length>=10;
console.log(avengers.filter(getlongername));
```

## Boxing:
    - here were string is converted into string object

## Imperative vs Declarative:
- Imperative:How to do? there are lot of unneccasry codes
- Declarative:What to do? reduceing the number of code in the head.