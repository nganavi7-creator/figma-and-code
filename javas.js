let button = document.querySelector("button");

button.onclick = function(){
    let username = document.querySelectorAll("input")[0].value;
    let password = document.querySelectorAll("input")[1].value;

    if(username === "" || password === ""){
        alert("Please fill all fields!");
    } else {
        alert("Login Successful!");
    }
}
