//implemente uma classe abstrata Veículo com um construtor padrão;
//o construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros;

class Veiculo {      
    constructor(modelo, marca, cor){      
        this.modelo = modelo || "";
        this.marca = marca || "";
        this.cor = cor || "";     
    }      
}      
      
module.exports = Veiculo;  