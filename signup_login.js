// Email validation function for login and signup

function validatemail(){
    let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mail=document.getElementById("email1");
    var error1=document.getElementById("error1");
    if(mail.value.match(regexp)){
        error1.innerText="";
        error1.style.color="green";
        mail.style="border-color:green";
        return true;
    }
    else if(mail.value=="")
    {
        error1.innerText="Email cannot be empty!";
        error1.style="color:red;font-size: 14px; font-family: Righteous', cursive;";
        mail.style="border-color:red";
        return false;
    }
    else{
        error1.innerText="Sorry! Invalid Mail ID!";
        error1.style="color:red;font-size: 14px; font-family: Righteous', cursive;";
        mail.style="border-color:red";
        return false;
    }
}


// First name validation function for signup
function fnamecheck(){
    let fname=document.getElementById("fname");
    let fmsg=document.getElementById("fmsg");
    if(fname.value=="")
    {
        fmsg.innerText="First Name cannot be empty!";
        fname.style="border-color:red";
        fmsg.style.color="red";
        return false;
    }
    else{
        fname.style="border-color:green";
        fmsg.innerText="";
        return true;
    }
    
}

// Last name validation function for signup
function lnamecheck(){
    let lname=document.getElementById("lname");
    let lmsg=document.getElementById("lmsg");
    if(lname.value=="")
    {
        lmsg.innerText="Last Name cannot be empty!";
        lname.style="border-color:red";
        lmsg.style.color="red";
        return false;
    }
    else{
        lname.style="border-color:green";
        lmsg.innerText="";
        return true;
    }
    
}

// Password validation for login
function loginpasscheck(){
   let loginpass1=document.getElementById("loginpass");
   let error5=document.getElementById("message");
 if( loginpass1.value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (loginpass1.value.match(/([0-9])/))  && (loginpass1.value.length >=8)){
    error5.innerText="";
    loginpass1.style="border-color:green";
    error5.style.color="green";
    return true;
 }
 else if (loginpass1.value=="")
 {
    error5.innerText="Password cannot be empty!";
    error5.style.color="red";
    loginpass1.style="border-color:red";
    return false;
 }

 else{

    error5.innerText="Password is Invalid!";
    error5.style.color="red";
    loginpass1.style="border-color:red";
     return false;
 }

}


// Phone number validation for signup
function validatephone(){
    let regexp1=/^\d{10}$/;
    let regexp2=/^\d{3}-\d{3}-\d{4}$/;
    let regexp3=/^\d{3}\.\d{3}\.\d{4}$/;
    let regexp4=/^\d{3}\s\d{3}\s\d{4}$/;
    let inputtxt=document.getElementById("number");
    let error2=document.getElementById("error2");
    if(inputtxt.value.match(regexp1) || inputtxt.value.match(regexp2) || inputtxt.value.match(regexp3) || inputtxt.value.match(regexp4) )
        {
            error2.style.color="green";
            error2.innerText="";
            inputtxt.style="border-color:green";
      return true;
        }
        else if(inputtxt.value=="")
        {
            error2.innerText="Phone number cannot be empty!";
            error2.style.color="red";
            inputtxt.style="border-color:red";
            return false;
        }
      else
        {
            error2.innerText="Invalid Phone Number!";
            error2.style.color="red";
            inputtxt.style="border-color:red";
        return false;
        }
 
    }


// Password validation function for signup


var flag=0;
var flagg=0;
let password=document.getElementById("password");
let psw_str=document.getElementById("password-strength");
let LowerUpper=document.querySelector(".lower-upper-case i");
let num=document.querySelector(".number i");
let count=document.querySelector(".count i");
let cpassword=document.getElementById("cpassword");
let error3=document.getElementById("error3");
let LowerUppercase=document.querySelector(".lower-upper-case");
let num1=document.querySelector(".number");
let count1=document.querySelector(".count");
let lst1=document.getElementById("lst");  
let pgs=document.getElementById("progress");  

