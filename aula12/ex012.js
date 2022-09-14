var agora = new Date() // para ver a hora atual
var hora = agora.getHours()// para ver a hora atual
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia')
}else if (hora < 18) {
    console.log('boa tarde')
}else {
    console.log('Boa noite')
    
}