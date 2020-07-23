var account={
    titular: "Alex",
    saldo: 0,

    ingresar: function(valor){
        console.log('El valor que usted ingresó fue' + valor + 'pesos colombianos');
        return this.saldo +=valor;
    },

    extraer: function(valor){
        console.log('El valor que usted ha retirado es' + valor + 'pesos colombianos');
        return this.saldo -= cantidad;
        },

    informar: function(){
        return "Titular de la cuenta:" + this.titular + 'Su saldo actual es');
    }
}
