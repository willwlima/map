function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 23
    msg.innerHTML = `Cupom disponivel até ${hora} horas.<br> Vale 50% de desconto`
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'pinWiDi.png'
        document.body.style.background = '#fef3adff'
    }else if (hora >= 12 && hora <=13) {
        // Boa Tarde!
        msg.innerHTML = `Cupom disponivel até ${hora} horas.<br> Vale 40% de desconto`
        img.src = 'img/pinWiDi.png'
        document.body.style.background = '#34495E'
    } else if (hora >=14 && hora <=15) {
        msg.innerHTML = `Cupom disponivel até ${hora} horas.<br> Vale 30% de desconto`
        img.src = 'img/pinJucelinoPizza.png'
        document.body.style.background = '#34495E'
    } else if (hora >=16 && hora <=17) {
        msg.innerHTML = `Cupom disponivel até ${hora} horas.<br> Vale 20% de desconto`
        img.src = 'img/pinWiDi.png'
        document.body.style.background = '#34495E'
    } else if (hora >=18 && hora <=19) {
        msg.innerHTML = `Cupom disponivel até ${hora} horas.<br> Vale 10% de desconto`
        img.src = 'img/pinJucelinoPizza.png'
        document.body.style.background = '#34495E'
    } else if (hora >=20 && hora <=21) {
        msg.innerHTML = `Cupom disponivel até ${hora} horas.<br> Vale 0% de desconto`
        img.src = 'img/pinWiDi.png'
        document.body.style.background = '#34495E'
    } else {
        // Boa Noite!
        msg.innerHTML = `Volte mais tarde!`
        img.src = 'img/triste.jpg'
        document.body.style.background = '#34495E'
    }


}