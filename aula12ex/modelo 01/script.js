function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(']ERRO] verifique os dados novamente')
    } else{
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'h crianca.png')
                //crianca
            } else if (idade < 21){
                img.setAttribute('src', 'm crianca.png')
                //jovem
            } else if (idade < 50){
                 img.setAttribute('src', 'h jovem.png')
                //adulto
            } else{
                 img.setAttribute('src', 'h idoso.png')
                //idoso
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
             if (idade >= 0 && idade < 10){
                 img.setAttribute('src', 'm crianca.png')
                //crianca
            } else if (idade < 21){
                 img.setAttribute('src', 'm jovem.png')
                //jovem
            } else if (idade < 50){
                 img.setAttribute('src', 'm adulta.png')
                //adulto
            } else{
                 img.setAttribute('src', 'm idosa.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}