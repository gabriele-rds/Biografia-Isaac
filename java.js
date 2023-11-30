
// Função para calcular a força com base na massa e aceleração inseridas
function calcularForca() {
    // Obtendo os valores de massa e aceleração dos campos de entrada
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

    // Exibindo o resultado da força na página HTML
    // O resultado é exibido no elemento <span> com o id 'resultadoForca'
    document.getElementById('resultadoForca').textContent = forca.toFixed(2) + ' N'; // Exibindo o resultado com duas casas decimais
}
