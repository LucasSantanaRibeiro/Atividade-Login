function login() {
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if (email.toLowerCase() === "lucas@gmail.com" && senha === "lebronjames05") {
        alert("Você concluiu o login")
    }
    else {
        alert("O login falhou")
    }
}
