// var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// var size = names.length;

// function whosPaying(names) {
//     var random = Math.floor(Math.random()*size);
//     var ans = names[random]+" is going to buy lunch today!";
//     return ans;
// }

// var n = prompt("Enter a febonacci Number");
// var arr = [0,1];
// function febonacci(n){
//     for(var i = 2; i<n; i++){
//         arr.push(arr[i-1]+arr[i-2]);
//     }
//     return arr;
// } 

// febonacci(n);

var n = prompt("Enter a febonacci Number");
var a = 0;
var b = 1;
console.log(a+" "); 
function febonacci(n){
    for(var i = 2; i<n; i++){
        console.log(b+" ");
        var temp = a + b;
        a = b;
        b = temp;
    }
} 

febonacci(n);