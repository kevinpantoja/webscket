


function init(){
    wsConnect();
}

function wsConnect(){
    console.log("conectando");
    const socket = new WebSocket('ws://35.192.52.153:8080');
    console.log("luego de conectando");

    socket.onopen = function(event) {
        console.log('Conexión establecida');
    };

    socket.onmessage = function(event) {
        const message = JSON.parse(event.data);
        const fechaActual = new Date();
        const dia = fechaActual.getDate();
        const mes = fechaActual.getMonth() + 1; // Los meses comienzan en 0, por lo que se suma 1
        const anio = fechaActual.getFullYear();
        const hora = fechaActual.getHours();
        const minutos = fechaActual.getMinutes();
        const segundos = fechaActual.getSeconds();
        tiempo = `${dia}/${mes}/${anio} ${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        document.querySelector(".datos-v-temperatura").textContent = (message.temperatura).toFixed(0) + " °C";
        document.querySelector(".datos-v-humedad").textContent = (message.humedad).toFixed(2) + " %";
        document.querySelector(".datos-v-hora").textContent = tiempo;
        /*console.log(message);*/
    };

    socket.onclose = function(event) {
        console.log('Conexión cerrada');
    };
}

window.addEventListener("load",init, false);