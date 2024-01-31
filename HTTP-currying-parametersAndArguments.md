# Task:
## parameters :
 - Function parameters are the names listed in the function's definition
## Arguments :
- Function arguments are the real values passed to the function.
- Parameters are initialized to the values of the arguments supplied.
## Currying:
- It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence. 
    - Higher order function:a function that takes one or more functions as arguments, or returns a function as its result



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
