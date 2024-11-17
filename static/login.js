function populateEmail(){
 const inputemail=localStorage.getItem('userEmail');
 inputEmail=inputemail;
 if(inputemail){
    document.getElementById("inputmail").value=inputemail;
 }
 console.log(inputemail);
 const passowrd=document.getElementById("inputpassword");
 const showpassword=document.getElementById("showpassword");
  showpassword.addEventListener('change',()=>{
    if(showpassword.checked){
        passowrd.type='text';
    }
    else{
        passowrd.type='password';
  }
  })
  if (inputemail=="jeevaks@kiot.ac.in" && passowrd=="jeevaks"){
    window.location.href="/content"
  }
}
window.onload=populateEmail;



