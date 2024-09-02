// // declaring and defining a function

// function myfunction(x, y, e){
//     // set of instruction
//   var sum =x+y+e;
//   console.log(sum);
// }

// // calling /invoke
// myfunction(20,30,53);
// myfunction(60,10,17);
// myfunction(50,40,37);

// function with return value
// function adder(x,y,z){
//     var total = x+y+z;
//     return total;
// } 
// console.log(adder(10,20,30))
// function average(a,b,c){
// var mean = adder (a,b,c)/3;
// return mean; 
// }
// console.log(average(40,50,60));      

// var myfun = function(){
//     console.log("hello func");
// }
// myfun();


// //arrow function declaration
// var myExample = x=>{
//     var aa =x/10;
//     console.log(aa);
// }
// myExample(100);



//vairable scoping 1. function scoping 2. block scoping

function functionScoping(){
    var msg = "Hello world";
    
    if(true){
         let msg = "Hello scoping";
         console.log("define block" ,msg);
    }
    console.log("inside func" ,msg);
}

functionScoping();


// conditional statement and loops



































// assignment operator
// var x =10;
// var y =5;
// x+=x; //x=x+x;
// x+=y 
// x*=y => x=x*y;
// x/=y => x=x/y
// console.log(x);
// console.log(y);
