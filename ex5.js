var array = [-9, -4, -4, 3, 12, 4, 5];
var len = array.length
function myFunction() {
for ( i = 0; i < array.length; i++){
if(array[i]>array[i+1]) {
     
   console.log(i+1);
   }
    }
}
   myFunction()