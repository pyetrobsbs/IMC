


function MeuEscopo() {
    let form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');

    function recebeDoform(evento) {
        evento.preventDefault();
        let peso = Number(document.querySelector('#peso').value);
        let altura = Number(document.querySelector('#Altura').value); 

        if (!peso) {
            resultado.innerHTML = `<p class = 'error'> Peso inválido</p>`;
        }
        else if(!altura){
            resultado.innerHTML = `<p class = 'error'> Altura inválido</p>`;
        }
         else {
            IMC(peso, altura); 
        }
    }

    function IMC(peso, altura) {
        let result = peso / (altura * altura);
        if (result <= 18.5) {
            resultado.innerHTML = `<p> Seu IMC é ${result.toFixed(2)} Abaixo do peso </p>`;
        } else if (result >= 18.5 && result <= 24.9) {
            resultado.innerHTML = `<p> Seu IMC é ${result.toFixed(2)} Peso normal </p>`;
        } else if (result >= 25 && result <= 29.9) {
            resultado.innerHTML = `<p> Seu IMC é ${result.toFixed(2)} Sobrepeso </p>`;
        } else if (result >= 30 && result <= 34.9) {
            resultado.innerHTML = `<p> Seu IMC é ${result.toFixed(2)} Obesidade grau 1 </p>`;
        } else if (result >= 35 && result <= 39.9) {
            resultado.innerHTML = `<p> Seu IMC é ${result.toFixed(2)} Obesidade grau 2 </p>`;
        } else if (result >= 40) {
            resultado.innerHTML = `<p> Seu IMC é ${result.toFixed(2)} Obesidade grau 3 </p>`;
        }
    }

    form.addEventListener('submit', recebeDoform);
}

MeuEscopo();


