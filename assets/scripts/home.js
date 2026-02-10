/* Pagina de notas */
const btnAnotar = document.querySelector("#btn-criar-anotacao");
let titulo = document.querySelector("#titulo")
let descricao = document.querySelector("#descricao")
let listaNota = document.querySelector(".lista-notas")
let formEnviar = document.querySelector("#form-criar-anotacao")
let dados = [];

function salvarNotas(){
    localStorage.setItem("notas", JSON.stringify(dados))
}

function carregarNotas(){
    const salvas = localStorage.getItem("notas")

    if(salvas){
        dados = JSON.parse(salvas)

        listaNota.innerHTML = ""

        dados.forEach(nota => criarNotaNaTela(nota))
    }
} 


function criarNota(){
    const formAnotar = document.querySelector("#mostra-form")
    const txtBtn = formAnotar.classList.contains("hide")

    formAnotar.classList.toggle("hide")
    btnAnotar.textContent = txtBtn ? "Fechar" : "Criar nova anotação"
}

btnAnotar.addEventListener("click", criarNota);


function criarNotaNaTela(nota){

    let li = document.createElement("li")
    let cardNota = document.createElement("div")
    let tituloNota = document.createElement("h2")
    let descricaoNota = document.createElement("p")

    cardNota.classList.add("card-nota")
    tituloNota.classList.add("titulo-anotacao")
    descricaoNota.classList.add("descricao-anotacao")

    tituloNota.textContent = nota.titulo
    descricaoNota.textContent = nota.descricao

    cardNota.dataset.id = nota.id

    let divAcoes = acoesNota(cardNota, tituloNota, descricaoNota)

    cardNota.appendChild(divAcoes)
    cardNota.appendChild(tituloNota)
    cardNota.appendChild(descricaoNota)

    li.appendChild(cardNota)
    listaNota.appendChild(li)
}

let emEdicao = null

function acoesNota(cardNota, tituloNota, descricaoNota){
    let divAcoes = document.createElement("div")
    divAcoes.classList.add("divAcoes")
    let excluir = document.createElement("i")
    excluir.classList.add("fa-solid", "fa-trash")
    let editar = document.createElement("i")
    editar.classList.add("fa-solid", "fa-edit")
    divAcoes.appendChild(excluir)
    divAcoes.appendChild(editar)

    excluir.addEventListener("click", evt=>{

        const id = cardNota.dataset.id

        dados = dados.filter(n => n.id != id)

        salvarNotas()

        cardNota.parentElement.remove()
    });
    
    editar.addEventListener("click", evt =>{
        let descricao = document.querySelector("#descricao")
        let btnEditar = document.querySelector("#enviar")

        titulo.value = tituloNota.textContent  
        descricao.value = descricaoNota.textContent

        emEdicao = cardNota
        btnEditar.textContent = "Salvar Edição"
    })
    return divAcoes   
}  

formEnviar.addEventListener("submit", evt =>{
    evt.preventDefault(); 

    let txtAdd = document.querySelector(".adiconeNota")
    if(txtAdd){
        txtAdd.remove()
    }
        
    if(emEdicao){
        let tituloNota = emEdicao.querySelector(".titulo-anotacao")
        let descricaoNota = emEdicao.querySelector(".descricao-anotacao")
        let btnEditar = document.querySelector("#enviar")

        tituloNota.textContent = titulo.value
        descricaoNota.textContent = descricao.value

        const id = emEdicao.dataset.id

        const nota = dados.find(n => n.id == id)

        nota.titulo = titulo.value
        nota.descricao = descricao.value

        salvarNotas()

        emEdicao = null
        btnEditar.textContent = "Adicionar Nota"
    }
    else {
        const novaNota = {
            id: Date.now(),
            titulo: titulo.value,
            descricao: descricao.value
        }

        dados.push(novaNota)
        salvarNotas()

        criarNotaNaTela(novaNota)

    }
        titulo.value = ""
        descricao.value = ""   
        
})


window.addEventListener("DOMContentLoaded", carregarNotas)
