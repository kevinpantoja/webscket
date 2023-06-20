const semanas = [
    {
        titulo:"Primera Tarea",
        descripcion:"Crear una cuenta en la nube Google Cloud, web con spring y postgresql",
        herramientas: "Spring boot-Postgresql-Html-Java Script-Css-Google Cloud",
        link_documentos: "https://drive.google.com/drive/folders/19SXp8SlYZelTWo-1d8tFqxu62D8n7IyR?usp=share_link",
        fecha: "15/05/2023",
        link_web: "http://storage.googleapis.com/sistemas-distribuidos-g2-sanmarcos/index.html"
    },
    {
        titulo:"Segunda Tarea",
        descripcion:'Integrar a la primera tarea un websocket que lea de manera aleatoria y cada 120s datos de temperatura y humedad, mostrando hora de medición',
        herramientas: "Html-Java Script-Css-Google Cloud-Node-mongo_db",
        link_documentos: "https://drive.google.com/drive/folders/1LCszJS2kGEOkQD_yM1qEsB15lewOKack?usp=drive_link",
        fecha: "18/06/2023",
        link_web: "http://storage.googleapis.com/sistemas-distribuidos-g2-sanmarcos/websocket.html"
    },
];



const $tabla = document.querySelector(".tabla");

i = 0;
for(tarea of semanas){
    console.log(tarea)
    /*let datos_fila = semanas[i];*/
    const $nuevaFila = document.createElement("tr");

    let elemento_tema = `
        <td class="tabla__tema">
        <h2>${tarea.titulo}</h2>
        <p>${tarea.descripcion}</p>
        </td>
    `

    let elemento_clase = tarea.hasOwnProperty("link_documentos")?
    `
        <td class="tabla__clase">
        <a class="clase__elemento" href="${tarea.link_documentos}" target="__blank">
            <img class="tabla__logo" src="./img/icon/drive.png" alt="tarea ${i+1}" title="tarea ${i+1}">
            <span>tarea ${i+1}</span>
        </a>
        </td>
    `:'<td class="tabla__clase"></td>'

    let elemento_linkWeb = tarea.hasOwnProperty("link_web")?
    `
        <td class="tabla__clase">
        <a class="clase__elemento" href="${tarea.link_web}"">
            <img class="tabla__logo" src="./img/icon/web.png" alt="web ${i+1}" title="web ${i+1}">
            <span>Link web ${i+1}</span>
        </a>
        </td>
    `:'<td class="tabla__clase"></td>'

    
    let elemento_trabajo = `<td class="tabla__trabajo"></td>`;
    if(tarea.hasOwnProperty("herramientas")){
        elemento_trabajo = `<td class="tabla__trabajo trabajo__elementos">`;
        "Spring boot-Postgresql-Html-Java Script-Css-Google Cloud"
        elementos = tarea.herramientas.split("-")
        for(let i = 0; i < elementos.length; i = i + 1){
            let elemento = elementos[i].replace("%20","_").replace(" ","_");
            elemento_trabajo = elemento_trabajo + 
            `<div class="clase__elemento">
            <img class="tabla__logo" src="./img/icon/${elemento}.png" alt="${elemento}" title="${elemento}">
            <span>${elemento.replace("_"," ")}</span>
            </div>`
        }
        elemento_trabajo = elemento_trabajo + `</td>`;
    }

    
    $nuevaFila.innerHTML = `
    <td class="tabla__semana">${tarea.fecha}</td>
    ${elemento_tema}
    ${elemento_clase}
    ${elemento_trabajo}
    ${elemento_linkWeb}`
    $tabla.appendChild($nuevaFila);
    i = i + 1
}