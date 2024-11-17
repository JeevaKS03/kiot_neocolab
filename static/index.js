
document.getElementById("button").onclick=function(){
    const inputemail=document.getElementById("input").value;
    if(inputemail.endsWith("@kiot.ac.in")){
    if (inputemail=="jeevaks@kiot.ac.in"){
        localStorage.setItem('userEmail',inputemail);
        //window.open('login.html');
        window.location.href='/pwd';
        
    }}
    else{
        window.alert("Invalid Email!");
    }
    console.log(inputvalue);
    
}