var numbers = 110133
var numbers = numbers + ""
var array = numbers.split("")
var product = 1
function newfunction(){
for(i= 0; i<=array.length-1; i++){
  product *=array[i]
}
  if (product%2===0 || product===0){
    console.log("false");
  } else{
    console.log("true")
  }

}
  newfunction();