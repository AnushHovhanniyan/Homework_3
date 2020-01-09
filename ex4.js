var array = [56, -9, 87, -23, 0, -105, 55, 1];
var len = array.length
function myFunction() {
array.sort(function(a, b){return a-b});
for ( i = 0; i < array.length; i++){
if (array[i]>=0 && array[i-1]<0) {
  console.log(array[i]);
       } 
  if (array[i]<0 && array[0] * array[len-1]>0){
    console.log("-1")
    break;
  }
    }

};
myFunction()



var array = [45, -9, 15, 5, -78];
var len = array.length
function myFunction() {
array.sort(function(a, b){return a-b});
for ( i = 0; i < array.length; i++){
if (array[i]>=0 && array[i-1]<0) {
  console.log(array[i]);
       } 
  if (array[i]<0 && array[0] * array[len-1]>0){
    console.log("-1")
    break;
  }
    }

};
myFunction()



var array = [-5, -9, -111, -1000, -7];
var len = array.length
function myFunction() {
array.sort(function(a, b){return a-b});
for ( i = 0; i < array.length; i++){
if (array[i]>=0 && array[i-1]<0) {
  console.log(array[i]);
       } 
  if (array[i]<0 && array[0] * array[len-1]>0){
    console.log("-1")
    break;
  }
    }

};
myFunction()