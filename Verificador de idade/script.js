function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultom.png')
            } else {
                img.setAttribute('src', 'idosom.png')
            }    
        } else if (fsex[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemf.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultof.png')
            } else {
                img.setAttribute('src', 'idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Seu gênero é ${genero} e você tem ${idade} anos!`
        res.appendChild(img)
    }
}