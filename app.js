let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo != "") {
        document.getElementById("amigo").value = "";
        amigos.push(nomeAmigo);
    } else {
        alert("Por favor, insira um nome.");
    }
}