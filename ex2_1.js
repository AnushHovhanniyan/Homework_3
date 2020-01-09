var num1 = 19;
var num2 = 42;
var b = []
function name(num1, num2){
  
for (var i = num1; i<=num2; i++){
  
  if (i%2===0 && ((i-(i%10))/10)%2===0){
  b += i+",";
    
} 
}console.log(b);
}
 name(num1, num2);

 

