const btnLogin = document.querySelector(".loginBtn");
const btnCadastro = document.querySelector(".cadastroBtn")
const btnComecar = document.querySelector(".btn-comecar")
const realizarCadastro = document.querySelector("#cadastro-realizado")
const btnCancelar = document.querySelectorAll(".btn-cancelar")

const formLogin = document.querySelector(".login")
const formcadastro = document.querySelector(".cadastro")
const containerPrincipal = document.querySelector(".container-principal")

btnLogin.addEventListener("click", ()=>{
    formLogin.classList.remove("hide");
    formcadastro.classList.add("hide");
    containerPrincipal.classList.add("hide")
});

function abrirCadastro() {
    formcadastro.classList.remove("hide");
    formLogin.classList.add("hide");
    containerPrincipal.classList.add("hide");
}

function fechar(){
     formcadastro.classList.add("hide");
     formLogin.classList.add("hide");
     containerPrincipal.classList.remove("hide");
}

btnCadastro.addEventListener("click", abrirCadastro);
btnComecar.addEventListener("click", abrirCadastro);
btnCancelar.forEach(x => x.addEventListener("click", fechar))
realizarCadastro.addEventListener("click", ola)