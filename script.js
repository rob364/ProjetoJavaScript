/* function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}

function somar(x ,y) {
    let  total = x + y;

    document.getElementById("campo").value = total;
}

var resultado = somar(10, 15);
 */
/* function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}

alterar("Titulo de exemplo"); */

/* function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}

function somar(x ,y) {
    let  total = x + y;

   return total;
}

var resultado = somar(10, 15);

console.log(resultado); */

/* function trocarImagem(filename, animalname) {
    document.querySelector('.imagem').setAttribute('src', 'images/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);

}
function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert("O animal é: "+animal);
} */

function subirTela() {
    window.scrollTo({
        top: 0,
        /* behavior: 'smooth' */
    })
}

function decidirBotaoScroll() {
    if(window.scrollY === 0) {
        //ocultar botao
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        // mostrar o botao
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

/* setInterval(decidirBotaoScroll, 1000); */
window.addEventListener('scroll', decidirBotaoScroll);

