function mostrarmensaje(){
    alert("El clima esta cargando");
}
function removerCookies(elemento){
    elemento.closest('.cookies').remove();
}
function cambiartemperatura(elemento){
    console.log(elemento.value);
    let opcion = elemento.value;
    let temperaturas = document.querySelectorAll('.max > span , .min > span');
    if(opcion == 'f'){
        for(let i=0 ; i<temperaturas.length; i++){
            let temperatura = temperaturas[i].innerText;
            let temperaturafinal = (temperatura * 1.8) +32;
            temperaturas[i].innerText = Math.round(temperaturafinal);
        }
    }
    else{
        if(opcion == 'c'){
            for(let i=0 ; i<temperaturas.length; i++){
                let temperatura = temperaturas[i].innerText;
                let temperaturafinal = (temperatura -32) / 1.8;
                temperaturas[i].innerText = Math.round(temperaturafinal);
            }
        }
        
    }
}