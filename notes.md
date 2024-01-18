# Basics of javascript
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
