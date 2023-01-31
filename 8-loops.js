console.log(`\nTrabalhando com loops`);


const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 14;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = 'São Paulo';


console.log(`\n Destinos possíveis até o dia 31/12/2022: `);
console.log(listaDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }

    contador += 1;
}

console.log('Destino existe? ', destinoExiste);

// let cont = 0 (condição inicial do loop)
// cont < 3 (condição para permanecer no loop)
// cont += 1 (condição após cada interação)
// for(let cont = 0; cont < 3 ; cont += 1) 

for(let i = 0; i < 3; i++) {
    if (listaDestinos[i] == destino) {
        destinoExiste = true;
        break;
    }

}