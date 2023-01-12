export const id_generators={
    'genera_id':function (){
        
        return genera_cadena(24);
    },
    'genera_guid':function (){
    
        return genera_cadena(8)+'-'+genera_cadena(4)+'-'+genera_cadena(4)+'-'+genera_cadena(12);
    }
};
function genera_cadena(tam){
    const num=[0,1,2,3,4,5,6,7,8,9];
    const letras=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const digito=[num,letras];
    var aux='';
    var i=0;
    for(var j=0;j<tam;j++){
        i=Math.floor(Math.random()*50)%2;
        if(i==1){
            i=Math.floor(Math.random()*26);
            aux+=digito[1][i];
        }else{
            i=Math.floor(Math.random()*10);
            aux+=digito[0][i];
        }
    }
    return aux;
}