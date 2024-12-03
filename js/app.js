// Quantidades disponíveis
let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

// Escolha do usuário
const tipoSelect = document.getElementById('tipo-ingresso');
let tipoSelecionado = tipoSelect.value;

// Detecta quando o tipo escolhido pelo usuário muda e atualiza a seleção
tipoSelect.addEventListener('change', function () {
    tipoSelecionado = tipoSelect.value;
    console.log('Tipo de ingresso selecionado:', tipoSelecionado);
});

function comprar() {
    // Obtém a quantidade desejada pelo usuário
    const quantidadeDesejada = parseInt(document.getElementById('qtd').value);

    // Verifica se a quantidade é válida
    if (isNaN(quantidadeDesejada) || quantidadeDesejada < 1) {
        alert('Por favor, insira uma quantidade válida para seguir com a compra.');
        return;
    }

    // Lógica para verificar disponibilidade e atualizar a quantidade
    if (tipoSelecionado === 'pista') {
        if (quantidadeDesejada <= quantidadePista) {
            quantidadePista -= quantidadeDesejada;
            alert('Compra realizada com sucesso!');
            document.getElementById('qtd-pista').textContent = quantidadePista; // Atualiza o valor exibido
        } else {
            alert('Não há ingressos suficientes disponíveis para continuar a compra.');
        }
    } else if (tipoSelecionado === 'superior') {
        if (quantidadeDesejada <= quantidadeSuperior) {
            quantidadeSuperior -= quantidadeDesejada;
            alert('Compra realizada com sucesso!');
            document.getElementById('qtd-superior').textContent = quantidadeSuperior; // Atualiza o valor exibido
        } else {
            alert('Não há ingressos suficientes disponíveis para continuar a compra.');
        }
    } else if (tipoSelecionado === 'inferior') {
        if (quantidadeDesejada <= quantidadeInferior) {
            quantidadeInferior -= quantidadeDesejada;
            alert('Compra realizada com sucesso!');
            document.getElementById('qtd-inferior').textContent = quantidadeInferior; // Atualiza o valor exibido
        } else {
            alert('Não há ingressos suficientes disponíveis para continuar a compra.');
        }
    } else {
        alert('Selecione um tipo de ingresso válido.');
    }
}