// Event listener for password_signup
password.addEventListener('keyup', function(){
    error3.innerText="";
    password.style="border:none";
    if(password.value!="")
    {
        lst1.style.visibility="visible";
        pgs.style.visibility="visible";
    }
   else{
    lst1.style.visibility="hidden";
    pgs.style.visibility="hidden";
   }
    let pass=password.value;

    checkStrength(pass);
    confirm(cpassword.value);
})


// Event listener for confirm password 
    
cpassword.addEventListener('keyup', function(){
    let cpass=cpassword.value;
    cpassword.style="border:none";
    confirm(cpass);
})
            
// Mark password strength using color code and make tick mark on passed conditions while typing password

function checkStrength(password)
{
    let strength=0;

    if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
    {
        strength +=1;
        LowerUpper.classList.remove("fa-circle");
        LowerUpper.classList.add("fa-check");
        LowerUppercase.style.color="green";
    }
    else
    {
        LowerUpper.classList.add("fa-circle");
        LowerUpper.classList.remove("fa-check");
        LowerUppercase.style.color="red";           
    }
    if(password.match(/([0-9])/))
    {
        strength+=1;
        num.classList.add("fa-check");
        num.classList.remove("fa-circle");
        num1.style.color="green";
    }
    else
    {
        num.classList.remove("fa-check");
        num.classList.add("fa-circle");
        num1.style.color="red";          
    }

   
    if(password.length >=8)
    {
        strength+=1;
        count.classList.remove("fa-circle");
        count.classList.add("fa-check");
        count1.style.color="green";
    }

    
    else
    {
        count.classList.add("fa-circle");
        count.classList.remove("fa-check");
        count1.style.color="red";
    }

    if(strength==0)
    {
        psw_str.style='width:0%';
        flag=0;
    }
    else if(strength==1)
    {
        psw_str.classList.remove("progress-bar-warning");
        psw_str.classList.remove("progress-bar-success");
        psw_str.classList.add("progress-bar-danger");
        psw_str.style='width:10%';
        flag=0;
        
    }
    else if(strength==2)
    {
        psw_str.classList.remove("progress-bar-danger");
        psw_str.classList.remove("progress-bar-success");
        psw_str.classList.add("progress-bar-warning");
        psw_str.style='width:60%';
        flag=0;   
       
    }
    else if(strength==3)
    {
        psw_str.classList.remove("progress-bar-warning");
        psw_str.classList.remove("progress-bar-danger");
        psw_str.classList.add("progress-bar-success");      
        psw_str.style='width:100%';
        flag=1;
        
    }
              
}
 

// Validate signup password on submit

function validatepws()
{
    if(flag==1)
    {    
        password.style="border-color:green";
        return true;
       
    }
    else if(password.value=="")
    {
        error3.style="color:red;font-size: 14px; font-family: Righteous', cursive;";
        error3.innerText="Password cannot be empty!";
        password.style="border-color:red";
        return false;
    }
    else
    {
        password.style="border-color:red";
        return false;
    }
}


// Check password match while typing the confirm password
let msg=document.getElementById("error"); 
function confirm(cpass1)
{
    if(cpass1.length<1)
    {
        msg.innerText="";
    }
    else
    {
        if(cpass1===password.value)
        {
            flagg=1;
            msg.innerText="Password Matching!!!";
            cpassword.style="border:green";
            msg.style="color:green;font-size: 14px; font-family: Righteous', cursive;"
        }
        
        else
        {
            flagg=0;
            msg.innerText="Password Mismatch!!!";
            msg.style="color:red;font-size: 14px; font-family: Righteous', cursive;"
            cpassword.style="border:red";
           
        }
    }
}


// Validate signup confirm password on submit
function cpass()
{
    if(flagg==1 && flag==1){
        cpassword.style="border-color:green";
        return true;
    }
    else if(cpassword.value==""){
            msg.style.color="red";
            msg.innerText="Password cannot be empty!";
            cpassword.style="border-color:red";
            return false;
        }
    else{
        cpassword.style="border-color:red";
        return false;
    }
        
}


