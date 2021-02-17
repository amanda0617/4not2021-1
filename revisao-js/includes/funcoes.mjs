//Exportar as funções para uso dentro de outro arquivo

//Export default só funciona para functions e classes
// Não funciona para constantes e variáveis
//E só pode existir um export default por arquivo
export default function somaVet(vet) {
    let soma = 0
    for(let n of vet) soma += n
    return soma
}

//Cria um novo vetor com cada elemento do vetor original
// elevado ao quadrado
export function quadradoVet(vet) {
    let res = [] //vetor vazio
    for(let n of vet) res.push(n ** 2) // depois é só percorrer todos os elementos do vetor original e inseri-los com o push
    return res
}