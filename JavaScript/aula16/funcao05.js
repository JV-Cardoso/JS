// Recursividade

function fatorial(num){
    if (num == 1){
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}
console.log (fatorial(5))
