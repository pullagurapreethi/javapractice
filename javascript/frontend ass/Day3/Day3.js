function submit(){
    

    let Username = document.getElementById("Username").value;
    let password = document.getElementById("password").value;

    if(Username === "jeevan" && password === "1234"){
        alert("login successful");
    } 
    else {
        alert("invalid");
    }
}
