function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   // var hora = data.getHours()
   var hora = 18
    msg.innerHTML = `Agora Sao ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#96987d'
        //bom dia
    } else if (hora >= 12 && hora < 18){
       //boa tarde
        img.src = 'tarde.png'     
        document.body.style.background = '#7b7685'
    } else{
        img.src = 'noite.png'
        document.body.style.background = '#043261'
        //boa noite
    }
   








}      


