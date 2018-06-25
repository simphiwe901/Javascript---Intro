//Basic Javascipt program
//determine whether the value
//is even or odd.
// Simphiwe Mchunu

var check = 0; // either -1, 0, 1
var input;
const default_value = 5;

valueType(default_value);
function valueType(value){
  var nType = value%2 // checks the modulus of the valueType
  input = value;


  /*KEY CODES:
    * not in range = -1
    *odd = 0
    *even = 1
    */


  //-------------------------------

  /*
    condition: for all +ve values
    even => modulus equals zero
    otherwise odd

    */
    if(value > 0){
      if(nType==0){
        check = 1; // even
      }else{
        check = 0;
      }

    }
    else{
      check = -1;
    }
    checkValue();
}

function checkValue(){
  if(check == -1){
    console.log(input+" not in range.");

  }else if(check==0){
    console.log(input+" is odd.");
  }else{
    console.log(input+" is even.");
  }
}
