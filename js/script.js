function insert(num){
    document.monitor.vertexto.value = document.monitor.vertexto.value+num
}

function equal(){
    let resultado =document.monitor.vertexto.value;
    if(resultado){
        document.monitor.vertexto.value = eval(resultado)
    }
}

function limpar(){
    document.monitor.vertexto.value = "" ; 
}

