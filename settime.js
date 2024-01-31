// function printmsg(noOfTimes){
// const msg=setInterval(function(){
// console.log("hi");
// },2000);
// setTimeout(()=>{
//     clearInterval(msg)
// },noOfTimes*2000);
// }
// printmsg(4)

// function startslideshow(colors){
// setInterval(function(){
//     setTimeout(()=>{
//         console.log('red')
//     },2000)
//     setTimeout(()=>{
//         console.log('r')
//     },4000)
//     setTimeout(()=>{
//         console.log('re')
//     },6000)
// },6000)

// }
// startslideshow(colors);

var colors = ["red", "blue", "green"];
var msg;
let index = 0;
function startslideshow(colors) {
  document.body.style.background = `${colors[index]}`;
  index++;
  msg = setInterval(() => {
    if (index >= colors.length) {
      index = 0;
    }
    document.body.style.background = `${colors[index]}`;
    index++;
    console.log(index);
  }, 1000);
}
function pause() {
    clearInterval(msg);  
}

function stop() {
    index=0;
    clearInterval(msg);

  }
function start() {

  stop()
  startslideshow(colors);
  
}

