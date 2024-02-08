var student={
    firstName:"Mano",
    lastName:"Dhanekula",
    fullName:
    function(){
        return`${this.lastName}, ${this.firstName}`;
    },
};
console.log(student.fullName());

var stu1={
    firstName:"raja",
    lastName:"sekar",
    fullName:student.fullName,
};
console.log(stu1.fullName());
// var printfullName = student.fullName
// console.log(printfullName());

var printfullName2 =function(city,state){
    return `HI ${this.lastName}, ${this.firstName} from ${city},${state} from ${city},${state}`;
};
var stu3={
    firstName:"bhavani",
    lastName:"shankaran",
}
var printBhavani=printfullName2.bind(stu3);
console.log(printfullName2.call(stu1,"kal","TN"));//content,agr1,agr2,...
console.log(printfullName2.apply(stu1,["kal","TN"]));//content,[agr1,agr2].....
console.log(printfullName2.bind(stu3)("Erode","TN"));
