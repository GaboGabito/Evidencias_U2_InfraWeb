(()=>{

    class Pirata {//Notación camello mayúscula
        
        constructor(public nombre:string,
                    public equipo:string,
                    public nombreReal:string,
                    public usarioFruta:boolean=true,
                    public peleasGanadas:number=8){
            
        }
    } 
        const luffy = new Pirata('Sombrero de Paja','Mugis','Luffy');


        console.log(luffy);
    
    



}
)();
