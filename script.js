
window.addEventListener('load', function(){ 

let slider = document.querySelector(".slider-container")
let sliderIndividual = document.querySelectorAll(".content-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let width2 = slider.clientWidth;
//let intervalo = 3000;
var h = 9;
window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})


setInterval(function(){
    slides();
    console.log("OMG");
},3000);


function slides(){
    
    slider.style.transform = "translate("+(-width2*contador+h)+"px)";
    slider.style.transition = "transform .3s";
    h=18;

    if(contador == 3){
        slider.style.transform = "translate("+(-width2*contador+26)+"px)";
        slider.style.transition = "transform .3s";
    }
    if(contador == 4){
        slider.style.transform = "translate("+(-width2*contador+33)+"px)";
        slider.style.transition = "transform .3s";
    }
    /*  if(contador = 1){
            slider.style.transform = "translate("+(-99.6) + "%)";
            slider.style.transition = "transform .3s";
            console.log("falta");
        }
        if(contador = 3){
            slider.style.transform = "translate("+(-107.2) + "%)";
            slider.style.transition = "transform .3s";
            console.log("faltapoco");
        }*/
        contador++;
        console.log("Goo")



    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}
 
})
