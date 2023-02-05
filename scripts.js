/*

var signal = 'red'; 
var signal1 = 'yellow';
var signa2 = 'green';

switch(signal){

case 'red'   : console.log('stop'); 


case 'yellow '  : console.log('wait');

case 'green'   : console.log('go ');

default : console.log('invalid signal');


}
*/


/* while loop
var i = 0 ;
 while (i < 7){

console.log('pick a brick '+ 'put it on the truck');

 }
i++;
*/
/* checking even number using while loop
var num = 1 ; 
while(num < 1000 ){
    if(num %2 === 0 ){
        console.log(num);
    }
    num++;
}
*/

/* for loops 

for(var num = 1; num< 1000 ; num++){
    if(num %2 === 0 ){
        console.log(num);
    }
}
*/

/*

let state = 'turn on ' && 'turn off ';


function lightstate (){
var  on  =  document.getElementsByClassName('turn on')


}
*/


function validateForm(){

    var fullName =document.form1.fullName.value;
    
    var email = document.form1.email.value ;

    var phone = document.form1.phone.value;

    var password= document.form1.password.value;

    if(fullName.length == 0 || fullName=="" || fullName==null ){
        alert("name can't be blank")
        return false
    }
    else if(email.length  == 0 ){
        alert("email is needed ")
        return false
    }
    
    else if(phone ==null || phone ==NaN){
        alert("phone number is needed")
        return false
    }

    else if(password == null || password== NaN || password.length ==0 ){
        alert("password is needed")
return false
    }

    
var firstPassword =document.form1.password.value;

var secondPassword2= document.form1.password2.value;


if(firstPassword ==secondPassword2){
    return true;
}
else{
    alert("password must match");
}



var phoneNum = document.form1.phone.value;

if(isNaN(phone)){

document.getElementById("numLoc").innerHTML="Enter Numeric value only";
return false;
}


var teleNum = document.form1.phoneNumber.value;

if(isNaN(phoneNumber)){

document.getElementById("fName").innerHTML="Enter Numeric value only";
return false;
}



var x = document.form1.email.value;

var atPosition= x.indexOf("@");
var dotPosition = x.lastindexOf(".");
if(atPosition < 1 || dotPositon <atPosition+2 || dotPositon+2 >=x.length){
    alert("please Enter valid E-mail address \n atposition:" +atPosition+"\n dotPosition:"+dotPosition);
    return false;
}



}




function F1(){
document.getElementById("sb");
alert("Thank for subscribing");

}


f
