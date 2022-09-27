let amigo = {
    nome:'josé', 
    sexo: 'm', 
    peso: 85.4, 
    engordar(p=0){ 
        console.log('engordou')
        this.peso += p

    }} 

    amigo.engordar(2)
    console.log(`${amigo.nome} pasa ${amigo.peso}kg`)
//console.log(amigo)

//console.log(amigo.nome) da para especificar 