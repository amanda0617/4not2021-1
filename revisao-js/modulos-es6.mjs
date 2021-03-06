// ES6 -> ECMAScript versão 6, de 2016

// Toda vez que o arquivo tem export (sem default), a importação precisa
// acontecer entre chaves (desestruturação)
import { numeros } from './includes/dados.mjs' // esse ponto representa a pasta atual, desce para a pasta includes e desce para dados

// Podemos importar só o que vamos efetivamente usar, caso o arquivo de
// origem exporte mais de um item
//import { somaVet, quadradoVet } from './includes/funcoes.mjs'
import somaVet from './includes/funcoes.mjs'

// Quando existe export default no arquivo de origem, a importação
// não tem chaves
import dobraVet from './includes/funcoes2.mjs'

// Usando os itens importados

console.log(somaVet(numeros))
//console.log(quadradoVet(numeros))
console.log(dobraVet(numeros))