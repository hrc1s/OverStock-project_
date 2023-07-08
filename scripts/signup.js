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
// ---------------------------------------------------------------------------------------

// // Register form submission
//     document.getElementById('register-form').addEventListener('submit', function(event) {
//       event.preventDefault();
      
//       var email = document.getElementById('email').value;
//       var password = document.getElementById('password').value;

//       if (email === '' || password === '') {
//         alert('Please fill in the credentials');
//       } else {
//         var existingAccounts = JSON.parse(localStorage.getItem('accInfo')) || [];
//         var account = {
//           email: email,
//           password: password
//         };

//         existingAccounts.push(account);
//         localStorage.setItem('accInfo', JSON.stringify(existingAccounts));
//         event.target.reset();
//         alert('Account Created');
//       }
//     });

//     // Login form submission
//     document.getElementById('login-form').addEventListener('submit', function(event) {
//       event.preventDefault();
      
//       var email = document.getElementById('login-email').value;
//       var password = document.getElementById('login-password').value;

//       var existingAccounts = JSON.parse(localStorage.getItem('accInfo')) || [];
//       var isLoggedIn = false;

//       for (var i = 0; i < existingAccounts.length; i++) {
//         if (email === existingAccounts[i].email && password === existingAccounts[i].password) {
//           isLoggedIn = true;
//           break;
//         }
//       }

//       if (isLoggedIn) {
//         alert('Logged in Successfully');
//         window.location.href = 'index.html';
//       } else {
//         alert('Wrong Credentials');
//       }

//       event.target.reset();
//     });






    