function atualizarContador() {
    const inicio = new Date("May 2, 2023 18:00:00").getTime();
    const agora = new Date().getTime();
    const diferenca = agora - inicio;

    const ano = 1000 * 60 * 60 * 24 * 365;
    const mes = ano / 12;
    const dia = 1000 * 60 * 60 * 24;
    const hora = 1000 * 60 * 60;
    const minuto = 1000 * 60;
    const segundo = 1000;

    document.getElementById("anos").innerHTML = Math.floor(diferenca / ano) + " ano";
    document.getElementById("meses").innerHTML = Math.floor((diferenca % ano) / mes) + " meses";
    document.getElementById("dias").innerHTML = Math.floor((diferenca % mes) / dia) + " dias";
    document.getElementById("horas").innerHTML = Math.floor((diferenca % dia) / hora) + " horas";
    document.getElementById("minutos").innerHTML = Math.floor((diferenca % hora) / minuto) + " minutos";
    document.getElementById("segundos").innerHTML = Math.floor((diferenca % minuto) / segundo) + " segundos";
}

setInterval(atualizarContador, 1000);