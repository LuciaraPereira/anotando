/* Pagina de notas */
const btnAnotar = document.querySelector("#btn-criar-anotacao")

function criarNota(){
    const formAnotar = document.querySelector("#mostra-form")
    const txtBtn = formAnotar.classList.contains("hide");

    formAnotar.classList.toggle("hide");
    btnAnotar.textContent = txtBtn ? "Fechar" : "Criar nova anotação"
}

 btnAnotar.addEventListener("click", criarNota)


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
            cardNota.remove()
        })

    editar.addEventListener("click", evt =>{
        let titulo = document.querySelector("#titulo")
        let descricao = document.querySelector("#descricao")
        let btnEditar = document.querySelector("#enviar")

        titulo.value = tituloNota.textContent  
        descricao.value = descricaoNota.textContent

        emEdicao = cardNota
        btnEditar.textContent = "Salvar Edição"
    })
    return divAcoes   
}

function addNota(){ 

    let titulo = document.querySelector("#titulo")
    let descricao = document.querySelector("#descricao")
    let containerNota = document.querySelector(".container-notas")
    let formEnviar = document.querySelector("#form-criar-anotacao")

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

            emEdicao = null
            btnEditar.textContent = "Adicionar Nota"

        } else {
            let cardNota = document.createElement("div")
            let tituloNota = document.createElement("h2")
            let descricaoNota = document.createElement("p")
            cardNota.classList.add("card-nota")
            tituloNota.classList.add("titulo-anotacao")
            descricaoNota.classList.add("descricao-anotacao")

            tituloNota.textContent = titulo.value
            descricaoNota.textContent = descricao.value

            let divAcoes = acoesNota(cardNota, tituloNota, descricaoNota)       
            cardNota.appendChild(divAcoes)
            cardNota.appendChild(tituloNota)
            cardNota.appendChild(descricaoNota)
            containerNota.appendChild(cardNota)
        }
        titulo.value = ""
        descricao.value = ""   
        
    })
}

addNota()

// function colorindo(){
//     const cores = ["red", "blue", "green", "pink"]
//     let cards = document.querySelectorAll(".card-nota");
//         if(cards){
//             cores.map((cor, i)=> {
//                 cards[i].style.backgroundColor = cor
            
//         })
//     }
// }

// colorindo()


   
