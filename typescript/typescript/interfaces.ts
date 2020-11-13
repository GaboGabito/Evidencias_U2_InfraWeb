(()=>{
//INTWEFACES DE TypeSricpt
    interface Xmen{  //Unicas de Typescript
        nombre:string;
        edad:number;
        poder:string;
    }

    const enviarMision = (yonkou:Xmen)=>{
        console.log(`Enviando a ${yonkou.nombre} a navegar`);
    }

    const shanks:Xmen ={
        nombre:'Shanks',
        edad:55,
        poder:'Haki'
    }
    
enviarMision(shanks)


})();
