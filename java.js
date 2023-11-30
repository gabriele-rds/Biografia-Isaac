// Primeira Lei de Newton
function verificarMovimento() {
    const massa = parseFloat(document.getElementById('massaInput').value);
    const aceleracao = parseFloat(document.getElementById('aceleracaoInput').value);

    if (isNaN(massa) || isNaN(aceleracao)) {
        alert('Por favor, insira valores numéricos para massa e aceleração.');
        return;
    }

    if (aceleracao === 0) {
        document.getElementById('movimentoOutput').textContent = 'em repouso';
    } else {
        document.getElementById('movimentoOutput').textContent = 'em movimento uniforme';
    }
}
// Segunda Lei de Newton
function calcularForca() {
    const massa = parseFloat(document.getElementById('massInput').value);
    const aceleracao = parseFloat(document.getElementById('accelerationInput').value);

    // Verificando se os valores são válidos (se são números)
    if (isNaN(massa) || isNaN(aceleracao)) {
        // Se algum valor não for um número válido, exibe um alerta e para a execução da função
        alert('Por favor, insira números válidos para massa e aceleração.');
        return;
    }

    // Calculando a força usando a fórmula F = m * a
    const forca = massa * aceleracao;
    document.getElementById('resultadoForca').textContent = forca.toFixed(2) + ' N'; // Exibindo o resultado com duas casas decimais
}
// Terceira Lei de Newton
function calcularReacao() {
    const forcaDeAcao = parseFloat(document.getElementById('acaoInput').value);

    if (isNaN(forcaDeAcao)) {
        alert('Por favor, insira um valor numérico para a força de ação.');
        return;
    }

    const forcaDeReacao = -forcaDeAcao; // Calculando a força de reação oposta

    document.getElementById('reacaoOutput').textContent = `${forcaDeReacao} N`;
}