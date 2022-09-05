//crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, 
//por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas;


const Veiculo = require('./Veiculo');  
class Carro extends Veiculo  {  
    constructor(modelo, marca, cor, numeroRodas,numeroPortas) {  
        super(modelo, marca, cor); 
        this.numeroRodas = numeroRodas || 0; 
        this.numeroPortas = numeroPortas || 0;
        
    }  
    toString() {  
        return JSON.stringify(this);  
    }  
}  
module.exports = Carro;