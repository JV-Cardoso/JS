function clicar(){
        var inicio = window.document.getElementById('inicio')
        var fim = window.document.getElementById('fim')
        var passo = window.document.getElementById('passo')
        var resultado = window.document.getElementById('imagem')
        
        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)


        if (inicio < fim){
                for(var contador = inicio; contador <= fim; contador += passo){
                        resultado.innerHTML += `${contador} `
        }}
        else if(inicio > fim){
                for(var contador = inicio; contador >= fim; contador -= passo){
                        resultado.innerHTML += `${contador} `
                }}
        
        
        
}