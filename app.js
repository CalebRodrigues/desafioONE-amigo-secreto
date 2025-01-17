let amigos = [];

function atualizarLista() {
    let elementosLista = "";
    for (let i = 0; i < amigos.length; i++) {
        elementosLista += "<li>" + amigos[i] + "</li>";
    }
    document.getElementById("listaAmigos").innerHTML = elementosLista;
}

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo != "") {
        document.getElementById("amigo").value = "";
        amigos.push(nomeAmigo);
        atualizarLista();
    } else {
        alert("Por favor, insira um nome.");
    }
}

function gerarNumero() {
    return Math.floor(Math.random() * amigos.length);
}

function sortearAmigo() {
    if (amigos.length > 0) {
        document.getElementById("resultado").innerHTML = amigos[gerarNumero()];
    } else {
        alert("Adicione amigos antes de sortear!");
    }
}