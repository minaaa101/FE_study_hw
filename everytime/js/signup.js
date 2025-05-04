let B = document.getElementsByClassName("join-bt")[0];
let pw = document.getElementById("pw");
let nam = document.getElementById("name");
let nickname = document.getElementById("nickname");
let email = document.getElementById("email");
let pwc = document.getElementById("pwc");


function Changecolor(){
    if (pw.value.length >=8 && nickname.value.length>0 && email.value.length>0 && nam.value.length>0&&pw.value===pwc.value){
        B.style.backgroundColor = "red";
    }
    else{
        B.style.backgroundColor = "";
    }
}

pw.addEventListener("input",Changecolor);
nam.addEventListener("input",Changecolor);
nickname.addEventListener("input",Changecolor);
pwc.addEventListener("input",Changecolor);
email.addEventListener("input",Changecolor);