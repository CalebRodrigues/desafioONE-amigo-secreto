let amigos = [];

function atualizarLista() {
    let elementosLista = "";
    for (i = 0; i < amigos.length; i++) {
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