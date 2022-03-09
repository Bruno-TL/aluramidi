function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
         elemento.play();
    }
    else{
        console.log('Elemento não encontrado');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contator = 0;

for(let contator = 0; contator < listaDeTeclas.length; contator++){

    const tecla = listaDeTeclas[contator];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        if(evento.code === "Space" || evento.code === "Enter"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
