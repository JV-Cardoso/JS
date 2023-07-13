let valor = [8, 1, 7, 4, 2, 9]
valor.push(5)
valor.sort()
/*for(ind = 0; ind <= valor.length; ind++){
    console.log(`A posição ${ind} tem o valor ${valor[ind]}`)
}
*/


for(let pos in valor) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}