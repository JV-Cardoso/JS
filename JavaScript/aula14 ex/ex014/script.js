function cliquei(){
        let num = window.document.getElementById('txtnum')
        let resultado = window.document.getElementById('tabuada')

        if(num.value.length == 0){
                alert('[ERRO] Verifique os dados digitados.')        
        } else{ let Nnum = Number(num.value)
                let cont = 1
                resultado.innerHTML = ''
                while (cont <= 14){
                        let valor = window.document.createElement('option')
                        valor.text = `${Nnum} X ${cont} = ${Nnum * cont}`
                        resultado.appendChild(valor)
                        cont ++
                }

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