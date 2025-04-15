const faturamento = require('./faturamento.json');

let valores = faturamento
    .map(dia => dia.valor)
    .filter(valor => valor > 0);

let menor = Math.min(...valores);
let maior = Math.max(...valores);

let media = valores.reduce((acc, val) => acc + val, 0) / valores.length;

let diasAcimaDaMedia = valores.filter(valor => valor > media).length;

console.log("Menor faturamento:", menor.toFixed(2));
console.log("Maior faturamento:", maior.toFixed(2));
console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);
