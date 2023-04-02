let users=JSON.parse(localStorage.getItem("users"))||[]
let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  if(form.submit.value=="Continue"){

    let num=form.number.value;
    let flag=false;
    
    for(let i=0;i<users.length;i++)
    {
      if(users[i].number==num){
        flag=true;
        break;
      }
      else{
        flag=false;
      }
    }
    if(flag){
      form.submit.value="SIGN IN"
      form.password.style.display="block"
    }
    else
    signUP()
  }
  else if(form.submit.value=="SIGN UP"){
    let obj={
      number:form.number.value,
      usernmae:form.username.value,
      email:form.email.value,
      password:form.password.value,
    }
    users.push(obj)
    localStorage.setItem("users",JSON.stringify(users))
  }
  else if(form.submit.value=="SIGN IN"){
    for(let i=0;i<users.length;i++)
    {
      if(users[i].number==form.number.value)
      {
        var obj=users[i]
        break;
      }
    }
    if(form.password.value==obj.password)
    {
      alert("Login Successful")
    }
    else{
      alert("wrong password")
      }
    }

  

})
function signUP(){
  console.log("inside Signup")
  form.submit.value="SIGN UP"
  document.querySelector("#username").style.display="block"
  document.querySelector("#email").style.display="block"
  document.querySelector("#password").style.display="block"
  document.querySelector("form label").style.display="block"
}