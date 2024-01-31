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
## REDUCE:
- it is also called as fold
## Boxing:
    - here were string is converted into string object

## Imperative vs Declarative:
- Imperative:How to do? there are lot of unneccasry codes
- Declarative:What to do? reduceing the number of code in the head.
## JSON
    - it is string
    - it does not have all features of object.
    - It is an universal language(Universal glue)
    - it is in the string so every language has String so it is used as universal language.
    - It has loose coupling extepand into different form
    - php gives in the html form
    - SPA single page application
    - search engine optimization
    - if you want fast then you dont want SEO
    - if want user friendly thn use SEO
- JSON.parse(data) is used to convert string into object.
- /t is used for pretty printing
- shaalow- take only out object value nested will not be taken.
- deep copy-takes all the object includes nested objects also.

# SDLC
- Planning
- Analysis
- Design
- Implementation
- Testing 
- Maintainance
## SDLC WORKS
- client to project Manager
- project manager to system architect
- then to designer
- then to head of ebgineering
- then to developer
- to testing team
- devops
- client to support-(l1,l2(error))
- then to development team
- then testing team
- then to devops team.

# AGILE:
- implementation of agile is scrum
- agile is in between testing
    - SPRINT-1(2-4weeks),plan,design,develop,test,deploy.
    - sprint -2 (after two sprints customer will see the update)
## Scrum:
- assiging work to everyone sprint planning(1 hour)
- story points may be day
- every day meeting standup meeting
- blocker-due to some reason cannot do task
- backlog-if work is not comoketed/yet to start
- retro spective last 14th day
- spill over extra than planned time.
- ADOC request urgent work from client.
- Uncompleted work is backlog
### KANBAN BOARD:
- backolg
- In progress( name, photo)
- peer review(TL)
- Done
## INSIDER:
- ring realease
- 1C will be in master branch
- 10k will be in Dev branch it is always advanced
- feature will developer will work on this feature

## git:
```
- git fetch --a
- git branch -D branch_name
- git merge branch_name// create branch
- git --graph
- git add .
- git commit -m""
- git checkout file name
- git checkout -    // backbutton
- rebase// git rebase filename
- git reset--soft HEAD~1//delete commit it will be in the staged
- git reset --hard HEAD~1//it will delete it not in the staged also
- git rebase -i HEAD~3//delete total history and delete it in online 
- p->pick,r->rework,e->edit,d->drop
```
# VIM:
- :wq in VIM 
- if you want to insert something press i
- 3 MODES-normal mode -press esc
         - command mode -:
         - insert mode - :wq
         navigation is JKL key
- undo-u
- back-b
- write -w
- quit-:wq
- 





## rebase
- git rebase -i ~1//dlegte coomand with rebase
- dont rebase on master 
- first pull from master and checkout in the feature and reabse it in the feature.
- what git rebase - it will change history use it in the feature not in the master branch.
- git rebase-i(interactive)
- how to delete the commit?
- fork(uses)?
## loops:
- n- no of iteration(n is number of element in an array)
- 2n -if n=1000 thn it will be 2*100=200
- n^2- it will be 10lakh 

# SetTimeout
    - function and time 
    - it is a high order function
    - call back is happen when event complete and actiomn will be taken
     - how do we stop setInterval
```js
setTimeout(function(){
    console.log("hi");
},2000)

setInterval which is used recall function
```

## JS
- It is single thtread and asynchronus
-  