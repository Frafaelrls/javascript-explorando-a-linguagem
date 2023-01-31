console.log('Trabalhando com atribuição de vairiáveis');
// const - Abreviação de constante, não aceita redistribuição e redeclaração
const idade = 29;
// let - Abreviação de _______, aceita redistribuição mas não aceita redeclaração
let primeiroNome = 'Felippe';
// Dar preferência para o uso de variáveis do tipo const
const sobrenome = 'Rafael';

console.log(primeiroNome + '' + sobrenome);
console.log(primeiroNome, sobrenome);
// Usar as crases para fazer template string (formatação de string - Python)
console.log(`Meu nome é: ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idadeFelippe ; // declarando variável
idadeFelippe = 29; // atribuindo valor
idadeFelippe = idadeFelippe + 1;
console.log(idadeFelippe);
