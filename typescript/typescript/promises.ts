(()=>{//PROMESAS
/*
    //Promesas se ejecutan de manera asíncrona
     console.log('inicio');
                               //Si cumple   Si no
     const prom1 = new Promise((  resolve,   reject)=>{
        
        setTimeout(()=>{
            reject('Se termino el timeout');
        },1000);

     });

     prom1
         .then(mensaje => console.log(mensaje))
         .catch(err=>console.warn(err));

     console.log('fin');*/

     const saldo=2000;
     const retiro=30000;

     const prom1 = new Promise((  resolve,   reject)=>{
      if(retiro<saldo){
        resolve(`
        Saldo: ${saldo}
        Retiro: ${retiro}
        Actual: ${saldo-retiro}`)}
      if(retiro>saldo){
        reject(`
        Saldo: ${saldo}
        Retiro: ${retiro}
        No es posible realizar el retiro. Fondos insuficientes.`)}
           
       /* setTimeout(()=>{
            console.log('Transferencia realizada');
        },1000);*/


     });

     prom1
         .then(mensaje => console.log(mensaje))
         .catch(err=>console.warn(err));


    /*************** video********************/

            const retirarDinero = (montoRetirar:number):Promise<number>=>{
                
                let dineroActual=1000;
                return new Promise((resolve,reject)=>{
                    if (montoRetirar>dineroActual){
                        reject('No hay suficientes fondos');
                    }else{
                        dineroActual-=montoRetirar;
                        resolve(dineroActual);
                    }
        
                });
        
        }
        
        retirarDinero(500)
        .then(montoActual => console.log(`Me queda ${montoActual}`))
        .catch(console.warn)
        


})();