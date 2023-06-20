function init(){
    wsConnect();
}

function wsConnect(){
    const socket = new WebSocket('ws://localhost:3000');

    socket.onopen = function(event) {
        console.log('Conexión establecida');
    };

    socket.onmessage = function(event) {
        const message = JSON.parse(event.data);
        document.querySelector(".datos-v-temperatura").textContent = (message.temperatura).toFixed(0) + " °C";
        document.querySelector(".datos-v-humedad").textContent = (message.humedad).toFixed(2) + " %";
        document.querySelector(".datos-v-hora").textContent = message.tiempo;
        /*console.log(message);*/
    };

    socket.onclose = function(event) {
        console.log('Conexión cerrada');
    };
}

window.addEventListener("load",init, false);