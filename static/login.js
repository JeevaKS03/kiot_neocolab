function populateEmail(){
 const inputemail=localStorage.getItem('userEmail');
 inputEmail=inputemail;
 if(inputemail){
    document.getElementById("inputmail").value=inputemail;
 }
 console.log(inputemail);
 const passoword=document.getElementById("inputpassword");
 const showpassword=document.getElementById("showpassword");
  showpassword.addEventListener('change',()=>{
    if(showpassword.checked){
        passowrd.type='text';
    }
    else{
        passowrd.type='password';
  }
  })
}
window.onload=populateEmail;
document.getElementById("button").onclick=function(){
  const inputemail=localStorage.getItem('userEmail');
  const password=document.getElementById("inputpassword").value;
  console.log(inputemail);
  console.log(password);
  if (inputemail=="jeevaks@kiot.ac.in" && password=="jeevaks"){
    window.location.href="/content";
  }
}



