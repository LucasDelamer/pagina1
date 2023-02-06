/** 
document.getElementById("boton").onclick = function() {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento"
}
*/
let estadoTexto=true;



document.getElementById("boton").addEventListener('click',function() {
    console.log.apply("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento"
    
})

document.getElementById("boton_color").addEventListener('click',function(){
    document.body.style.backgroundColor = '#ff0000'
})

document.getElementById("boton_default").addEventListener('click',function() {
    document.body.style.backgroundColor = 'blue'    
})

document.getElementById("boton_ocultar_txt").addEventListener('click',function() {
    if(estadoTexto) {
    document.getElementById("demo").style.display= 'none'; 
    estadoTexto=false;
    console.log("stop");
    } else { document.getElementById("demo").style.display= 'block';
            estadoTexto=true
            console.log("go");
            }
})

document.getElementById("icono_wp").addEventListener('click',function(){
    document.body.style.backgroundColor = 'green'
})
