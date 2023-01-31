console.log(`Trabalhando com condicionais`);

// Declarando um array (lista)
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 14;
const estaAcompanhada = true;
const temPassagemComprada = true;

// console.log(`Destinos possíveis até o dia 31/12/2022: `);
// console.log(listaDestinos);

// if (idadeComprador >= 18) {
//     console.log('Comprador é maior de idade!');
//     console.log(`Passagem para ${listaDestinos[0]} vendida!`);
//     listaDestinos.splice(0, 1); // Removendo um item iniciando do indice 0
// } else if (estaAcompanhada) {
//     console.log('Comprador está acompanhado!');
//     console.log(`Passagem para ${listaDestinos[0]} vendida!`);
//     listaDestinos.splice(0, 1); // Removendo um item iniciando do indice 0
// } else {
//     console.log('O comprador é menor de idade!');
// }

console.log(`Destinos possíveis até o dia 31/12/2022: `);
console.log(listaDestinos);

// operador || (or do python)
if (idadeComprador >= 18 || estaAcompanhada) {
    console.log('Boa viagem!!');
    console.log(`Passagem para ${listaDestinos[0]} vendida!`)
    listaDestinos.splice(0, 1); // Removendo um item iniciando do indice 0
} else {
    console.log('O comprador é menor de idade!');
}
console.log(listaDestinos);
console.log('\n\nMomento do embarque:\n');

// operador && (end do python)
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log('Boa viagem!!');
} else {
    console.log('Você não pode embarcar!!');
}

// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

