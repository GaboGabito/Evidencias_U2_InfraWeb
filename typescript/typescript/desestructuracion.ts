(()=>{
    const avenger = {
        nombre:"Peter Parker",
        clave:"Spiderman",
        poder:"Telaraña"

    }
        const extraer = ({nombre,poder}:any)=>{

    //const {nombre,poder} = avenger;
      console.log(avenger.nombre);
      console.log(avenger.poder);
}
//extraer(avenger);


const avengers:string[]=['Ironman','Thor','Hulk']

//const [Ironman,Thor,Hulk] =  avengers;
const [ , ,Hulk] =  avengers;


console.log(avengers[0]);
console.log(avengers[1]);
console.log(avengers[2]);

console.log(Hulk);

const extraerArreglo = (avengers:String[])=>{
    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);
}
extraerArreglo(avengers);

 
})();