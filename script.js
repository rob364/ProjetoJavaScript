function alterar() {
    document.getElementById("titulo").innerHTML = "Trocou o titulo";
    document.getElementById("campo").value = "Trocou o campo!";
}

function somar(x, y) {
    let total = x + y;

    document.getElementById("campo").value = total;

}
var resultado = soma(10, 15);