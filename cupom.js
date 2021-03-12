function carregar() { 
    var msg = window.document.getElementById('msg')
    var msg1 = window.document.getElementById('msg1')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var dia = data.getDate();
    var mes = (data.getMonth() + 1);
    // var hora = data.getHours();
    
    // var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Disponivel até as ${hora} horas do dia ${dia}/${mes}.<br><b> Vale 30% de desconto`
    // msg.innerHTML = `Cupom disponivel até ${hora} horas .<br> Vale 50% de desconto`
    if (hora >= 10 && hora <= 12) {
        // Bom Dia!
        img.src = 'img/pinWiDi.png'
        document.body.style.background = '#fef3adff'
    }else if (hora >= 12 && hora <=13) {
        // Boa Tarde!
        msg.innerHTML = `Disponivel até as ${hora +1} horas do dia ${dia}/${mes}.<br><b> Vale 30% de desconto`
        msg1.innerHTML = `<b>Jucelino's Pizza</b><br/>Apenas delivery<br> <a href='tel:1799221-2980'><i class='fas fa-phone-square-alt phone__modify'></i></a>  <a href='https://whats.link/jucelinospizzarp'><i class='fab fa-whatsapp-square whatsapp__modify'></i></a><br>`
        img.src = 'img/pinJucelinoPizza.png'
        document.body.style.background = '#34495E'
    } else if (hora >=14 && hora <=14) {
        msg.innerHTML = `Disponivel até as ${hora +1} horas do dia ${dia}/${mes}.<br><b> Vale 30% de desconto`
        // msg1.innerHTML = `<b>Jucelino's Pizza</b><br/>Apenas delivery<br> <a href='tel:1799221-2980'><i class='fas fa-phone-square-alt phone__modify'></i></a>  <a href='https://whats.link/jucelinospizzarp'><i class='fab fa-whatsapp-square whatsapp__modify'></i></a><br>`
        img.src = 'img/pinJucelinoPizza.png'
        document.body.style.background = '#34495E'
    } else if (hora >=16 && hora <=17) {
        msg.innerHTML = `Disponivel até as ${hora +1} horas do dia ${dia}/${mes}.<br><b> Vale 30% de desconto`
        // msg1.innerHTML = `<b>Jucelino's Pizza</b><br/>Apenas delivery<br> <a href='tel:1799221-2980'><i class='fas fa-phone-square-alt phone__modify'></i></a>  <a href='https://whats.link/jucelinospizzarp'><i class='fab fa-whatsapp-square whatsapp__modify'></i></a><br>`
        img.src = 'img/pinWiDi.png'
        document.body.style.background = '#34495E'     
    } else {
        // Boa Noite!
        msg.innerHTML = `Volte mais tarde!`
        img.src = 'img/triste.jpg' 
        document.body.style.background = '#34495E'
    } 
}