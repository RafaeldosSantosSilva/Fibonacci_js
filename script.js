// Solicita ao usuário um número inteiro positivo
let numero = parseInt(prompt("Digite um número inteiro positivo:"));

// Verifica se o número é válido
if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um número inteiro positivo.");
} else {
    // Calcular o fatorial
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}.`);

    // Calcular a sequência de Fibonacci
    let fibonacci = [];
    let a = 0, b = 1;

    if (numero >= 1) fibonacci.push(a);
    if (numero >= 2) fibonacci.push(b);

    for (let i = 2; i <= numero; i++) {
        let c = a + b;
        fibonacci.push(c);
        a = b;
        b = c;
    }

    console.log(`Sequência de Fibonacci até ${numero}: ${fibonacci.join(', ')}.`);
}
