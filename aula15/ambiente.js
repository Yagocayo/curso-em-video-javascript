let num = [5, 8, 2, 9, 3]

num.push(1) //adiciona uma variavel no final 
num.sort() //organiza as variaveis de forma crescente
console.log(num)
console.log(`O vetor tem  ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)// identifica a posição de uma variavel
if (pos == -1){
    console.log('o valor nao foi encontrado!')
}
else {
    console.log(`o valor esta na posição ${pos}`)
}