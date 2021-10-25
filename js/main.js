$(function(){
    // $(".reves").hide();
    $(".information").click(function(){
        $(".reves").show(500);
        $(".information").hide();
    });
    $(".reves").click(function(){
        $(".information").show(500);
        $(".reves").hide();
    });
});


let number = document.getElementById('number');
let nombre = document.getElementById('nombre');
let date = document.getElementById('date');
let seguridad = document.getElementById('seguridad');
let nnombre = "Sebastián López";
let ncod = "3212 4312 3123 4312";
let ndate = "07/29";
let nseguridad = "143";
//Impresión
number.innerHTML = ncod;
nombre.innerHTML = nnombre;
date.innerHTML = ndate;
seguridad.innerHTML = nseguridad;