var  n = 15;
var b = "";
for (var i = 1; i <= n; i++) {
    b = "";
  for (var j = 1; j <= n; j++) {
    
    if (( j== i) || ((j +i) == n+1 || i===1 || i===n ||j===1 || j===n)) {
    b += "*";    
    }else{
    b+=" ";
   }
   
  }   console.log (b);
        
};
