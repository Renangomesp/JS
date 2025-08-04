var num = [5, 8, 9, 3, 4]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posicoes`)
console.log(`o primeiro valor do vetor e ${num [0]}`)
var pos = num.indexOf(4)
if(pos == -1){
    console.log(`o valor nao foi encontrado`)
} else{
    console.log(`o valor esta na posicao ${pos} `)
}