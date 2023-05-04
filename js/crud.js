document.querySelector("#Salvar").addEventListener("click", cadastrar)

let lojas = []

window.addEventListener("load", () => {
    lojas = JSON.parse( localStorage.getItem("lojas")) || []
    atualizar()
} )
function atualizar(){
    document.querySelector("#lojas").innerHTML = ""
    lojas.forEach(instrumento => document.querySelector("#lojas").innerHTML += criarCard(instrumento))
}

function cadastrar() {
    const marca = document.querySelector("#marca").value    
    const qntd = document.querySelector("#qntd").value
    const categoria = document.querySelector("#categoria").value
    //const modal = bootstrap.modal.getInstance(document.querySelector("#exampleModal"))

    const instrumento = {//JSON Java Script Object Notation
        marca,
        qntd,
        categoria
    }
    if(!isValid(instrumento.marca,document.querySelector("#marca")))return
    if(!isValid(instrumento.qntd,document.querySelector("#qntd")))return
    
    lojas.push(instrumento)
    localStorage.setItem("lojas",JSON.stringify(lojas))

atualizar()
modal.hide()
}

function isValid (valor, campo){
    if(valor.length == 0) {
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    } else {
        campo.classList.add("is-valid")
        campo.classList.remove("is-invelid")
        return true
    }
}

function apagar(botao){    
    botao.parentNode.parentNode.parentNode.remove()
}

function criarCard(instrumento) {
    const card = `
    <div class="card col-lg-3 col-md-6 col-sm-12">
    <div class="card-header">
        ${instrumento.marca}
    </div>
    <div class="card-body">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text">${instrumento.categoria}</p>
        <span class="badge text-bg-warning">Quantidade: ${instrumento.qntd} </span>
    </div>
    <div class="card-footer">
        <a href="#" class="btn btn-success" tittle="marcar como concluida">
            <i class="bi bi-check2"></i>
        </a>
        <a href="#" onClick ="apagar(this)" class="btn btn-danger" tittle="apagar instrumento">
            <i class="bi bi-trash3"></i>
        </a>
    </div>

</div>
`// template literals

    return card
}