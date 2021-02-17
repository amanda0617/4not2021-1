let nota = 7.2
let situacao

/*if (nota >= 6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}*/

/*if(nota >= 6) situacao = 'APROVADO'
else situacao = 'REPROVADO'*/

nota = 5.3

// As três partes do operador ternário
// 1ª parte: condição(que iria depois do if)
// Entre a primeira e segunda partes -> ?
// 2ª parte: o resultado, caso a condição seja VERDADEIRA
// Entre a segunda e terceira parte -> :
// 3ª parte: o resultado, caso a condição seja FALSA
situacao = nota >= 6? 'APROVADO' : 'REPROVADO'

console.log(situacao)

let user = 'admin'
let userType

userType = user === 'admin' || user ==='root' ? 'Superuser' : 'Ordinary user'
// qualquer operador lógico funciona bem com o operador ternário
// ele só vale quando é uma linha só, ele é conhecido como if rápido

console.log(userType)