function fatorial(num) {
    let fator = 1
    for (cont = num; cont > 1; cont--){
        fator *= cont
    }
    return fator
}
console.log(fatorial(5))

// 5! = 5 X 4 X 3 X 2 X 1