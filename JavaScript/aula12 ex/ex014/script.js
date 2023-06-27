function cliquei(){
        var dataAtual = new Date()
        var anoAtual = dataAtual.getFullYear()
        var anoColocado = window.document.getElementById('aNasci')
        var resultado = window.document.getElementById('imagem')
        if (anoColocado.value.length == 0){
                window.alert('[ERRO] insira um valor válido')
        } 
        if (anoColocado.value > anoAtual){
                window.alert (`[ERRO] o ano ${anoColocado.value} é maior do que ${anoAtual}`)}
        else {
                
                var sex = window.document.getElementsByName('gen')
                var idade = anoAtual - Number(anoColocado.value)
                var genero = ''

                if (sex[0].checked) {
                        genero = 'um Homem'
                } else{
                        genero = 'uma Mulher'
                }
                resultado.innerHTML = `Foi encontrado ${genero} com idade de ${idade} anos`
        }
        
}