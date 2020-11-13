(function(){
    
    function activar(quien: string, 
                    objeto:string = 'batiseñal', 
                    momento?: string){
        if(momento){
            console.log(`${quien} activo la ${objeto} en la ${momento}.`);
        }else{
            console.log(`${quien} activo la ${objeto}.`);
        }
    }
    activar('Gordon');
})();



