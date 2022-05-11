let pontosNos = 0
let pontosEles = 0

let txtNos = window.document.getElementById("txtNos")
let txtEles = window.document.getElementById("txtEles")



function addPontos(type){
    if(type == 1 && pontosNos >= 0 && pontosNos < 13){
        pontosNos++
        
        
    }else if(type == 2 && pontosEles >= 0 && pontosEles < 13){
        pontosEles++
        
    }else{
        console.log('Pontos invalidos')
    }

txtEles.innerHTML = pontosEles
txtNos.innerHTML = pontosNos
   
}

function removePontos(type){
    if(type == 1 && pontosNos > 0 && pontosNos <= 13){
        pontosNos--
        
        
    }else if(type == 2 && pontosEles > 0 && pontosEles <= 13){
        pontosEles--
        
    }else{
        console.log('Pontos invalidos')
    }

txtEles.innerHTML = pontosEles
txtNos.innerHTML = pontosNos
   
}

function zerar(){
    pontosEles = 0
    pontosNos = 0
    txtEles.innerHTML = pontosEles
    txtNos.innerHTML = pontosNos
}