let invalidFirstName = document.getElementById('invalidFirstName');
let validFirstName = document.getElementById('validFirstName');
let invalidEmail = document.getElementById('invalidEmail');
let validEmail = document.getElementById('validEmail');
let invalidState = document.getElementById("invalidState");
let validState = document.getElementById("validState");
let invalidPassword = document.getElementById('invalidPassword');
let validPassword = document.getElementById('validPassword');
let invalidConfirmPassword = document.getElementById('invalidConfirmPassword');
let validConfirmPassword = document.getElementById('validConfirmPassword');
var passwordStored = ""
var emailStored = ""


function validate(){
    let firstName = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let passwordStored = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let flag1 = false, flag2 = false, flag3 = false

    if(firstName === ""){
        invalidFirstName.style.display = 'block'
        flag1 = false
    }
    else{
        invalidFirstName.style.display = 'none'
        flag1 = true
    }


    if(email === "" || !email.includes("@") || !email.includes(".") || email.slice(email.lastIndexOf('.')).length < 3){
        invalidEmail.style.display = 'block'
        flag2 = false
    }
    else{
        emailStored = email
        localStorage.setItem("emlStored", emailStored);
        invalidEmail.style.display = 'none'
        flag2 = true
    }

    
   
    if(confirmPassword === passwordStored && passwordStored != ""){
        invalidConfirmPassword.style.display = 'none'
        localStorage.setItem("pwdStored", passwordStored);
        
        flag3 = true
    }
    else{
        invalidConfirmPassword.style.display = 'block'

        flag3 = false
    }


  if(flag1 == true && flag2 == true && flag3 == true ){
      alert("SignUp successful! Login now.")
      window.location.reload()
  }
}


const loginValidate = () => {
  var passwordStored = localStorage.getItem("pwdStored");
  var emailStored = localStorage.getItem("emlStored");
  let loginEmail = document.getElementById('loginEmail').value;
  let loginPassword = document.getElementById('loginPassword').value;
  let invalidLoginPassword = document.getElementById('invalidLoginPassword')
  let invalidLoginEmail = document.getElementById('invalidLoginEmail')
  console.log(emailStored)
    console.log(loginEmail)
    console.log(passwordStored)
    console.log(loginPassword)
  let flag = true
  if (loginEmail === "" || loginEmail != emailStored) {
       invalidLoginEmail.style.display = 'block'
       flag = false
  } 
  if (loginPassword === "" || loginPassword != passwordStored) {
      invalidLoginPassword.style.display = 'block'
      flag = false
  }
  if(flag === true){
      alert("Login successful!")
      window.location.reload()
  }

  console.log('function calling');
}


const getName =()=>{
    document.getElementById(strEmail).value=localStorage.getItem("emlStored");
  
}