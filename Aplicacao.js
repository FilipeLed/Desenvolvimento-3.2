//desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos diferentes (subclasses), utilizando o método clone dos objetos para preencher o array;
//na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array veículos;
//no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos.



const Moto = require("./moto");
const Carro = require("./carro");



let array =[
  moto1 = Object.create(new Moto('Biz 125','Honda','azul',2,0)),
  moto2 = Object.create(new Moto('Elite 125','Honda','prata',2,0)),
  moto3 = Object.create(new Moto('PCX','Honda','azul',2,0)),
  carro1 = Object.create(new Carro('Toro','Fiat','vermelho',4,2)),
  carro2 = Object.create(new Carro('Jeep Renegade','Fiat','azul',4,4)),
  carro3 = Object.create(new Carro('Uno mile','Fiat','branco',4,4))
  ]

  
  let novaArray = Object.create(array)

  
  function represent(vetor){

    vetor.forEach((elemento) => {
      console.log("Marca: "+elemento.modelo+", modelo: "+elemento.marca+", cor:"+elemento.cor+", número de rodas:"
      +elemento.numeroRodas+",número de portas:"+elemento.numeroPortas);
    })

  }

  represent(array)
  represent(novaArray)