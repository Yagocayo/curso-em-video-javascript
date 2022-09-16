
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/fotomanha.png'
        document.body.style.backgroundColor ='#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'imagens/fototarde.png'
        document.body.style.backgroundColor ='rgb(240, 173, 86)'
    } else {
        //boa noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.backgroundColor ='#00113f'
    }   

}