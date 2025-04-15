function isFibonacci(num) {
    let a = 0;
    let b = 1;

    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    if (b === num || num === 0) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} NÃO pertence à sequência de Fibonacci.`);
    }
}

// O numero pode ser alterado aqui:
let numero = 21;
isFibonacci(numero);
