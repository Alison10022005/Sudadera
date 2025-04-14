let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
let patronCorreo =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let VerPassword = document.getElementById("checkInput");

VerPassword.addEventListener("change", function(){

     if(VerPassword .checked ){

        inputPassword.type = "text";
     } else {

        inputPassword.type = "password";
     }
})

let btnDashboard = document.getElementById("btnDashboard").addEventListener("click", function(){

    let EmailValido = inputEmail.value;
    let password = inputPassword.value;

    if(EmailValido == "" ||  password == ""){

        event.preventDefault()
        alert("ingrese todos los campos para poder continuar");
    }else if(!patronCorreo.test(EmailValido)){

        event.preventDefault();
        alert("ingrese el email correcto, para poder continuar");
    }else if(password.length <= 6){

        event.preventDefault()
        alert("minimo 6 caracteres tiene la contraseña")
    }


})
