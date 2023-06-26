function cliquei(){      
        var data = new Date
        var div2 = window.document.getElementById('imagem')
        var anoAtual = data.getFullYear()
        var anoColocado = window.document.getElementById("txtano") 
        var idade = anoAtual - Number(anoColocado.value)
        if (anoColocado.value.length == 0 || Number(anoColocado.value) > anoAtual) {
                window.alert('[ERRO] VERIFIQUE O ANO')
        } else {
          var Masc = document.getElementsByName('Masc')      
          var gen = ""
           if (Masc[0].checked){
               gen = 'Homem'
               if (idade >=0 && idade <10){
                //criança
                 window.document.body.style.backgroundColor = 'lightgreen'
                backgroundColor = 'lightblue'
                div3.style.backgroundImage = 'url(imagens/manhã.jpg)';      
                div3.style.height = '200px';
                div3.style.width = '200px';
                div3.style.backgroundPosition = 'center center';
                div3.style.borderRadius = '100% '
               } else if (idade <20){
                //jovem
                window.document.body.style.backgroundColor = 'lightgreen'
                div2.style.backgroundImage = 'url(imagens/jovemHomem.jpg)';      
                div2.style.height = '200px';
                div2.style.width = '200px';
                div2.style.backgroundPosition = 'center center';
                div2.style.backgroundPosition = 'cover'
                div2.style.borderRadius = '100% ' 
               }else if (idade < 50) {
                //adulto
                 window.document.body.style.backgroundColor = 'lightgreen'
                backgroundColor = 'lightblue'
                div3.style.backgroundImage = 'url(imagens/manhã.jpg)';      
                div3.style.height = '200px';
                div3.style.width = '200px';
                div3.style.backgroundPosition = 'center center';
                div3.style.borderRadius = '100% '
               }else {
                //idoso
                 window.document.body.style.backgroundColor = 'lightgreen'
                backgroundColor = 'lightblue'
                div3.style.backgroundImage = 'url(imagens/manhã.jpg)';      
                div3.style.height = '200px';
                div3.style.width = '200px';
                div3.style.backgroundPosition = 'center center';
                div3.style.borderRadius = '100% '
               }
           }else if (Masc[1].checked){
                gen = 'Mulher'
                if (idade >=0 && idade <10){
                //criança
                 window.document.body.style.backgroundColor = 'lightgreen'
                backgroundColor = 'lightblue'
                div3.style.backgroundImage = 'url(imagens/manhã.jpg)';      
                div3.style.height = '200px';
                div3.style.width = '200px';
                div3.style.backgroundPosition = 'center center';
                div3.style.borderRadius = '100% '
                } else if (idade <20){
                //jovem
                 window.document.body.style.backgroundColor = 'lightgreen'
                backgroundColor = 'lightblue'
                div3.style.backgroundImage = 'url(imagens/manhã.jpg)';      
                div3.style.height = '200px';
                div3.style.width = '200px';
                div3.style.backgroundPosition = 'center center';
                div3.style.borderRadius = '100% '
                }else if (idade < 50) {
                //adulto
                 window.document.body.style.backgroundColor = 'lightgreen'
                backgroundColor = 'lightblue'
                div3.style.backgroundImage = 'url(imagens/manhã.jpg)';      
                div3.style.height = '200px';
                div3.style.width = '200px';
                div3.style.backgroundPosition = 'center center';
                div3.style.borderRadius = '100% '
                }else {
                //idoso
                 window.document.body.style.backgroundColor = 'lightgreen'
                backgroundColor = 'lightblue'
                div3.style.backgroundImage = 'url(imagens/manhã.jpg)';      
                div3.style.height = '200px';
                div3.style.width = '200px';
                div3.style.backgroundPosition = 'center center';
                div3.style.borderRadius = '100% '
                }
           }  
        }
        div2.innerHTML = `Detectamos ${gen} com idade de ${idade} anos de idade`

}