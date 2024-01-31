const event1Attendees = ['Alice', 'Bob', 'Charlie'];
const event2Attendees = ['Bob', 'Dave', 'Eve'];
const event3Attendees = ['Charlie', 'Eve', 'Frank'];
// Expected Output:
// ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank']

const event=[...event1Attendees,...event2Attendees,...event3Attendees]
function removedup (data){
return data.filter((value,index)=>data.indexOf(value)==index);
}
console.log(removedup(event));
//  var combinelist= new set(...event);//...spread convert this to array
//  console.log(event);
// console.log([...new Set(combinelist)].toSorted());