let B = document.getElementsByClassName("login-bt")[0];
let pass = document.getElementById("pw");
let id = document.getElementById("id");

function Changecolor(){
    if (pass.value.length >=8 && id.value.length>0){
        B.style.backgroundColor = "red";
    }
    else{
        B.style.backgroundColor = "";
    }
}

pass.addEventListener("input",Changecolor);
id.addEventListener("input",Changecolor);