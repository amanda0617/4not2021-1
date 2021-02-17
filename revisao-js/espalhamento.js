console.log(Math.min(14, 7, -3, 1, 23, 34)) //Retorna o menor valor passado - Math é a biblioteca padrão do js
console.log(Math.max(14, 7, -3, 1, 23, 34)) //Retorna o maior valor passado

let numeros = [14, 7, -3, 1, 23, 34]

//Usando espalhamento para "desmontar" o vetor
//São esses 3 pontinhs, eles espalham os elementos de um vetor em valores individuais
//espalhamento é uma coisa especifica de vetor, pode não funcionar em obj
// o min e o max não aceitam vetores, eles esperam receber números soltos
console.log(Math.min(...numeros))
console.log(Math.max(...numeros))

let maisNumeros = [4, 0, 11, ...numeros, 8, 19, 26]
console.log(maisNumeros)

//Função com parâmetro (ou argumento) de resto
// os 3 pontinhos transformam parametros soltos em vetor 
function somaTudo(...nums) {
    let soma = 0
    for(let n of nums) soma += n // quando a função pode ser escrita em apenas uma linha, o parentese pode ser omitido
    return soma
}

console.log(somaTudo(12, 45, -5))
console.log(somaTudo(2, 76, -2, 41, 19, 11, 22, 30))

// Argumento convencional + argumento de resto
function calcular(oper, ...nums){
    let res
    switch(oper) {
        case '+':
            //res = 0
            //for(let n of nums) soma += n
            res = somaTudo(...nums)
            break

            case '*':
                res = 1
                for(let n of nums) res *= n
    }
    return res
}

console.log(calcular('*', 12, 45, -5))
console.log(calcular('+', 2, 76, -2, 41, 19, 11, 22, 30))

//Como chamar a função somaTudo() para processar o vetor maisNumeros?
console.log(somaTudo(...maisNumeros))
console.log(calcular('+', ...maisNumeros))