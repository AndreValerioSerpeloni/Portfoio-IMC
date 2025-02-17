// #formulario = usar # para selecionar um id
const form = document.querySelector('#formulario'); // querySelector = seleciona um elemento especifico de uma pagina

// Capturar o evento de submit do formulario
// Adicionou um escutador que é o evento "submit"
form.addEventListener('submit', function(e){ // e = significa event
    e.preventDefault(); //preveniu o Default
    const inputPeso = e.target.querySelector('#peso'); // captura dados peso
    const inputAltura = e.target.querySelector('#altura'); // captura dados altura
    
    // Converter os dados em Number:
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    // Tratamento de dados caso usuario digitar qualquer coisa:
    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }

    // Tratamento de dados caso usuario digitar qualquer coisa:
    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    // Calcula o IMC
    const imc = getImc(peso, altura); // criou uma função especifica para calcular IMC
    const nivelImc = getNivelImc(imc); // criou uma função para usar os niveis de obesidade
    const msg = `Seu IMC é ${imc} (${nivelImc}.)`; // criou uma mensagem com os valores
    setResultado(msg, true); // setamos o resultado com a flag true para quando for verdadeiro

});

// Criamos um array para obter os valores
function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9){
        return nivel[5];
    }
    if (imc >= 34.9){
        return nivel[4];
    }
    if (imc >= 29.9){
        return nivel[3];
    }
    if (imc >= 24.9){
        return nivel[2];
    }
    if (imc >= 18.5){
        return nivel[1];
    }
    if (imc < 18.5){
        return nivel[0];
    }

}
// criamos um get que faz o calculo dos valores
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Função que cria paragrafos:
function criaP(){
    const p = document.createElement('p'); // criar um paragrafo
    return p;
}

// função de mensagem que acrescenta no html do resultado
function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // limpando o html sempre que chamar o resultado
    
    const p = criaP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

//Desenvolvio por mim:
function fecharPagina(){
    window.close();
}
// Desenvolvido por mim:
function limparCampos() {
    document.getElementById("formulario").reset();
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";
}

// TESTE DE ALTERAÇÃO DE ARQUIVO