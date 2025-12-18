/* Pagina de notas */
const btnAnotar = document.querySelector("#btn-criar-anotacao")

function criarNota(){
    const formAnotar = document.querySelector("#mostra-form")
    const txtBtn = formAnotar.classList.contains("hide");

    formAnotar.classList.toggle("hide");
    btnAnotar.textContent = txtBtn ? "Voltar para o início" : "Criar nova anotação"
}

 btnAnotar.addEventListener("click", criarNota)

function addNota(){ 
    let formEnviar = document.querySelector("#form-criar-anotacao")
    formEnviar.addEventListener("submit", evt =>{
        evt.preventDefault(); 

        let txtAdd = document.querySelector(".adiconeNota")
        txtAdd.remove()

        let cardNota = document.createElement("div")
        let tituloNota = document.createElement("h2")
        let descricaoNota = document.createElement("p")
        cardNota.classList.add("card-nota")
        tituloNota.classList.add("titulo-anotacao")
        descricaoNota.classList.add("descricao-anotacao")

        let titulo = document.querySelector("#titulo")
        let descricao = document.querySelector("#descricao")
        let containerNota = document.querySelector(".container-notas")

        tituloNota.textContent = titulo.value
        descricaoNota.textContent = descricao.value

        cardNota.appendChild(tituloNota)
        cardNota.appendChild(descricaoNota)
        containerNota.appendChild(cardNota)

        titulo.value = ""
        descricao.value = ""        
    })

}

addNota()

   
