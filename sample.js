function sum(...arr){
    var sam=0
    for( var van of arr){
        sam+=van
    }
    return sam;
}
console.log(sum(1,2,3,4,5))
//OR

function san(...nums){
    let res=0;
    nums.forEach((num)=>{
        res+=num;
    })
    return res;
}
console.log(san(3,4,10));