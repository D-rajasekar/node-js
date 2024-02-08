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
    - serialisation means converting object to string means.
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
- Git stash-temporary storage
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
    - call back is happen when event complete and actiom will be taken
     - how do we stop setInterval
```js
setTimeout(function(){
    console.log("hi");
},2000)

setInterval which is used recall function
```

## Event loop
- It is single thtread and asynchronus
-  async - it runs simultaneously 
- call stack -runs js
- web api-only waits
- event loop-push to stack 
- olny whern call stack is emty the then it will push it to call stack
- setTimeout,setInterval,onClick are all part of WEB API.are event listeners
- when api is in waiting stage the call stack is working on the below codes.
- keep your call stack empty or main thread empty
# Call back hell
- Nesting of callback is callback hell
```js
setTimeout(()=>{
    console.log("hi");
    setTimeout(()=>{
        console.log("hi");
        setTimeout(()=>{
            console.log("hi");
        },2000);
    },2000);
},2000);
```
- it acts like a set 
## Promise:
- It has twpo state - pending
                    - fulfilled
                    - rejected
- promise take two things
- then catch finally 
- .then always return promise object
- if any of the elements rejected then whole will be rejected
```js
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


```

## Promiseall&race:
- it access the 1st one which is very fast
- CDN
- user has very good exeperience
```js
var f1=Promise.resolve("bhavani");
var f2=Promise.resolve("neha")
var f3=Promise.resolve("mano")

Promise.all([f1,f2,f3]).then((data)=>console.log(data));
// if two fails 1st rejected will be printed

Promise.race([f1,f2,f3]).then((data)=>console.log(data));//promise.race prints the 1st executed CDN
```
- swagger is to document the API
 

 ## TASK
 post-adding 3 users data with fetch content type also should be given
 put- upadte indepemdence flag
 bind call apply and this

### CALL:
- The call method binds the this value to the function and executes the function. It takes the this value and a list of arguments as parameters. Then, it returns the value returned by the function, which is called using the call method.
```js
function test(arg1, arg2){
  console.log(this.num, arg1, arg2); // 100, 10, 20
}
test.call({num: 100}, 10, 20);
```
### APPLY:
- The apply method binds the this value to the function and executes the function. It takes the this value and a single array object as parameters, and it returns the value returned by the function, which is called using the apply method.
```js
function test(...arguments){
  console.log(this.num, arguments);//100, [1,2,3]
}
test.apply({num: 100}, [1,2,3]); 
```
### BIND:
- The bind method binds the this value to the function and returns a new function. However, we still need to separately invoke the returned function.
```js
function test(arg){
 console.log(this.number, arg);
}

let bindedFn = test.bind({number: 99}, "argument");

bindedFn(); // 99, "argument"
```
## This:
- it needs a context
- dont see where it is called see where it is called
- Window object constains all global methods
- Class are mimic the real worls entity
# database:
- it is a special software
- cloud the database will be stored
- cloud are renting pc
- open source is good beacuse it is ready fix the bug
## LINUX
    - free,oprn-source,secure,small footprint,automation
### Scaling:
    - it is vertical and horizontal 
    - auto scaling means renting PC according to use
    - DDOS- deniel of servicw-server over flow
## DATABASE:
    - it will catch the answer of the query and provide a cache to the RAM it take the original data from the hard disk .
    - CACHE what are the different statergy,removed.
    - CRUD- easy
    - Querying becomes easier
    - Backups are inbuilt
    - UNdo-easily(no time limit)
    - performance
    - redis
    - PL/SQL is very high
# CACHE:
- Caching is a technique used to improve the performance of web applications. In simple terms, caching involves storing frequently accessed data or content in a temporary storage location called a cache.
    - CACHE-ASIDE:In this strategy, the application is responsible for managing the cache. When data is requested, the application checks the cache first. If the data is not in the cache, it is retrieved from the database and stored in the cache for future use
    - WRITE-THROUGH:In this strategy, data is written to both the cache and the database at the same time. When data is updated, it is written to the cache and the database simultaneously.
    - Write-Behind -In this strategy, data is written to the cache first and then to the database at a later time. This allows write operations to be faster, but it can lead to data inconsistencies
    - Read-Through-In this strategy, the cache is used as the primary data source. When data is requested, the cache is checked first. If the data is not in the cache, it is retrieved from the database and stored in the cache for future use.
## TASK:
- how to remove cache 
- how long data will be present in the cache

## NORMALIZATION:
- more normalize it will be more safer
### 1st 
    - row order,mixing data types,without primary key not 
    - 1 coloumn should not have two hidden data eg:person standing with hieght order here person data name is noted also noted.
    - No mixing data types
    - At should depend 1 unique value
### 2nd:
    - update  anounoumly-power failure one data may be upadted & another will not upadted.
    - delete anoumly-It is also same as update when we try to delete may be the data may be deleted or may not be deleted there may be a data inconsistency.
    - Insertion anoumoly
    - Each non-key attribute should only depend upon primary key.
    - when player rating is only depend upon player ID it shouls be seprated.
    - Only depend upon player ID and not depend upon other.
### 3rd:
    - Skill depend on skill rating
    ->Every non-key attribute in a table should depend on the key, the whole key & nothing but the key.

### 4th:
    - multivalue dependencies in a table must be multivalued dependicies on the key.
    - make it more safer
    - commit act as a save.

### 5th:
    - It should always be in a 4th normal form the table cannot be descriable as the logical results of joining some other table together.

#### SQL- 
- Float-3
- double-6
- real -12
- char-specify the size
- varchar-few lines
- TEXT-more than the lines
- blob-store the binary data
- database constraints are used to avoid the data mess up by us.

# NODE JS:
- It is  environment to run JS
- why-browsers-cannot delete,create,update,read. 
- So browsers are restricted and browers cannot acceccs the file system cannot acceces hardware details.
- cannot copy files.
- LOVE virus - it is passed to the wifi of your network it has connected.
- worm virus- they keep on duplicating files.
    - ## USES:
    - Data streamining
    - server-side proxy
    - chat bot
    - Big data analytics
    - wireless connectivity
    - system monitering dashboard
    - Web scrapping
    - Real time data
    ## Arcitechture:
    - node js bindings used to acces the file systems.
    - it is single thread asynchronous
    - we are taking the request and processing it and data will be sent to call stack then it will be sent to frontend.
    ## Change sin nodejs Environment:
    - No DOM
    - No Document methods
    - No Window
    - Global. SetTimeout is there instead os Set Timout
    - 