const estados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

let total = Object.values(estados).reduce((acc, val) => acc + val, 0);

for (let estado in estados) {
    let percentual = (estados[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
