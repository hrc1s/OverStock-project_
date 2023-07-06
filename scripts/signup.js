var arr = JSON.parse(localStorage.getItem("accInfo")) || [];
var form = document.querySelector("form").addEventListener("submit", function(){
    event.preventDefault();
    var email = document.getElementById("email").value; 
    var password = document.getElementById("password").value;
    
    if(email == "" || password == ""){
        alert("Please fill in the credentials");
    }else{
        var obj = {
        email: email,
        password: password,
    }
        arr.push(obj);
        localStorage.setItem("accInfo", JSON.stringify(arr));
        event.target.reset();
        // console.log("this");
        alert("Account Created");
    }
    
}); 
// function signup(){
//     event.preventDefault();
//     var email = document.getElementById('email').value;
//     var pass = document.getElementById('password').value;
//     var user = {
//         email: email,
//         password: pass, 
//     };

//     var json = JSON.stringify(user);
//     localStorage.setItem(username, json);
//     console.log("user added");
// }

// function login(){
//     event.preventDefault();
//     var e = document.getElementsByClassName('Email').value;
//     var p = document.getElementsByClassName('Password').value;
//     var user = localStorage.getItem(username);
//     var data = JSON.parse(user);
//     console.log(data);
// }
var from= document.querySelector("#form2").addEventListener("submit", function(){
    event.preventDefault();
    var arr = JSON.parse(localStorage.getItem("accInfo")) || [];
    var e=document.getElementById("Email").value;
    var p=document.getElementById("Password").value;
    for(var i =0; i<arr.length; i++){
        if(e == arr[i].email && p == arr[i].password){
            alert("Logged in Successfully");
            window.location.href = "index.html";
            break;
        }else{
            alert("Wrong Credentials");
            break;
        }
    }
    event.target.reset();

})





    
    // let Email = document.getElementsByClassName("Email").value; 
    // let Pass = document.getElementsByClassName("Password").value;