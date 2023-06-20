const $boton_informacion = document.querySelector(".desplegar__informacion"),
$sumilla = document.querySelector(".sumilla"),
$competencia__general = document.querySelector(".competencia__general");
$boton_informacion.addEventListener("click",(e)=>{
    if(e.target.innerText == "Desplegar"){
        $sumilla.style.display = "block";
        $competencia__general.style.display = "block";
        e.target.innerText = "ocultar"
    }else{
        $sumilla.style.display = "none";
        $competencia__general.style.display = "none";
        e.target.innerText = "desplegar";
    }
})