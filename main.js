const form = document.getElementById('form-atividade');
const imgAprovado = '<img src ="./images/aprovado.png" alt="emoji celebrando"/>';
const imgReprovado = '<img src ="./images/reprovado.png" alt="emoji decepcionado"/>';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota minima:'));

let linhas = '';//queremos que seja acrescentado uma nova linha 

form.addEventListener('submit', function(e){
    e.preventDefault();// para parar de atualizar a página e limpas os campos

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){

    const inputNomeAtividade = document.getElementById('nome-atividade');//campos da atividade e da nota
    const inputNotaAtividade = document.getElementById('nota-atividade');//campos da atividade e da nota
    
    if(atividade.includes(inputNomeAtividade.value)){
        alert(`À atividade ${inputNomeAtividade.value} já foi inserida`);
    }else{

atividade.push(inputNomeAtividade.value);
notas.push(parseFloat(inputNotaAtividade.value));

let linha = '<tr>';
//value para pegar o valor do campo
linha += `<td>${inputNomeAtividade.value}</td>`;
linha += `<td>${inputNotaAtividade.value}</td>`;
linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
linha += '</tr>';

linhas += linha;
    }



inputNomeAtividade.value = '';
inputNotaAtividade.value = '';    

}

function atualizaTabela(){
//vamos colocar esse conteúdo dentro do corpo da tabela
const corpoTabela = document.querySelector('tbody');

//para inserir um conteúdo dentro de uma tag usamos(innerHTML)
corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i =0; i< notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length

}

