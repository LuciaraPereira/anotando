/* Pagina de notas */
const btnAnotar = document.querySelector("#btn-criar-anotacao")

function criarNota(){
    const formAnotar = document.querySelector("#mostra-form")
    const txtBtn = formAnotar.classList.contains("hide");

    formAnotar.classList.toggle("hide");
    btnAnotar.textContent = txtBtn ? "Voltar para o início" : "Criar nova anotação"
}

 btnAnotar.addEventListener("click", criarNota)