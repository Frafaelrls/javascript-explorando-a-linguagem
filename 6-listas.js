console.log(`Trabalhando com listas`);

// Declarando um array (lista)
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

console.log(`Destinos possíveis até o dia 31/12/2022: `);
console.log(listaDestinos);
// Adicionando um novo item no array
listaDestinos.push(`Minas gerais`);
console.log(`Destinos possíveis após o dia 04/01/2023: `);
console.log(listaDestinos)
// Removendo um item iniciando do indice 0
listaDestinos.splice(0, 1);
console.log(`Destinos possíveis após o dia 10/01/2023: `);
console.log(listaDestinos);
console.log(`O melhor estadado é: ${listaDestinos[2]}`);