// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
   
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var complexity = ''; 
  var symbol = confirm('Do you want special characters?');   
  var upperCase = confirm('Do you want uppercase letters?');
  var lowerCase = confirm ('Do you want lowercase letters?');  
  var num =  confirm('Do you want numbers?'); 
  var passLenght = parseInt(prompt('Please enter length of password'));  
    if(passLenght<8 || passLenght> 128 || passLenght == ''){
    return('Password must be 8 to 128 characters in length and it cannot be blank')
  };

  // creating character set for different types of characters
  var arraySymbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var arrayUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var arrayLowercase = "abcdefghijklmnopqrstuvwxyz"
  var arrayNum = "1234567890"
  
  if(symbol){
    complexity= complexity+arraySymbol
  } if(upperCase){
    complexity = complexity+arrayUppercase
  } if(lowerCase){
    complexity = complexity+arrayLowercase
  } if(num){
    complexity = complexity+arrayNum
  } if(!symbol && !upperCase && !lowerCase && !num ){
    return('Password cannot be blank')  
  } else if(!upperCase && !lowerCase){
    return('You must select atleast one type of characters')  
  } else if(!symbol && !num){
    return('You must select either number or special characters')
  }
  
  final_result='';
  for( var i=0;i<passLenght;i++){
    var complexity_final=Math.floor(Math.random()*(complexity.length));
    var final_result=final_result +complexity[complexity_final]  
    }  return(final_result)
}

