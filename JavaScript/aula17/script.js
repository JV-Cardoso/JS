function cliquei(){
        let num = window.document.getElementById('txtnum')
        valore = []
        let resultado = window.document.getElementById('tabuada')
        if(num.value.length == 0 || num.value > 100 || num.value == 0) {
                alert('[ERRO] Verifique os dados digitados.')        
        } else{ let Nnum = Number(num.value)
                resultado.innerHTML = ''
                valore.push(Number(Nnum))
                let cont = 1
                let valor = window.document.createElement('option')
                valor.text = `Valor ${Nnum} Adicionado.`
                resultado.appendChild(valor)
                        

                }

        }














































/*function cliquei(){
        let num = window.document.getElementById('txtnum')
        let resultado = window.document.getElementById('tabuada')
        if (num.value.length == 0){
                alert('[ERRO] Verifique os dados')
        } else{
                let Nnum = Number(num.value)
                var cont = 1
                while (cont <= 10){
                        var valor = window.document.createElement('option')
                        valor.text = `${Nnum} x ${cont} = ${Nnum * cont}`
                        resultado.appendChild(valor)                        
                        cont ++
                                
                }
        }

}*/