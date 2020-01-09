var b =[];
function Newarray (array, number){

for(var i = 0; i < array.length; i++){
if(array[i] > number){
 b += array[i]+",";

}
  
  }
  console.log([b])
}


Newarray([10, 25, 16, -5, 30, 15, 24], 16);