function validation(){
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if (username=="Admin"&&password=="111111"){
    alert("login successfuly");
return false;
}
else{
    alert("login faild");
}
}
