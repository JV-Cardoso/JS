function carregar() {
        var data = new Date
        var div3 = document.querySelector('div#imagem')
        var hora = data.getHours() 
        var minutos = data.getMinutes()
        var div1 = window.document.querySelector('div#Letra')
        
        div1.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.` 
        if (hora >= 0 && hora <12){
                //Bom dia
                window.document.body.style.backgroundColor = 'lightgreen'
                backgroundColor = 'lightblue'
                div3.style.backgroundImage = 'url(imagens/manhã.jpg)';      
                div3.style.height = '200px';
                div3.style.width = '200px';
                div3.style.backgroundPosition = 'center center';
                div3.style.borderRadius = '100% '
        } else if (hora >= 12 && hora < 18) {
                //Boa tarde
                window.document.body.style.backgroundColor = 'darkred'
                div3.style.backgroundImage = 'url(imagens/tarde.jpg)';      
                div3.style.height = '200px';
                div3.style.width = '200px';
                div3.style.backgroundPosition = 'center center';
                div3.style.borderRadius = '100% '
        } else {
                //Boa noite!
                window.document.body.style.backgroundColor = 'lightblue'
                div3.style.backgroundImage = 'url(imagens/noite.jpg)';      
                div3.style.height = '200px';
                div3.style.width = '200px';
                div3.style.backgroundPosition = 'center center';
                div3.style.borderRadius = '100% '
        }
}

