const btnLogin = document.querySelector(".loginBtn");
const btnCadastro = document.querySelector(".cadastroBtn")
const btnComecar = document.querySelector(".btn-comecar")
const realizarCadastro = document.querySelector("#cadastro-realizado")
const btnCancelar = document.querySelectorAll(".btn-cancelar")

const formLogin = document.querySelector(".login")
const formcadastro = document.querySelector(".cadastro")
const containerPrincipal = document.querySelector(".container-principal")

const form = document.querySelector("#form-cadastro")

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


let entrarLogin = document.querySelector("#form-login")
entrarLogin.addEventListener("submit", evt =>{
    evt.preventDefault(); 
    window.location.href = "../assets/pages/home.html";
})


let entrarCadastro = document.querySelector("#form-cadastro")
entrarCadastro.addEventListener("submit", evt =>{
    alert("Cadastrado com sucesso, faça seu login!")
    formLogin.classList.remove("hide");
    formcadastro.classList.add("hide");
    containerPrincipal.classList.add("hide")
})
