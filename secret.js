function check(){
    let p = document.getElementById("pass").value;

    if(p === "5000630"){
        window.location.href = "secret2.html";
    } else {
        document.getElementById("msg").innerText = "wrong password 😭 try again";
    }
}